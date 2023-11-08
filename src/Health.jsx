import React, { useEffect, useState } from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"

const Health = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const GetProducts = async () => {
            const healthProductsURL = "https://ufcmae18ra.execute-api.us-east-1.amazonaws.com/default/LokisPlaygroundHealthProductsLambda"
            await fetch(healthProductsURL)
                .then(response => response.json())
                .then(response => {
                    const d = JSON.parse(response.body)
                    setData(d)
                });
            };
            GetProducts()
    },[]);

    return (
        <Row>
            {data.map((item, index) => (
                <Col key={index} sm={4}>
                    <ProductCardFace data={data[index]} index={index}/>
                </Col>
            ))}
        </Row>
    )
}

export default Health;
