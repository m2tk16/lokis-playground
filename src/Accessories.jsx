import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"
import TagManager from 'react-gtm-module';

interface AccessoriesProps {
    endpoint: dict
}


const Accessories = (props: AccessoriesProps) => {
    const { endpoint } = props;
    const [data, setData] = useState([])
 
    useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'AW-11422830375',
    };
        TagManager.initialize(tagManagerArgs);
    }, []);

    useEffect(() => {
        const GetAccessoriesData = async () => {
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
        <Container>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} sm={4}>
                        <ProductCardFace 
                            data={data[index]} 
                            index={index} 
                            totalItems={data.length} 
                            ip={endpoint.ip}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Accessories;
