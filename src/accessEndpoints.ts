import * as core from 'aws-cdk-lib';

import {
  aws_ec2 as ec2,
  aws_certificatemanager as acm,
  aws_elasticloadbalancingv2 as elbv2,
  aws_route53 as r53,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

import {
  IAccessGroup,
}
  from './index';

/**
 * Attachment Type
 */
export enum AttachementType {
  /**
   * Attach to a VPC
   */
  VPC = 'vpc'
}

/**
 * Protocol
 */
export enum Protocol {
  /**
   * HTTP
   */
  HTTP = 'http',
  /**
   * HTTPS
   */
  HTTPS = 'https',
}

/**
 * Endpoint Type
 */
enum EndpointType {
  /**
   * Endpoint is a Load Balancer
   */
  LOAD_BALANCER = 'load-balancer',
  /**
   * Endpoint is a Network Interface
   */
  NETWORK_INTERFACE = 'network-interface'
}

/**
 * Properties for a Load Balancer ENdpoint
 */
export interface LoadBalancerEndpoint {
  /**
   * The loadbalancer that is being targeted
   */
  readonly loadbalancer: elbv2.IApplicationLoadBalancer;
  /**
   * Which port to request on
   */
  readonly port: number;
  /**
   * HTTP or HTTPS
   */
  readonly protocol: Protocol;
  /**
   * Which Subnets are the loadbalancer in
   */
  readonly subnets: ec2.SubnetSelection;
}

export interface NetworkInterfaceEndpoint {
  /**
   * The network interface that is being targeted
   */
  readonly networkInterface: ec2.CfnNetworkInterface;
  /**
   * Which port to request on
   */
  readonly port: number;
  /**
   * HTTP or HTTPS
   */
  readonly protocol: Protocol;
}

export interface AccessEndpointProps {
  /**
   * the Access Group that this is assocaited with;
   */
  readonly accessGroup: IAccessGroup;
  /**
   * hostname
   */
  readonly hostname: string;
  /**
   * Zone to use for DNS record
   */
  readonly hostedZone: r53.IHostedZone;
  /**
   * use this certificate for the endpoint
   * @default create a new certificate
   */
  readonly certificate?: acm.ICertificate;
  /**
   * The loadbalancer details
   * @default none
   */
  readonly loadBalancerEndpoint?: LoadBalancerEndpoint | undefined;
  /**
   * the networkInterface details
   * @default none
   */
  readonly networkInterfaceEndpoint?: NetworkInterfaceEndpoint | undefined;
  /**
   * AttachmentType
   * @default VPC
   */
  readonly attachmentType?: AttachementType | undefined;
  /**
   * A Description
   * @default No descriptoon
   */
  readonly description?: string | undefined;
  /**
   * tags to add to the endpoint
   * @default no tags
   * */
  readonly tags?: core.CfnTag[] | undefined;
  /**
   * Verified Access Policy enabled.
   * @default true
   */
  readonly policyenabled?: boolean | undefined;
  /**
   * Security Groups to attach to the endpoint.
   * @default creates a securitity group with open
   * access
   */
  readonly securityGroups?: ec2.ISecurityGroup[];
  /*
  * A Cedar Policy Document
  * @default inherrits policy from Group
  */
  readonly policy?: string | undefined;
  /**
   * Name, added as a Tag
   * @default no name
   */
  readonly name?: string | undefined;
}

/**
 * Access Endpoint
 */
export interface IAccessEndpoint extends core.IResource {
  /**
   * The id of the endpoint
   */
  readonly id: string;
}

/**
 * Create an Acess Endpoint
 */
export class AccessGroupEndpoint extends core.Resource implements IAccessEndpoint {

  readonly id: string;
  constructor(scope: constructs.Construct, id: string, props: AccessEndpointProps) {
    super(scope, id);

    // only one of loadbalancer or networkInterface is allowed, but one must be provided
    if (props.loadBalancerEndpoint && props.networkInterfaceEndpoint) {
      throw new Error('Only one of loadbalancer or networkInterface can be supplied');
    };
    if (!props.loadBalancerEndpoint && !props.networkInterfaceEndpoint) {
      throw new Error('Either loadbalancer or networkInterface must be supplied');
    };

    var certificateArn: string;
    if (props.certificate) {
      certificateArn = props.certificate.certificateArn;
    } else {
      certificateArn = new acm.Certificate(this, 'Certificate', {
        domainName: `${props.hostname}.${props.hostedZone?.zoneName}`,
        validation: acm.CertificateValidation.fromDns(props.hostedZone),
      }).certificateArn;
    }

    var endPointType: EndpointType;
    var loadbalancerOptions: ec2.CfnVerifiedAccessEndpoint.LoadBalancerOptionsProperty | undefined;
    var networkInterOptions: ec2.CfnVerifiedAccessEndpoint.NetworkInterfaceOptionsProperty | undefined;

    if (props.loadBalancerEndpoint) {
      endPointType = EndpointType.LOAD_BALANCER;

      const vpc = props.loadBalancerEndpoint.loadbalancer.vpc as ec2.Vpc;

      loadbalancerOptions = {
        loadBalancerArn: props.loadBalancerEndpoint.loadbalancer.loadBalancerArn,
        port: props.loadBalancerEndpoint.port,
        protocol: props.loadBalancerEndpoint.protocol,
        subnetIds: vpc.selectSubnets(props.loadBalancerEndpoint.subnets).subnetIds,
      };
    } else {
      endPointType = EndpointType.NETWORK_INTERFACE;
      networkInterOptions = {
        networkInterfaceId: props.networkInterfaceEndpoint?.networkInterface.attrId,
        port: props.networkInterfaceEndpoint?.port,
        protocol: props.networkInterfaceEndpoint?.protocol,
      };
    };

    var securityGroupIds: string[] = [];
    if (props.securityGroups) {
      props.securityGroups.forEach((securityGroup) => {
        securityGroupIds.push(securityGroup.securityGroupId);
      });
    };

    // the name for the resource is a Tag
    var tags = props.tags ?? [];
    if (props.name) {
      tags.push({
        key: 'Name',
        value: props.name,
      });
    }

    const accessEndpoint = new ec2.CfnVerifiedAccessEndpoint(this, 'Resource', {
      applicationDomain: props.hostedZone.zoneName,
      attachmentType: props.attachmentType ?? AttachementType.VPC,
      domainCertificateArn: certificateArn,
      endpointDomainPrefix: props.hostname,
      endpointType: endPointType,
      verifiedAccessGroupId: props.accessGroup.id,
      description: props.description,
      loadBalancerOptions: loadbalancerOptions,
      networkInterfaceOptions: networkInterOptions,
      policyDocument: props.policy,
      policyEnabled: props.policyenabled ?? true,
      securityGroupIds: securityGroupIds,
      tags: props.tags,
    });

    // We may need to check the the endpoint status before we can add a CNAME To it? this is unclear
    // is it async?

    new r53.CnameRecord(this, 'CnameRecord', {
      zone: props.hostedZone,
      recordName: props.hostname,
      domainName: accessEndpoint.attrEndpointDomain,
    });

    this.id = accessEndpoint.attrVerifiedAccessEndpointId;
  }

}
