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
    const [sizeOption, setSizeOption] = useState("XS");
    const [price, SetPrice] = useState(data.XS_amazon_price);
    const [productUrl, SetProductUrl] = useState(data.product_url.replace("{ASIN}", data.XS_asin));
    const [img1, SetImg1] = useState(data.image_url_pt_one.replace("{ASIN}", data.XS_asin));
    const [img2, SetImg2] = useState(data.image_url_pt_two.replace("{ASIN}", data.XS_asin));
    const [specs, SetSpecs] = useState(data.XS_specs);


    const handleCardSwap = () => {
        setCardFace(prevCardFace => {
            const newCardFace = [...prevCardFace];
            newCardFace[index] = !newCardFace[index];
            return newCardFace
        })
    }

    const handleRadioChange = (event) => {
        const target_value = event.target.value;
        SetPrice(data[target_value+"_amazon_price"]);
        SetSpecs(data[target_value+"_specs"]);

        const product_url = data.product_url.replace("{ASIN}", data[target_value+"_asin"]);
        const image_url1 = data.image_url_pt_one.replace("{ASIN}", data[target_value+"_asin"]);
        const image_url2 = data.image_url_pt_two.replace("{ASIN}", data[target_value+"_asin"]);

        SetProductUrl(product_url);
        SetImg1(image_url1);
        SetImg2(image_url2);
        setSizeOption(target_value);
    }


    const sizeComponent = () => {
        return (
            <ListGroup.Item>
                <Form>
                    <Row>
                        {data.available_size.map((size) => (
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
                            <a href={productUrl} target="_blank" rel="noreferrer">
                                <img alt="none" border="0" src={img1} />
                            </a>
                            <img src={img2} alt="" />
                        </div>
                    ) : (
                        <ProductCardDetails data={data} specs={specs}/>
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
                                <a href={productUrl} target="_blank" rel="noreferrer">
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
                                {price}
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
