import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from "./ProductCard"

const Health = () => {
    return (
        <>
        <Row>
            <Col sm={6}>
                <ProductCard />
            </Col>
            <Col sm={6}>
                <ProductCard />
            </Col>
        </Row>
        </>
    )
}

export default Health;
