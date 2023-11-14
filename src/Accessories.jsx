import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"


const Accessories = () => {
    const [data, setData] = useState([])
    const apiName = "LokisPlaygroundAccessoryProductsAPI";

    Amplify.configure({
    API: {
        endpoints: [
        {
            name: apiName,
            endpoint: "https://6k2szi4h2b.execute-api.us-east-1.amazonaws.com/staging",
            path: "/"
        },
        ],
    },
    });

    useEffect(() => {
        const GetFoodData = async () => {
            return API.get(apiName, "/", {headers: {}}).then((response) => {
                setData(response);
            
            });
        }
        GetFoodData();
    },[]);

    return (
        <Row>
            {data.map((item, index) => (
                <Col key={index} sm={4}>
                    <ProductCardFace data={data[index]} index={index} totalItems={data.length} page="accessory"/>
                </Col>
            ))}
        </Row>
    )
}

export default Accessories;
