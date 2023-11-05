import React from "react";
import "./App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface ProductCardDetailsProps {
    data: any
  }
  
    
const ProductCardDetails = (props: ProductCardDetailsProps) => {
    const { data } = props;
    console.log(props.data.review)

    return (
        <Tabs
            defaultActiveKey="profile"
            id="product-tabs"
            className="mb-3"
        >
            <Tab eventKey="about" title="About">
                {data.about}
            </Tab>
            <Tab eventKey="specs" title="Specs">
                {data.specs}
            </Tab>
            <Tab eventKey="review" title="Review">
                {data.review}
            </Tab>
        </Tabs>
    )
}

export default ProductCardDetails;
