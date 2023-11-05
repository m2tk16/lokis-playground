import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface ProductCardDetailsProps {
    details: string
  }
  
    
const ProductCardDetails = (props: ProductCardDetailsProps) => {
    const { details } = props;
    return (
        <Card className="product-card">
            {details}
        </Card>
    )
}

export default ProductCardDetails;
