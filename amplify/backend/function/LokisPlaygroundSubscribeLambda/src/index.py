import json
import boto3
from datetime import datetime

def handler(event, context):

    status = "pending"
    now = datetime.now()
    today = now.strftime("%Y-%m-%d")
    dynamodb = boto3.resource('dynamodb')
    email_parameters = event["queryStringParameters"]
    sub_type = email_parameters["subscription_type"]
    email_table = dynamodb.Table("LokisPlaygroundSubscriptions")

    email = email_parameters["email"]
    response = email_table.get_item(Key={"email": email})
    
    if 'Item' in response and sub_type == 'subscribe':
        if response["Item"]["subscribed"] == 'N':
            email_table.update_item(
                Key={"email": email},
                UpdateExpression='SET date_of_email_unsub = :inc, subscribed = :inc2, date_of_email_subscription = :inc3',
                ExpressionAttributeValues={
                    ':inc': 'none',
                    ':inc2': 'Y',
                    ':inc3': today
                }
            )
            status = 'rewnewed_subscription'
        else:
            status = "previously_subscribed"
    elif 'Item' in response and sub_type == 'unsubscribe':
        user = response["Item"]
        
        if user["subscribed"] == 'Y':
            previously_subed = True
        else:
            previously_subed = False

        item = {
            'email': email,
            'date_of_email_subscription': user["date_of_email_subscription"],
            'date_of_email_unsub': today,
            'subscribed': 'N',
            'date_of_last_email_blast': user["date_of_last_email_blast"],
        }
        email_sub_date = user["date_of_email_subscription"]
        email_table.update_item(
            Key={"email": email},
            UpdateExpression='SET date_of_email_unsub = :inc, subscribed = :inc2',
            ExpressionAttributeValues={
                ':inc': today,
                ':inc2': 'N'
            }
        )
        
        if previously_subed:
            status = "sucessfully_unsubscribed"
        else:
            status = "previously_unsubscribed"

    else:
        item = {
            'email': email,
            'date_of_email_subscription': today,
            'date_of_email_unsub': 'none',
            'subscribed': 'Y',
            'date_of_last_email_blast': 'none'
        }

        email_table.put_item(Item=item)
        status = "sucessfully_subscribed"


    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({"status": status})
    }