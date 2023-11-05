import React,  { useState } from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProductCardDetails from "./ProductCardDetails"
import AMZNLogo from "./images/amzn-logo.png";
import ChewyLogo from "./images/chewy-logo.png";
import { InfoCircleFill } from 'react-bootstrap-icons';

interface ProductCardFaceProps {
    data: any,
    index: integer
  }
  
const ProductCardFace = (props: ProductCardFaceProps) => {
    const { data, index } = props;
    // const [cardFace, setCardFace] = useState(Array(data.length).fill(true));
    const [cardFace, setCardFace] = useState([true, true])

    const handleCardSwap = () => {
        setCardFace(prevCardFace => {
            const newCardFace = [...prevCardFace];
            newCardFace[index] = !newCardFace[index];
            return newCardFace
        })
    }

    return (
        <Card className="product-card" key={data.details+index}>

            <Row>
                <Col xs={12}>
                    {cardFace[index] ? (
                        <Card.Img src={data.image_url} alt="image"/>
                    ) : (
                        <ProductCardDetails data={data}/>
                    )}
                </Col>
            </Row>
            <Row>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Row>
                            <Col 
                                xs={10} 
                                className="product-card-title"
                            >
                                {data.product_title}
                            </Col>
                            <Col xs={2}>
                                <InfoCircleFill size={24}  onClick={() => handleCardSwap()}/>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="co-row-wrapper">
                            <Col xs={6}>
                                <a href={data.product_url} target="_blank" rel="noreferrer">
                                    <img className="co-logo" src={AMZNLogo} alt="amzn-logo" />
                                    Amazon
                                </a>
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
            </Row>
        </Card>
    )
}

export default ProductCardFace;
