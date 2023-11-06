import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"

const Health = () => {
    
    const data = [
        {
            image_url_pt_one: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07CTKSVKK&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US",
            image_url_pt_two: "https://ir-na.amazon-adsystem.com/e/ir?t=lokisplaygrou-20&language=en_US&l=li2&o=1&a=B07CTKSVKK",
            product_url: "https://www.amazon.com/Dog-Poop-Bag-Biodegradable-Scented/dp/B07CTKSVKK?pd_rd_w=AOLXj&content-id=amzn1.sym.904ca806-5e87-42cf-86b8-c792f6d660bd&pf_rd_p=904ca806-5e87-42cf-86b8-c792f6d660bd&pf_rd_r=RAGPD4ZMXEXT689JA5CY&pd_rd_wg=1Ir7p&pd_rd_r=e5579f74-1148-4cf4-8ceb-30e2ade15d66&pd_rd_i=B07CTKSVKK&psc=1&linkCode=li3&tag=lokisplaygrou-20&linkId=cf50083604ca7e731abe20ab80a8a69c&language=en_US&ref_=as_li_ss_il",
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
            image_url_pt_one: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B8CG602&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lokisplaygrou-20&language=en_US",
            image_url_pt_two: "https://ir-na.amazon-adsystem.com/e/ir?t=lokisplaygrou-20&language=en_US&l=li2&o=1&a=B00B8CG602",
            product_url: "https://www.amazon.com/dp/B00B8CG602?psc=1&linkCode=li3&tag=lokisplaygrou-20&linkId=336973b42a5620703fea97f11ef42792&language=en_US&ref_=as_li_ss_il",
            product_title: "Seresto Large Dog Vet-Recommended Flea & Tick Treatment & Prevention Collar for Dogs Over 18 lbs.",
            amazon_price: "$67.89",
            chewy_price: "$65.00",
            about: "",
            specs: [
                "For 18+ lbs",
                "8 Month Protection",
                "1 pack"
            ],
            review: {
                pros: [
                    "After putting this on Loki, not one tick appeared on him. Had some crawlers but nothing that bit into him and stayed. As for flea's, I don't believe he's had an issue with some so it is hard to tell how effective this was against those."
                ],
                cons: [
                    "Little pricy",
                    "Is a little difficult to take on and off."
                ],
            }
        },
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
