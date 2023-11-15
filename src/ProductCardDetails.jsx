import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BsFillStarFill, BsStar } from "react-icons/bs";

interface ProductCardDetailsProps {
    data: any,
    specs: any
  }
  
    
const ProductCardDetails = (props: ProductCardDetailsProps) => {
    const { data, specs } = props;
    const pros = data.review.pros;
    const cons = data.review.cons;
    const about = data.about;
   

    const starShading = (value) => {
        if (value < 1) {
            return <><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></>
        } else if (value < 2) {
            return <><BsFillStarFill/><BsStar/><BsStar/><BsStar/><BsStar/></>
        } else if (value < 3) {
            return <><BsFillStarFill/><BsFillStarFill/><BsStar/><BsStar/><BsStar/></>
        } else if (value < 4) {
            return <><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStar/><BsStar/></>
        } else if (value < 5) {
            return <><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStar/></>
        } else if (value.toString() === 'NaN') {
            return <><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></>
        } else {
            return <><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></>
        }
    }

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
                                <li key={index}>{s}</li>
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
                                <li key={index}>{s}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                {data.toughness >= 0 &&
                <Row>
                    <hr></hr>
                    <Col className="durabiilty-colunn" xs={12}>
                        Durability: {starShading(data.toughness)}
                    </Col>
                </Row>
                }
            </Tab>
        </Tabs>
    )
}

export default ProductCardDetails;
