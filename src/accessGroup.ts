import * as path from 'path';
import * as core from 'aws-cdk-lib';

import {
  aws_ec2 as ec2,
  custom_resources as cr,
  aws_ram as ram,
  aws_lambda as lambda,
  aws_iam as iam,
  aws_logs as logs,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

import {
  IAccessInstance,
}
  from './index';
/**
 * AcessGroupProps
 */
export interface AccessGroupProps {
  /**
   * name
   * @default no name
   */
  readonly name?: string | undefined;
  /**
   * Access Instance
   */
  readonly accessInstance: IAccessInstance;
  /**
   * description
   */
  readonly description: string;
  /**
   * Tags
   * @default - No tags
   */
  readonly tags?: core.CfnTag[] | undefined;
  /**
   * Enable the policy
   * @default true
   */
  readonly enabled?: boolean | undefined;
  /**
   * policy document
   */
  readonly policyDocument: string;
}
/**
 * Access Group
 */
export interface IAccessGroup extends core.IResource {
  /**
   * Id of the Access Group
   */
  readonly id: string;
}

/**
 * Verified Access Group
 */
export class AccessGroup extends core.Resource implements IAccessGroup {

  public static fromId( scope: constructs.Construct, id: string, accessGroupId: string ): IAccessGroup {
    return new ImportedAccessGroup(scope, id, { accessGroupId: accessGroupId });
  }

  public static fromDescription( scope: constructs.Construct, id: string, description: string ): IAccessGroup {
    return new ImportedAccessGroup(scope, id, { description: description });
  }
  readonly description: string;
  readonly id: string;

  constructor(scope: constructs.Construct, id: string, props: AccessGroupProps) {
    super(scope, id);

    // the name for the resource is a Tag
    var tags = props.tags ?? [];
    if (props.name) {
      tags.push({
        key: 'Name',
        value: props.name,
      });
    }

    const accessGroup = new ec2.CfnVerifiedAccessGroup(this, 'MyCfnVerifiedAccessGroup', {
      verifiedAccessInstanceId: props.accessInstance.id,
      description: props.description,
      policyDocument: props.policyDocument,
      policyEnabled: props.enabled ?? true,
      tags: props.tags,
    });

    this.description = props.description;
    this.id = accessGroup.attrVerifiedAccessGroupId;

  }

  public share(name: string, principals: string[]): void {

    new ram.CfnResourceShare(this, `${name}`, {
      name: name,
      principals: principals,
      resourceArns: [
        `arn:aws:ec2:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:verified-access-group/${this.id}`,
      ],
    });
  };
}
/**
 * Props to import an Acess Group
 */
export interface ImportedAccessGroupProps {
  /**
   * acessGroupId
   */
  readonly accessGroupId?: string;
  /**
   * description
   */
  readonly description?: string;
}
/**
 * Import an Acess Group
*/
class ImportedAccessGroup extends core.Resource implements IAccessGroup {

  public readonly id: string;

  constructor(scope: constructs.Construct, id: string, props: ImportedAccessGroupProps) {
    super(scope, id);

    // throw an error if both accessGroupId and decription are provided as propertys
    if (props.accessGroupId && props.description) {
      throw new Error('Only One of accessGroupId or description should be provided as propertys');
    }

    // throw an error if neither of accessGroupId or description are provided as propertys
    if (!props.accessGroupId && !props.description) {
      throw new Error('At least one of accessGroupId or description should be provided as propertys');
    }

    let groupId: string;

    if (props.accessGroupId) {
      groupId = props.accessGroupId;
    } else {

      const onEvent = new lambda.Function(this, 'GetGroupId', {
        runtime: lambda.Runtime.PYTHON_3_10,
        handler: 'lookupAccessGroup.on_event',
        code: lambda.Code.fromAsset(path.join(__dirname, '../assets/lambda')),
        timeout: core.Duration.seconds(60),
      });

      onEvent.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          resources: ['*'],
          actions: ['ec2:*'],
        }),
      );

      const getID = new core.CustomResource(this, 'getGroupIDCR', {
        serviceToken: new cr.Provider(this, 'GetGroupIdProvider', {
          onEventHandler: onEvent,
          logRetention: logs.RetentionDays.FIVE_DAYS,
          providerFunctionName: core.PhysicalName.GENERATE_IF_NEEDED,
        }).serviceToken,
        properties: {
          Description: props.description,
        },
      });

      groupId = getID.getAttString('GroupId');

    }

    this.id = groupId;

  }
};