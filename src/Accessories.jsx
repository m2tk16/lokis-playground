import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"


interface AccessoriesProps {
    endpoint: any
}


const Accessories = (props: AccessoriesProps) => {
    const { endpoint } = props;
    const [data, setData] = useState([])

    Amplify.configure({
        API: {
            endpoints: [
                {
                    name: endpoint.api,
                    endpoint: endpoint.url,
                    path: "/"
                },
            ],
        },
    });

    useEffect(() => {
        const GetAccessoriesData = async () => {
            const myInit = {
                headers: {},
                response: false,
                queryStringParameters: { category: 'accessory' }
            };
            return API.get(endpoint.api, "/", myInit).then((response) => {
                setData(response);
            
            });
        }
        GetAccessoriesData();
    },[endpoint]);

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
