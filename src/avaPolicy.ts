import * as core from 'aws-cdk-lib';

import * as constructs from 'constructs';
import * as va from './index';
import { iamIdentityCenter } from './index';

export interface DeviceTrusts {
  readonly deviceTrustProvider: va.ITrustProvider;
  readonly minscore?: number; // used for crowdstrike
  readonly acceptedRisks?: va.JamfRisk[]; // use for Jamf
}

export interface UserTrusts {
  readonly userTrustProvider: va.ITrustProvider;
  readonly identityGroups?: iamIdentityCenter.IGroup[] | undefined; // used for an Identity Center Trust
  readonly verifiedEmail?: VerifiedEmail | undefined; // used for an Indentity Center Trust
  readonly conditions?: string[]; // used for okta conditions.
}

export enum VerifiedEmail {
  REQUIRED = 'Required',
  NOT_REQUIRED = 'NotRequired'
}

export interface AvaPolicyProps {
  /**
   * DeviceTrusts:
   * @default none
   */
  readonly deviceTrusts?: DeviceTrusts[] | undefined;
  /**
   * User Trust Provider:
   */
  readonly userTrusts?: UserTrusts[] | undefined;
  /**
   * Restrict to specific Ip address ranges
   * Consider using WAF
   */
  readonly allowIPranges?: String[] | undefined;
  /**
   * Block IP ranges
   * Consider using WAF
   */
  readonly blockIPranges?: String[] | undefined;

}

export interface IAvaPolicy {
  /**
  * Name of the Group
  */
  readonly policy: string;
}

interface IUserTrustProvider {
  groups: string[];
  email: string;
  conditions: string[];
}


/**
 *
 */
interface IPolicy {
  usertrustProviders: IUserTrustProvider[];
  devicetrustProviders: string[];
  allowIpAddressRanges: string[];
  restrictIpAddressRanges: string[];
}

/**
 * Creates Identity Store Group
 */
export class AvaPolicy extends core.Resource implements IAvaPolicy {

  /**
  * The policy string
  */
  readonly policy: string;

