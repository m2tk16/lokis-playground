import React,  { useState } from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
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
    const [cardFace, setCardFace] = useState(Array(data.length).fill(true));
    const [sizeOption, setSizeOption] = useState("MD")

    const handleCardSwap = () => {
        setCardFace(prevCardFace => {
            const newCardFace = [...prevCardFace];
            newCardFace[index] = !newCardFace[index];
            return newCardFace
        })
    }

    const handleRadioChange = (event) => {
        setSizeOption(event.target.value)
    }


    const sizeComponent = () => {
        return (
            <ListGroup.Item>
                <Form>
                    <Row>
                        {['XS', 'SM', 'MD', 'LG', 'XL'].map((size) => (
                            <Col xs={2} key={size}>
                                <Form.Check
                                    type="radio"
                                    id={size}
                                    label={size}
                                    checked={sizeOption === size}
                                    onChange={handleRadioChange}
                                    value={size}
                
                                />
                            </Col>
                        ))}
                    </Row>
                </Form>
            </ListGroup.Item> 
        )
    }

    return (
        <Card className="product-card" key={data.details+index}>

            <Row>
                <Col xs={12}>
                    {cardFace[index] ? (
                        <div className="image-wrapper">
                            <a href={data.product_url} target="_blank" rel="noreferrer">
                                <img alt="none" border="0" src={data.image_url_pt_one} />
                            </a>
                            <img src={data.image_url_pt_two} alt="" />
                        </div>
                    ) : (
                        <ProductCardDetails data={data}/>
                    )}
                </Col>
            </Row>
            <Row>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Row>
                            <hr className="image-divider"></hr>
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
                    
                    {data.has_size === 'Y' &&
                        sizeComponent()
                    }

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
