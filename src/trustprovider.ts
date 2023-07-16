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
  DEVICE = 'device'
};

/**
 * DeviceOptions
 */
export interface DeviceOptions {
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

export interface ITrustProvider {
  /**
   * Policy Reference Name
   */
  readonly policyReferenceName: string;
  /**
   * Trust Provider Type
   */
  readonly trustProviderType: TrustProviderType;
  /**
   * User Provider Type
   */
  readonly userTrustProviderType?: UserTrustProviderType | undefined ;
  /**
   * decription
   */
  readonly description?: string | undefined;
  /**
   * Device Trust Proivder Type
   */
  readonly deviceTrustProviderType?: DeviceTrustProviderType | undefined;
  /**
   * Device Options
   */
  readonly deviceOptions?: DeviceOptions | undefined;
  /**
   * oidc optons
   */
  readonly oidcOptions?: OIDCOptions | undefined;
  /**
   * tags
   */
  readonly tags?: core.Tag[] | undefined;
}

/**
 * Create a vpc lattice service network.
 * Implemented by `ServiceNetwork`.
 */
export interface ITrustProvider extends core.IResource {

  /**
  * The Id of the Trust Provider.
  */
  readonly id: string;
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
   * Type
   */
  readonly trustProviderType: TrustProviderType;
  /**
   * User Trst Provider Type
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

/**
 * Creates a Trust Provider
 */
export class TrustProvider extends core.Resource implements ITrustProvider {

  /**
   * The id of the TrustProvider
   */
  readonly id: string;
  /**
   * The policy ReferenceName
    */
  readonly policyReferenceName: string;

  /**
   * The TrustProverType
   */
  readonly trustProviderType: TrustProviderType;

  constructor(scope: constructs.Construct, id: string, props: TrustProviderProps) {
    super(scope, id);

    const cfnVerifiedAccessTrustProvider = new ec2.CfnVerifiedAccessTrustProvider(this, 'Resource', {
      policyReferenceName: props.policyReferenceName,
      trustProviderType: props.trustProviderType,

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
    this.trustProviderType = props.trustProviderType;

  }
}