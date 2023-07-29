import * as core from 'aws-cdk-lib';

import {
  custom_resources as cr,
  aws_identitystore as idstore,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';


export interface GroupProps {
  /**
   * A string containing the name of the group.
   */
  readonly name:	string;
  /**
   * the description of the group.
   * @default: no description
   */
  readonly description?:	string | undefined;

}

export interface IGroup {
  /**
   * Id of the Group
   */
  readonly id: string;
  /**
   * Name of the Group
   */
  readonly name: string;
}

/**
 * Creates Identity Store Group
 */
export class Group extends core.Resource implements IGroup {

  /**
   * The id of the TrustProvider
   */
  readonly id: string;
  /**
   * The policy ReferenceName
  */
  readonly name: string;

  constructor(scope: constructs.Construct, id: string, props: GroupProps) {
    super(scope, id);


    // get the identitycenter Store Id
    const getIdentityStoreId = new cr.AwsCustomResource(this, 'GetIdentityStoreId', {
      onCreate: {
        service: 'SSOAdmin',
        action: 'listInstances',
        physicalResourceId: cr.PhysicalResourceId.of('getid'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    // there can only ever be one identity store per account, however there is no direct API
    // call to get it.
    const group = new idstore.CfnGroup(this, 'Resource', {
      identityStoreId: getIdentityStoreId.getResponseField('Instances.0.IdentityStoreId'),
      description: props.description,
      displayName: props.name,
    });

    this.id = group.attrGroupId;
    this.name = group.displayName;
  }
}
