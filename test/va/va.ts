import * as core from 'aws-cdk-lib';
import {
  aws_logs as logs,
}
  from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as identitycenter from '../../src/iamIdentityCenter';
import * as ava from '../../src/index';


export interface VerifiedAccessProps extends core.StackProps {
}

export class VerifiedAccess extends core.Stack {

  redAccessGroupDescription: string;

  constructor(scope: Construct, id: string, props: VerifiedAccessProps) {
    super(scope, id, props);

    // create a ava user trust Provider that uses IAM identity Center
    const iamTrustProvider = ava.TrustProvider.iamIdentityCenter(this, 'identityTrustProvider', {});

    // create a oicd user trust Provider that uses OIDC
    const oktaTrustProvider = ava.TrustProvider.oidc(this, 'okta', {
      policyReferenceName: 'okta',
      // need to pad this out.
      oidcOptions: {},
    });


    // create a ava device trust provider that uses CrowdStrike
    const crowstrikeTrustProvider = ava.TrustProvider.crowdstrike(this, 'deviceTrustProvider', {
      tenantId: 'tennet-id',
    });

    // create a ava Trust provider that uses Jamf
    const jamfTrustProvider = ava.TrustProvider.jamf(this, 'jamfTrustProvider', {
      tenantId: 'jamf-id',
    });

    // create an AVA Access Instance
    const accessInstance = new ava.AccessInstance(this, 'AccessInstance', {
      name: 'accessInstance',
      description: 'demoExample',
      // log to cloudwatch
      loggingConfiguration: ava.VerifiedAccessLog.cloudwatch({
        logVersion: ava.LogVersion.OCSF_1_0_0_RC2,
        includeTrustContext: true,
        logGroup: new logs.LogGroup(this, 'AccessInstanceLogGroup', {
          logGroupName: 'VerifiedAccessLogGroup',
        }),
      }),
      // associate the trust providers with the Instance
      trustProviders: [
        iamTrustProvider,
        oktaTrustProvider,
        crowstrikeTrustProvider,
        jamfTrustProvider,
      ],
    });

    oktaTrustProvider.type;

    // create a Group in identityCenter
    const redGroup = new identitycenter.Group(this, 'redGroup', {
      name: 'redGroup',
    });

    //
    const redPolicy = new ava.AvaPolicy(this, 'redpolicy', {

      // the user must exisit in one of the userTrusts
      userTrusts: [
        {
          userTrustProvider: iamTrustProvider,
          // and the user must be in one of the identityGroups
          // identityGroups and verifiedEmail only work if the userTrustProvider is an IAMIdentity Provider
          identityGroups: [redGroup],
          // and their email must be verified.
          verifiedEmail: ava.VerifiedEmail.REQUIRED,
        },
        {
          userTrustProvider: oktaTrustProvider,
          // conditions are AND'ed together.
          conditions: [
            'groups.contains("HR")', // this will prefix 'context.${userTrustProvider.policyReferenceName}
            'mytest == "true"',
          ],
        },
      ],

      // context.idcpolicy.groups has "<hr-group-id>" &&
      // context.oktapolicy.groups.contains("HR") &&

      // the device that that user is attached from must either
      deviceTrusts: [
        // score at least 50 from the crowdStrikeTrstProvier
        {
          deviceTrustProvider: crowstrikeTrustProvider,
          minscore: 50,
        },
        // or be classified LOW or SECURE from Jamf
        {
          deviceTrustProvider: jamfTrustProvider,
          acceptedRisks: [
            ava.JamfRisk.SECURE,
            ava.JamfRisk.LOW,
          ],
        },
      ],
      // the requesting ip address must be in one of these range
      allowIPranges: [
        '44.55.66.0/24',
        '77.88.99.0/24',
      ],
      // but not any of these.  Note the Block take priority of the allo
      blockIPranges: [
        '44.55.66.77/32',
        '77.88.99.100/32',
      ],
    }).policy;

    const redAccessGroup = new ava.AccessGroup(this, 'redAccessGroup', {
      name: 'redAccessGroup',
      accessInstance: accessInstance,
      description: 'redAccesGroup',
      policyDocument: redPolicy,
    });

    this.redAccessGroupDescription = redAccessGroup.description;

  }
}