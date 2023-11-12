import React,  { useState } from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import ProductCardDetails from "./ProductCardDetails"
import { BsFillStarFill, BsStar, BsPlusCircle } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

interface ProductCardFaceProps {
    data: any,
    totalItems: integer,
    index: integer,
    page: page
  }
  
const ProductCardFace = (props: ProductCardFaceProps) => {
    const { data, totalItems, index, page } = props;

    const ImgUrlPt1 = "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN={ASIN}&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US"
    const ImgUrlPt2 = "https://ir-na.amazon-adsystem.com/e/ir?t=lokisplaygrou-20&language=en_US&l=li2&o=1&a={ASIN}"
    const ProductUrl = "https://www.amazon.com/gp/product/{ASIN}?ie=UTF8&th=1&linkCode=li2&tag=lokisplaygrou-20&linkId=d38999b47cca2544ee4e72e4eb778e3b&language=en_US&ref_=as_li_ss_il"
    const productStarsURL = "https://ig1lg6ajuj.execute-api.us-east-1.amazonaws.com/dev/LokisPlaygronudUpateProductStars";


    const [cardFace, setCardFace] = useState(Array(totalItems).fill(true));
    const [sizeOption, setSizeOption] = useState("XS");
    const [price, SetPrice] = useState(data.XS_amazon_price);
    const [productUrl, SetProductUrl] = useState(ProductUrl.replace("{ASIN}", data.XS_asin));
    const [img1, SetImg1] = useState(ImgUrlPt1.replace("{ASIN}", data.XS_asin));
    const [img2, SetImg2] = useState(ImgUrlPt2.replace("{ASIN}", data.XS_asin));
    const [specs, SetSpecs] = useState(data.XS_specs);
    const [stars, setStars] = useState((data.total_stars/data.total_like_clicks).toString().substring(0,4).replace("NaN", "0"));
    


    const handleCardSwap = (index) => {
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

        const product_url = ProductUrl.replace("{ASIN}", data[target_value+"_asin"]);
        const image_url1 = ImgUrlPt1.replace("{ASIN}", data[target_value+"_asin"]);
        const image_url2 = ImgUrlPt2.replace("{ASIN}", data[target_value+"_asin"]);

        SetProductUrl(product_url);
        SetImg1(image_url1);
        SetImg2(image_url2);
        setSizeOption(target_value);
    }

    const emptyStar = (value) => {
       return <BsStar className="star-size" onClick={() => UpdateProductStars(value)}/>
    }

    const fullStar = (value) => {
        return <BsFillStarFill className="star-size" onClick={() => UpdateProductStars(value)}/>
     }

    const starShading = (num, den) => {
        const starValueDecimal = num/den;

        if (starValueDecimal < 1) {
            return <>{emptyStar("1")}{emptyStar("2")}{emptyStar("3")}{emptyStar("4")}{emptyStar("5")}</>
        } else if (starValueDecimal < 2) {
            return <>{fullStar("1")}{emptyStar("2")}{emptyStar("3")}{emptyStar("4")}{emptyStar("5")}</>
        } else if (starValueDecimal < 3) {
            return <>{fullStar("1")}{fullStar("2")}{emptyStar("3")}{emptyStar("4")}{emptyStar("5")}</>
        } else if (starValueDecimal < 4) {
            return <>{fullStar("1")}{fullStar("2")}{fullStar("3")}{emptyStar("4")}{emptyStar("5")}</>
        } else if (starValueDecimal < 5) {
            return <>{fullStar("1")}{fullStar("2")}{fullStar("3")}{fullStar("4")}{emptyStar("5")}</>
        } else if (starValueDecimal.toString() === 'NaN') {
            return <>{emptyStar("1")}{emptyStar("2")}{emptyStar("3")}{emptyStar("4")}{emptyStar("5")}</>
        } else {
            return <>{fullStar("1")}{fullStar("2")}{fullStar("3")}{fullStar("4")}{fullStar("5")}</>
        }
    }
    const [starIcons, setStarIcons] = useState(starShading(data.total_stars, data.total_like_clicks))

    const UpdateProductStars = (value) => {
        const header = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": data.product_id, 
                "category": page,
                "total_stars": value
            })
        }
        console.log(header)

        fetch(productStarsURL, header)
            .then(response => response.json())
            .then(response => (JSON.parse(response.body)))
            .then(response => {
                const num = parseFloat(response.total_stars);
                const den = parseFloat(response.total_like_clicks);
                const value = (num/den).toString().substring(0,4).replace("NaN", "0");
                setStars(value);
                setStarIcons(starShading(num, den));
            }
        );
    };


    const sizeComponent = () => {
        return (
            <ListGroup.Item>
                <Form>
                    <Row>
                        <Col xs={1}></Col>
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
                        <Col xs={1}></Col>
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
                                <BsPlusCircle className="bs-plus-circle" size={24}  onClick={() => handleCardSwap(index)}/>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    
                    {data.has_size === 'Y' &&
                        sizeComponent()
                    }

                    <ListGroup.Item>
                        <Row className="co-row-wrapper">
                            <Col xs={6}>
                                <div className="product-stars">{starIcons}</div>
                                <div className="product-stars avg-star-count">{stars}</div>
                            </Col>
                            <Col xs={6}>
                                <a href={productUrl} target="_blank" rel="noreferrer">
                                    <div className="product-price"><FaAmazon className="amazon-icon"/>
                                        <div className="price-spacer"></div>{price}
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Card>
    )
}

export default ProductCardFace;
