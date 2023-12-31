import json
import boto3


class Products:
    def __init__(self, event):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table("LokisPlaygroundProducts")
        self.category = event["queryStringParameters"]["category"]
        self.data = self.get_data()
        
        
    def get_data(self):
        response = self.table.scan(
            FilterExpression=boto3.dynamodb.conditions.Attr('category').eq(self.category)
        )
        return response


def get_size(item):
    sizes = []
    for size in ["XS", "SM", "MD", "LG", "XL"]:
        if item[size] == "Y":
            sizes.append(size)
    return sizes


def parse_data(products):
    return_data = []
    for item in products.data["Items"]:
        return_data.append({
            "product_id": item["id"],
            "product_title": item["product_title"],
            "XS_amazon_price": item["XS_amazon_price"],
            "SM_amazon_price": item["SM_amazon_price"],
            "MD_amazon_price": item["MD_amazon_price"],
            "LG_amazon_price": item["LG_amazon_price"],
            "XL_amazon_price": item["XL_amazon_price"],
            "chewy_price": item["chewy_price"],
            "about": item["about"].split("|"),
            "XS_specs": item["XS_specs"].split("|"),
            "SM_specs": item["SM_specs"].split("|"),
            "MD_specs": item["MD_specs"].split("|"),
            "LG_specs": item["LG_specs"].split("|"),
            "XL_specs": item["XL_specs"].split("|"),
            "XS_asin": item["XS_asin"],
            "SM_asin": item["SM_asin"],
            "MD_asin": item["MD_asin"],
            "LG_asin": item["LG_asin"],
            "XL_asin": item["XL_asin"],
            "review": {
                "pros": item["review_pros"].split("|"),
                "cons": item["review_cons"].split("|")
            },
            "has_size": item["has_size"],
            "available_size": get_size(item),
            "total_like_clicks": str(item["total_like_clicks"]),
            "total_stars": str(item["total_stars"])
        })
    return return_data


def handler(event, context):

    products = Products(event)
    product_json = parse_data(products)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(product_json)
    }