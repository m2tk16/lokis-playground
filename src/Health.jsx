import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"



const Health = () => {
    
    const data = [
        {
            image_url: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07CTKSVKK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US",
            product_url: "https://amzn.to/3skirXo",
            product_title: "Dog Poop Bag Biodegradable Scented: Leak Proof Dog Waste Bags With 1 Dispenser",
            amazon_price: "$10.99",
            chewy_price: "$11.29",
            about: "This pack comes with 26 rolls (360ct) with a thick plastic bag holder which you can attach to the leash. The entitry of these backs can be expected to be used in ~3-4 months, depending on your dogs frequency.",
            specs: [
                "26 rolls",
                "390 count"
            ],
            review: {
                pros: [
                    "Comes with a bag holder. While this is good for the first time buy, you end up throwing out the holders you dont need."
                ],
                cons: [
                    "We did expereince a handful of rolls where the bags stuck together and were unable to use.. This seemed like a one off pacakge."
                ],
            }
        },
        {
            image_url: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07CTKSVKK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US",
            product_url: "https://amzn.to/3skirXo",
            product_title: "Poop Bags 2",
            amazon_price: "$9.99",
            chewy_price: "$10.29",
            about: "Comes with 26 roles with a thick plastic bag holder which you can attach to the leash.",
            specs: [
                "26 rolls",
                "390 count"
            ],
            review: "We personally have these on subscribe and save on Amazon. My only complaint with this product is that it since we constantly buy these and already have a bag holder, we end up throwing out that bag holder every time, which is a waste."
        }
    ]

    return (
        <Row>
            {data.map((item, index) => (
                <Col key={index} sm={6}>
                    <ProductCardFace data={data[index]} index={index}/>
                </Col>
            ))}
        </Row>
    )
}

export default Health;
