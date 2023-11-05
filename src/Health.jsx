import React, { useState } from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"
import ProductCardDetails from "./ProductCardDetails"



const Health = () => {
    
    const data = [
        {
            product_url: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07CTKSVKK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US",
            product_title: "Poop Bags 1",
            amazon_price: "$10.99",
            chewy_price: "$11.29",
            details: "card details 1"
        },
        {
            product_url: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07CTKSVKK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US",
            product_title: "Poop Bags 2",
            amazon_price: "$9.99",
            chewy_price: "$10.29",
            details: "card details 2"
        }
    ]
    const [cardFace, setCardFace] = useState(Array(data.length).fill(true));

    const handleCardSwap = (index) => {
        const newCardFace = cardFace.slice();
        newCardFace[index] = !newCardFace[index];
        setCardFace(newCardFace);
    }



    return (
        <>
        <Row>
            {data.map((item, index) => (
                <Col key={index} sm={6} onClick={() => handleCardSwap(index)}>
                    {cardFace[index] ? (
                        <ProductCardFace data={data[index]}/>
                    ) : (
                        <ProductCardDetails details={item.details}/>
                    )}
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Health;
