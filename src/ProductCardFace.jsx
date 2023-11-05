import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AMZNLogo from "./images/amzn-logo.png";
import ChewyLogo from "./images/chewy-logo.png";

interface ProductCardFaceProps {
    data: any
  }
  
const ProductCardFace = (props: ProductCardFaceProps) => {
    const { data } = props;
    
    return (
        <Card className="product-card">
            <img src={data.product_url} alt="imge"/>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Col xs={12} className="product-card-title">{data.product_title}</Col>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row className="co-row-wrapper">
                    <Col xs={6}>
                        <img className="co-logo" src={AMZNLogo} alt="amzn-logo" />
                        Amazon
                    </Col>
                    <Col xs={6}>
                        <img className="co-logo"  src={ChewyLogo} alt="chewy-logo" />
                        Chewy
                    </Col>
                </Row>
                <Row className="co-row-wrapper">
                    <Col xs={6}>
                        {data.amazon_price}
                    </Col>
                    <Col xs={6}>
                        {data.chewy_price}
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
        </Card>
    )
}

export default ProductCardFace;
