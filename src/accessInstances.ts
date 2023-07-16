import * as core from 'aws-cdk-lib';

import {
  aws_ec2 as ec2,
  aws_wafv2 as wafv2,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

import {
  VerifiedAccessLog,
  ITrustProvider,
}
  from './index';

/**
 * Access Instance Properties.
 */
export interface AccessInstanceProps {
  /**
   * Name for the Access Instance
   * @default none
   */
  readonly name?: string | undefined;
  /**
   * Description
   * @default none
   */
  readonly description?: string | undefined;
  /**
   * Logging
   * @default None
   */
  readonly loggingConfiguration?: VerifiedAccessLog | undefined;
  /**
   * Tags
   * @default None
   */
  readonly tags?: core.CfnTag[] | undefined;
  /**
   * TrustProviders
   * @default None
   */
  readonly trustProviders?: ITrustProvider[] | undefined;
  /**
   * wafAcl attached to the Access Instance
   * @default None
   */
  readonly wafAcl?: wafv2.CfnWebACL | undefined;
}
/**
 * Access Instance Inteface
 */
export interface IAccessInstance extends core.IResource {
  /**
   * acessId
   */
  readonly id: string;
}

/**
 * Creates an AccessInstance
 */
export class AccessInstance extends core.Resource implements IAccessInstance {

  readonly id: string;
  constructor(scope: constructs.Construct, id: string, props: AccessInstanceProps) {
    super(scope, id);

    // the name for the resource is a Tag
    var tags = props.tags ?? [];
    if (props.name) {
      tags.push({
        key: 'Name',
        value: props.name,
      });
    }

    let trustProviderIds: string[] = [];
    if (props.trustProviders) {
      props.trustProviders.forEach((trustProvider) => {
        trustProviderIds.push(trustProvider.id);
      });
    }

    const accessInstance = new ec2.CfnVerifiedAccessInstance(this, 'Resource', /* all optional props */ {
      description: props.description,
      loggingConfigurations: props.loggingConfiguration,
      tags: tags,
      verifiedAccessTrustProviderIds: trustProviderIds,
    });

    if (props.wafAcl) {
      new wafv2.CfnWebACLAssociation(this, 'WebACLAssociation', {
        resourceArn: `arn:${core.Aws.PARTITION}:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:verified-access-instance/${accessInstance.attrVerifiedAccessInstanceId}`,
        webAclArn: props.wafAcl.attrArn,
      });
    };

    this.id = accessInstance.attrVerifiedAccessInstanceId;
  }

  // add a method to associate a Acl.
}