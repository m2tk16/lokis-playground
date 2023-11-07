import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface ProductCardDetailsProps {
    data: any
  }
  
    
const ProductCardDetails = (props: ProductCardDetailsProps) => {
    const { data } = props;
    const specs = data.specs;
    const pros = data.review.pros;
    const cons = data.review.cons;
    const about = data.about;

    return (
        <Tabs
            defaultActiveKey="about"
            id="product-tabs"
            className="mb-3 tab-content"
        >
            <Tab eventKey="about" title="About">
                <ul>
                    {about.map((s, index) => (
                        <li key={index}>{s}</li>
                    ))}
                </ul>
            </Tab>
            <Tab eventKey="specs" title="Specs">
                <ul>
                    {specs.map((s, index) => (
                        <li key={index}>{s}</li>
                    ))}
                </ul>
            </Tab>
            <Tab eventKey="review" title="Review">
                <Row>
                    <Col xs={1}></Col>
                    <Col className="pro-con-title" xs={11}>Pros:</Col>
                </Row>
                <Row>
                <Col xs={1} key="pros-spacer"></Col>
                    <Col xs={11} key="pros-title">
                        <ul>
                            {pros.map((s, index) => (
                                <li>{s}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col className="pro-con-title" xs={11}>Cons:</Col>
                </Row>
                <Row>
                    <Col xs={1} key="cons-spacer"></Col>
                    <Col xs={11} key="cons-title">
                        <ul>
                            {cons.map((s, index) => (
                                <li>{s}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Tab>
        </Tabs>
    )
}

export default ProductCardDetails;
