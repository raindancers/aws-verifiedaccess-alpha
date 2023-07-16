import {
  aws_s3 as s3,
  aws_logs as logs,
  aws_kinesis as kinesis,
}
  from 'aws-cdk-lib';

/**
 * Log Versions
 */
export enum LogVersion {
  /**
   * OCF1 0.1
   */
  OCSF_0_1 = 'ocsf-0.1',
  /**
   * RC2
   */
  OCSF_1_0_0_RC2 = 'ocsf-1.0.0-rc.2'
}

/**
 * CloudWatch Log Properties
 */
export interface CloudWatchLogs {
  /**
   * enable logging
   */
  readonly enabled: boolean;
  /**
   * LogGroup
   */
  readonly logGroup: string;
}
/**
 * Kinesis Firehose Log Properties
 */
export interface KinesisDataFirehose {
  /**
   * Delivery Stream
   */
  readonly deliveryStream: string;
  /**
   * Enabled
   */
  readonly enabled: boolean;
}

export interface S3Logs {
  /**
   * Bucket Name
   */
  readonly bucketName: string;
  /**
   * Enable Logging
   */
  readonly enabled: boolean;
  /**
   * Prefix
   */
  readonly prefix?: string;
}

/**
 * S3 Log Props
 */
export interface S3LogProps {
  /**
   * bucket
   */
  readonly bucket: s3.IBucket;
  /**
   * Prefix for bucket
   * @default root of bucket
   */
  readonly prefix?: string | undefined;
  /**
  * include Trust Context in logs?
  * @default true
  */
  readonly includeTrustContext?: boolean | undefined;
  /**
   * Log Version
   * @default ocsf-0.1
   */
  readonly logVersion?: LogVersion | undefined;
}

/**
 * Kinesis Log Props
 */
export interface KinesisLogProps {
  /**
   * stream
   */
  readonly stream: kinesis.IStream;
  /**
   * Include Trust Context in logs
   * @default true
   */
  readonly includeTrustContext?: boolean | undefined;
  /**
   * log version
   * @default ocsf-0.1
   */
  readonly logVersion?: LogVersion | undefined;
}

/**
 * CloudWatch Log Props
 */
export interface CloudWatchLogProps {
  /**
   * Log Group
   */
  readonly logGroup: logs.ILogGroup;
  /**
   * Include Trust Context in logs
   * @default true
   */
  readonly includeTrustContext?: boolean | undefined;
  /**
   * Log Version
   * @default ocsf-0.1
   */
  readonly logVersion?: LogVersion | undefined;
}

/**
 * Create a Verified Access Log
 */
export abstract class VerifiedAccessLog {

  /**
   * Construct a logging destination for a S3 Bucket
   */
  public static s3(props: S3LogProps): VerifiedAccessLog {
    return {
      s3: {
        bucketName: props.bucket.bucketName,
        enabled: true,
        prefix: props.prefix,
      },
      includeTrustContext: props.includeTrustContext ?? true,
      logVersion: props.logVersion ?? LogVersion.OCSF_0_1,
    };
  };

  /**
	 * Send to CLoudwatch
	 */
  public static cloudwatch(props: CloudWatchLogProps): VerifiedAccessLog {

    // extra the id from teh arn?

    return {
      cloudWatchLogs: {
        logGroup: props.logGroup.logGroupName,
        enabled: true,
	    },
      includeTrustContext: props.includeTrustContext ?? true,
      logVersion: props.logVersion ?? LogVersion.OCSF_0_1,
    };
  };

  /**
	 * Stream to Kinesis
	 */
  public static kinesis(props: KinesisLogProps): VerifiedAccessLog {
	  return {
      kinesisDataFirehose: {
        deliveryStream: props.stream.streamName,
        enabled: true,
      },
      includeTrustContext: props.includeTrustContext ?? true,
      logVersion: props.logVersion ?? LogVersion.OCSF_0_1,
    };
  }
  protected constructor() {};
}
