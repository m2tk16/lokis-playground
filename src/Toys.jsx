import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"


interface ToyProps {
    endpoint: any
}


const Toys = (props: ToyProps) => {
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
        const GetToyData = async () => {
            const myInit = {
                headers: {},
                response: false,
                queryStringParameters: { category: 'toy' }
            };
            return API.get(endpoint.api, "/", myInit).then((response) => {
                setData(response);
            
            });
        }
        GetToyData();
    },[endpoint]);


    return (
        <>
        <Row>
            {data.map((item, index) => (
                <Col key={index} sm={4}>
                    <ProductCardFace data={data[index]} index={index} totalItems={data.length} page="toys"/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Toys;
