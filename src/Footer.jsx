import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Envelope, Instagram } from 'react-bootstrap-icons';


const Footer = () => {

    return (
        <Container className="footer-container">
        <hr></hr> 
        <Row>
            <Col md={12} className="disclaimer-title">
                Disclaimer
            </Col>
        </Row>
        <Row>
            <Col xs={{ span: 10, offset: 1 }} className="disclaimer-text">
                *This website participates in various affiliate programs and we may 
                earn a commission if you click on certain links displayed on this site 
                and make a purchase. We are legally obliged to inform you of our participation in these 
                affiliate programs through this disclaimer.
                We hold a deep passion for the well-being of our own animals and 
                extend this concern to all animals. We would never intend to 
                jeopardize the health or safety of other animals.
                The products featured on this website are to be used at your own 
                discretion. That said, we bear no responsibility for any adverse effects 
                that may arise from the use of these products on your animals. 
                It is strongly advised to consult with a professional veterinarian 
                before making a purchase decision to ensure the safety and well-being 
                of your animals.
            </Col>
            <Col xs={1}></Col>
        </Row>
        <hr></hr>
        <Row>
            <Col xs={{ span: 3, offset: 1 }} className="footer-link-title">
                Links
            </Col>
            <Col xs={4} className="footer-contact-title">
                Contact
            </Col>
            <Col xs={4} className="footer-contact-title">
                Subscription
            </Col>
        </Row>
        <Row>
            <Col xs={{ span: 3, offset: 1 }}>
                <a className="footer-links" href="/">Home</a>
            </Col>
            <Col xs={4}>
                <a href="mailto:lokies.playground@gmail.com"><Envelope /></a>
            </Col>
            <Col xs={4}>
                <a className="footer-links" href="/subscribe">Subscribe</a>
            </Col>    
        </Row> 
        <Row>
            <Col xs={{ span: 3, offset: 1 }}>
                <a className="footer-links" href="/toys">Toys</a>
            </Col>
            <Col xs={4}>
            <a href="instagram://user?username=loki_lab_of_mischief920"><Instagram /></a>
            </Col>
            <Col xs={4}>
                <a className="footer-links" href="/unsubscribe">Unsubscribe</a>
            </Col>    
        </Row> 
        <Row>
            <Col xs={{ span: 3, offset: 1 }}>
                <a className="footer-links" href="/accessories">Accessories</a>
            </Col>  
        </Row> 
        <Row>
            <Col xs={{ span: 3, offset: 1 }}>
                <a className="footer-links" href="/health">Health</a>
            </Col>  
        </Row> 
        <hr></hr>
        <Row>
            <Col xs={12} className="footer-year">Loki's Playground - 2023</Col>
        </Row>
        </Container>
    )
}

export default Footer;
