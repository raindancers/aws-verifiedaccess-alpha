import * as core from 'aws-cdk-lib';

import {
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
   * The globally unique identifier for the identity store
   */
  readonly identityStoreId:	string;
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

    const group = new idstore.CfnGroup(this, 'Resource', {
      identityStoreId: props.identityStoreId,
      description: props.description,
      displayName: props.name,
    });

    this.id = group.attrGroupId;
    this.name = group.displayName;
  }
}
