import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"
import TagManager from 'react-gtm-module';
import Subscribe from "./Subscribe";


interface ToyProps {
    endpoint: any
}


const Toys = (props: ToyProps) => {
    const { endpoint } = props;
    const [data, setData] = useState([])

    useEffect(() => {
        const tagManagerArgs = {
            gtmId: 'AW-11422830375',
        };
        TagManager.initialize(tagManagerArgs);
    }, []);
    
    useEffect(() => {
        const GetToyData = async () => {
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
                queryStringParameters: { category: 'toy' }
            };
            return API.get(endpoint.api, "/", myInit).then((response) => {
                setData(response);
            
            });
        }
        GetToyData();
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
                            ip={endpoint.ip}                        />
                    </Col>
                ))}
            </Row>
            <Subscribe />
        </Container>
    )
}

export default Toys;
