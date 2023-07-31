import * as core from 'aws-cdk-lib';

import {
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

import {} from './index';

/**
 * device Trust Provider Type
 */
export enum DeviceTrustProviderType {
  /**
   * JamF for Mac
   */
  JAMF = 'jamf',
  /**
   * Crowdstrike for Others
   */
  CROWDSTRIKE = 'crowdstrike'
}

/**
 * JamF Risks
 */
export enum JamfRisk {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  SECURE = 'SECURE',
  NOT_APPLICABLE = 'NOT_APPLICABLE'
}
/**
 * User Trust Provider Types
 */
export enum UserTrustProviderType {
  /**
   * IAM identity
   */
  IAM_IDENTITY_CENTER = 'iam-identity-center',
  /**
   * OIDC
   */
  OIDC = 'oidc'
}
/**
 * Trust provider Type
 */
export enum TrustProviderType {
  /**
   * USER
   */
  USER = 'user',
  /**
   * DEvice
   */
  DEVICE = 'device'
};

/**
 * DeviceOptions
 */
export interface DeviceOptions {
  /**
   * tennantId
   */
  readonly tenantId: string;
};

/**
 * OIDC Options
 */
export interface OIDCOptions {
  /**
   * auth endpoint
   * @default: none
   */
  readonly authorizationEndpoint?: string | undefined;
  /**
   * clientSecrect
   * @default: none
   */
  readonly clientSecret?: string | undefined;
  /**
   * issuer
   * @default none
   */
  readonly issuer?: string | undefined;
  /**
   * scope
   * @default none
   */
  readonly scope?: string | undefined;
  /**
   * token endpoint
   * @default: none
   */
  readonly tokenEndpoint?: string | undefined;
  /**
   * tuser InfoEnpoint
   * @default: none
   */
  readonly userInfoEndpoint?: string | undefined;
}

/**
 * Create a vpc lattice service network.
 * Implemented by `ServiceNetwork`.
 */
export interface ITrustProvider {

  /**
  * The Id of the Trust Provider.
  */
  readonly id: string;
  /**
   * The type of the Trust Provider
   */
  readonly type: TrustProviderType;
  /**
   * PolicyreferenceName
   */
  readonly policyReferenceName: string;
  /**
   * User Trust Type
   */
  readonly userTrustType?: UserTrustProviderType | undefined;
}

/**
 * TrustProvider Props
 */
export interface TrustProviderProps {
  /**
   * Reference Name
   */
  readonly policyReferenceName: string;
  /**
   * User Trust Provider Type
   * @default None
   */
  readonly userTrustProviderType?: UserTrustProviderType | undefined ;
  /**
   * Description
   * @default None
   */
  readonly description?: string | undefined;
  /**
   * trust Privider
   * @default none
   */
  readonly deviceTrustProviderType?: DeviceTrustProviderType | undefined;
  /**
   * deviceOptons
   * @default none
   */
  readonly deviceOptions?: DeviceOptions | undefined;
  /**
   * oidc Options
   * @default none
   */
  readonly oidcOptions?: OIDCOptions | undefined;
  /**
   * tags
   * @default none
   */
  readonly tags?: core.Tag[] | undefined;
}

export interface DeviceTrustProviderProps {
  /**
   * tenantId
   */
  readonly tenantId: string | string;
  /**
   * @default - Will default to jamf or crwd
   */
  readonly policyReferenceName?: string | undefined;
  /**
   * @default - No description
   */
  readonly description?: string | undefined;
  /**
   * @default No tags
   */
  readonly tags?: core.CfnTag[] | undefined;
}

export interface IamIdentityTrustProps {
  /**
   * @default - iamIdentity
   */
  readonly policyReferenceName?: string | undefined;
  /**
   * @default - No description
   */
  readonly description?: string | undefined;
  /**
   * @default No tags
   */
  readonly tags?: core.CfnTag[] | undefined;
}


export interface OidcTrustProps {
  /**
   * @default - policyReferenceName. not defaulting as it is not possible to know what this might be pointing at
   */
  readonly policyReferenceName: string;
  /**
   * @default - No description
   */
  readonly description?: string | undefined;
  /**
   * @default No tags
   */
  readonly tags?: core.CfnTag[] | undefined;
  /**
   * oidc options
   */
  readonly oidcOptions: OIDCOptions;

}

/**
 * Creates a Trust Provider
 */
export class TrustProvider extends core.Resource implements ITrustProvider {


  public static jamf(scope: constructs.Construct, id: string, props: DeviceTrustProviderProps): ITrustProvider {

    const provider = new ec2.CfnVerifiedAccessTrustProvider(scope, id, {
      policyReferenceName: props.policyReferenceName ?? 'jamf',
      trustProviderType: 'device',
      description: props.description,
      deviceOptions: {
        tenantId: props.tenantId,
      },
      deviceTrustProviderType: 'jamf',
      tags: props.tags,
    });

    return {
      id: provider.attrVerifiedAccessTrustProviderId,
      policyReferenceName: provider.policyReferenceName,
      type: TrustProviderType.DEVICE,
    };
  };

  public static crowdstrike(scope: constructs.Construct, id: string, props: DeviceTrustProviderProps): ITrustProvider {

    const provider = new ec2.CfnVerifiedAccessTrustProvider(scope, id, {
      policyReferenceName: props.policyReferenceName ?? 'crwd',
      trustProviderType: TrustProviderType.DEVICE,
      description: props.description,
      deviceOptions: {
        tenantId: props.tenantId,
      },
      deviceTrustProviderType: 'crowdstrike',
      tags: props.tags,
    });

    return {
      id: provider.attrVerifiedAccessTrustProviderId,
      policyReferenceName: provider.policyReferenceName,
      type: TrustProviderType.DEVICE,
    };
  };

  public static iamIdentityCenter(scope: constructs.Construct, id: string, props: IamIdentityTrustProps): ITrustProvider {

    const provider = new ec2.CfnVerifiedAccessTrustProvider(scope, id, {
      policyReferenceName: props.policyReferenceName ?? 'iamIdentity',
      trustProviderType: TrustProviderType.USER,
      description: props.description,
      userTrustProviderType: UserTrustProviderType.IAM_IDENTITY_CENTER,
      tags: props.tags,
    });

    return {
      id: provider.attrVerifiedAccessTrustProviderId,
      policyReferenceName: provider.policyReferenceName,
      type: TrustProviderType.USER,
      userTrustType: UserTrustProviderType.IAM_IDENTITY_CENTER,
    };
  }

  public static oidc(scope: constructs.Construct, id: string, props: OidcTrustProps): ITrustProvider {

    const provider = new ec2.CfnVerifiedAccessTrustProvider(scope, id, {
      policyReferenceName: props.policyReferenceName,
      trustProviderType: TrustProviderType.USER,
      description: props.description,
      userTrustProviderType: UserTrustProviderType.OIDC,
      tags: props.tags,
      oidcOptions: props.oidcOptions,
    });

    return {
      id: provider.attrVerifiedAccessTrustProviderId,
      policyReferenceName: provider.policyReferenceName,
      type: TrustProviderType.USER,
      userTrustType: UserTrustProviderType.OIDC,
    };
  }


  /**
   * The id of the TrustProvider
   */
  readonly id: string;
  /**
   * The policy ReferenceName
    */
  readonly policyReferenceName: string;

  /**
   * The TrustProviderType
   */
  readonly type: TrustProviderType;

  constructor(scope: constructs.Construct, id: string, props: TrustProviderProps) {
    super(scope, id);

    // throw an error if both deviceTrustProviderType userTrustProviderType are provided
    if (props.deviceTrustProviderType && props.userTrustProviderType) {
      throw new Error('Only one of deviceTrustProviderType or userTrustProviderType can be provided');
    }
    // throw an error if neither deviceTrustProviderType userTrustProviderType are provided
    if (!props.deviceTrustProviderType && !props.userTrustProviderType) {
      throw new Error('One of deviceTrustProviderType or userTrustProviderType must be provided');
    }


    if (props.deviceTrustProviderType) {
      this.type = TrustProviderType.DEVICE;
    } else {
      this.type = TrustProviderType.USER;
    }

    const cfnVerifiedAccessTrustProvider = new ec2.CfnVerifiedAccessTrustProvider(this, 'Resource', {
      policyReferenceName: props.policyReferenceName,
      trustProviderType: this.type,

      // the properties below are optional
      description: props.description,
      deviceOptions: props.deviceOptions,
      deviceTrustProviderType: props.deviceTrustProviderType,
      oidcOptions: props.oidcOptions,
      tags: props.tags,
      userTrustProviderType: props.userTrustProviderType,
    });

    this.id = cfnVerifiedAccessTrustProvider.attrVerifiedAccessTrustProviderId;
    this.policyReferenceName = props.policyReferenceName;
  }
}