import React from "react";
import "./App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface ProductCardDetailsProps {
    details: string
  }
  
    
const ProductCardDetails = (props: ProductCardDetailsProps) => {
    const { details } = props;

    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="about" title="About">
                {details}
            </Tab>
            <Tab eventKey="specs" title="Specs">
            Tab content for Specs
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
            Tab content for Reviews
            </Tab>
        </Tabs>
    )
}

export default ProductCardDetails;
