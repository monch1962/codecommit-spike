import boto3

client = boto3.client('codecommit')

response = client.list_repositories()
print(response)