  constructor(scope: constructs.Construct, id: string, props: AvaPolicyProps) {
    super(scope, id);


    var multipleIamTrustProvider: boolean = false;

    var policyObject:IPolicy = {
      usertrustProviders: [],
      devicetrustProviders: [],
      allowIpAddressRanges: [],
      restrictIpAddressRanges: [],
    };

    // Usertrusts first
    props.userTrusts?.forEach((userTrust) => {

      var userTrustPolicy: IUserTrustProvider = {
        groups: [],
        email: '',
        conditions: [],
      };
      const policyRef = userTrust.userTrustProvider.policyReferenceName;

      // IAM_IDENTIFY
      if (userTrust.userTrustProvider.userTrustType == va.UserTrustProviderType.IAM_IDENTITY_CENTER) {

        // check if IAM identity provider has been used more than once
        if (multipleIamTrustProvider) {
          throw new Error('Can only provide one IAM trust Provider');
        }
        multipleIamTrustProvider = true;


        if ( userTrust.identityGroups != undefined ) {
          userTrust.identityGroups?.forEach((group) => {
            userTrustPolicy.groups?.push(`context.${policyRef}.groups has "${group.id}"`);
          });

        }
        // add verified email if required
        if ( userTrust.verifiedEmail ) {
          userTrustPolicy.email = `context.${policyRef}.user.email.verified == true`;
        }

      // OIDC
      } else if (userTrust.userTrustProvider.userTrustType == va.UserTrustProviderType.OIDC) {

        if ( userTrust.conditions ) {
          userTrust.conditions.forEach((condition) => {
            userTrustPolicy.conditions?.push(`context.${policyRef}.${condition}`);
          });
        }
      };

      policyObject.usertrustProviders?.push(userTrustPolicy);

    });

    // device Trusts
    if (props.deviceTrusts) {

      props.deviceTrusts.forEach((trust) => {

        var policyRef = trust.deviceTrustProvider.policyReferenceName;

        if (trust.minscore) { // this is crowdstrike
          policyObject.devicetrustProviders?.push(`context.${policyRef}.assessent.overall > ${trust.minscore}`);
        }

        if (trust.acceptedRisks) { // this is for jamf
          var risks = '';
          trust.acceptedRisks.forEach((risk, index) => {
            if (index == 0) {
              risks = risks.concat(`"${risk}"`);
            } else {
              risks = risks.concat(`, "${risk}"`);
            }
          });
          policyObject.devicetrustProviders?.push(`[${risks}].contains(context.${trust.deviceTrustProvider.policyReferenceName}.risk)`);
        };
      });
    };

    // allow ip address blocks
    if (props.allowIPranges) {
      props.allowIPranges.forEach((allowIPrange) => {
        policyObject.allowIpAddressRanges?.push(`ip(context.http_request.client_ip).isInRange(ip("${allowIPrange}"))`);
      });
    }

    // block ip address blocks
    if (props.blockIPranges) {
      props.blockIPranges.forEach((blockIPrange) => {
        policyObject.restrictIpAddressRanges?.push(`ip(context.http_request.client_ip).isInRange(ip("${blockIPrange}"))`);
      });
    }

    var permit: string[] = [];
    var forbid: string[] = [];

    // Create the forbid policy
    if (policyObject.restrictIpAddressRanges) {
      forbid.push('\t(');
      policyObject.restrictIpAddressRanges.forEach((restrictIPrange, index) => {
        if (index == 0) {
          forbid.push('\t\t' + restrictIPrange);
        } else {
          forbid.push('\t\t' + '|| ' + restrictIPrange);
        }
      });
      forbid.push('\t)');
    }

    if (forbid.length > 0) {
      forbid.unshift('forbid(principal,action,resource) when {');
      forbid.push('};');
    }

    //Create the Permit policy

    var addAnd: boolean = false;

    // allow IP ranges
    if (policyObject.allowIpAddressRanges) {
      permit.push('\t(');
      policyObject.allowIpAddressRanges.forEach((allowIPrange, index) => {
        if (index == 0) {
          permit.push('\t\t' + allowIPrange);
        } else {
          permit.push('\t\t' + '|| ' + allowIPrange);
        }
      });
      permit.push('\t)');
      addAnd = true;
    }
    // deviceTrustProviders
    if (policyObject.devicetrustProviders) {
      if (addAnd) {
        permit.push('\t&&');
      }
      permit.push('\t(');
      addAnd = true;

      policyObject.devicetrustProviders.forEach((deviceTrust, index) => {
        if (index == 0) {
          permit.push('\t\t' + deviceTrust);
        } else {
          permit.push('\t\t' + '|| ' + deviceTrust);
        }
      });
      permit.push('\t)');
      addAnd = true;
    };


    // user trust providers
    if (policyObject.usertrustProviders) {
      if (addAnd) {
        permit.push('\t&&');
      }
      addAnd = true;


      const userTrustProviderCount = policyObject.usertrustProviders?.length;

      if (userTrustProviderCount != 1) {
        permit.push('\t(');
      }

      policyObject.usertrustProviders?.forEach((userTrust, index) => {

        if (index != 0) {
          permit.push('\t\t' + '||');
        }

        if (userTrust.email && userTrust.groups) {
          permit.push('\t\t('); //  (
        }

        if (userTrust.groups.length !=0) {
          permit.push('\t\t\t('); //    (
          userTrust.groups.forEach((group, index2) => {
            if (index2 == 0) {
              permit.push('\t\t\t\t' + group); //    group xxxx
            } else {
              permit.push('\t\t\t\t' + '|| ' + group); //    || group yy
            }
          });
          permit.push('\t\t\t)'); //    )
        }

        if (userTrust.email && userTrust.groups) {
          permit.push('\t\t\t&&'); //  &&
        }

        if (userTrust.email) {
          permit.push('\t\t\t('); //  (
          permit.push('\t\t\t\t' + userTrust.email); //    email
          permit.push('\t\t'); //  )
        }

        if (userTrust.email && userTrust.groups) {
          permit.push('\t\t\t)'); //
        }

        if (userTrust.conditions) {

          userTrust.conditions.forEach((condition, index3) => {
            if (index3 == 0) {
              permit.push('\t\t(');
              permit.push('\t\t\t' + condition);
            } else {
              permit.push('\t\t\t' + '|| ' + condition);
            }
          });
          permit.push('\t\t)');
        };
      });

      if (userTrustProviderCount != 1) {
        permit.push('\t)');
      }
    }


    if (permit.length > 0) {
      permit.unshift('permit(principal,action,resource) when {');
      permit.push('};');
    }


    // Create the test policy

    var policy = '';
    forbid.forEach((line) => {
      policy = policy.concat(line + '\n');
    });
    permit.forEach((line) => {
      policy = policy.concat(line + '\n');
    });

    this.policy = policy;

  }
}

