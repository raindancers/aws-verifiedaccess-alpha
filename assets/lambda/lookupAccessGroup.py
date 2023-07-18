import boto3

net_manager = boto3.client('networkmanager')

def on_event(event, context):

	import boto3

	ec2 = boto3.client('ec2')
	props = event["ResourceProperties"]

	response = ec2.describe_verified_access_groups()
	id = next(item for item in response['VerifiedAccessGroups'] if item["Description"] == props['Description'])['VerifiedAccessGroupId']

	print(thing)

	return { 
		'PhysicaResourceID': id,
		'Data': { 
			'GroupId': id
		}
	}





	

	