import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AMZNLogo from "./images/amzn-logo.png";

const ProductCard = () => {
    return (
        <Card className="product-card">
            <img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07CTKSVKK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US" alt="imge"/>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Row>
                    <Col xs={6}>
                        <img src={AMZNLogo} alt="amzn-logo" width="5vw" height="5vw" />
                        Amazon.com
                    </Col>
                    <Col xs={6}>
                        Chewy.com
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
        </Card>
    )
}

export default ProductCard;
