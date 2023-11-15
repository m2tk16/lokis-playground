import React from "react";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Food = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="home-title">
                    Food
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Food;
