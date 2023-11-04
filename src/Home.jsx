import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Home = () => {
    return (
        <>
        <Row>
            <Col md={12}>
                <div className="home-title">
                    Loki's Playground
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Home;
