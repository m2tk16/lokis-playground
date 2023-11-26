import json
import boto3


class IpAddress:
    def __init__(self, event, dynamodb):
        self.table = dynamodb.Table("LokisPlaygroundProductStarsIPLikes")
        self.category = event["id"].split("-")[1]
        self.product_id = event["id"]
        self.ip = event["ip"]
        k = self.ip + "_" + self.product_id
        self.key = {"ip": k}
        self.id_key = {
            'id': event["id"],
            'category': self.category
        }
        self.item = {"ip": k, "has_click": "Y"}
        self.star_status_update = self.check_ip_address()

    def check_ip_address(self):
        response = self.table.get_item(Key=self.key)
        if "Item" not in response:
            self.table.put_item(Item=self.item)
            return {"status": "FRESH_INSERT"} 
        else:
            return {"status": "PREVIOUSLY_INSERTED"}    


def handler(event, context):

    dynamodb = boto3.resource('dynamodb')
    e = event["queryStringParameters"]
    ip = IpAddress(e, dynamodb)
    product_table = dynamodb.Table("LokisPlaygroundProducts")

    if ip.star_status_update["status"] == "FRESH_INSERT":
        product_table.update_item(
            Key=ip.id_key,
            UpdateExpression='SET total_like_clicks = total_like_clicks + :inc, total_stars = total_stars + :inc2',
            ExpressionAttributeValues={
                ':inc': 1,
                ':inc2': int(e["total_stars"])
            }
        )

    updated_product_data = product_table.get_item(Key=ip.id_key)
    clicks = str(updated_product_data["Item"]["total_like_clicks"])
    stars = str(updated_product_data["Item"]["total_stars"])

    updated_star_values = {
        "total_like_clicks": clicks,
        "total_stars": stars,
        "status": ip.star_status_update
    }


    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(updated_star_values)
    }