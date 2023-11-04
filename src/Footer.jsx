import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <>
        <Row>
            <Col md={12} className="disclaimer-title">
                Disclaimer
            </Col>
        </Row>
        <Row>
            <Col md={12} className="disclaimer-text">
                Some disclaimer stuff here
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col xs={3} className="footer-spacer"></Col>
            <Col xs={4} className="footer-link-title">
                Links
            </Col>
            <Col xs={3} className="footer-contact-title">
                Contact
            </Col>
            <Col xs={2} className="footer-spacer"></Col>
        </Row>
        <Row>
            <Col xs={2} className="footer-spacer"></Col>
            <Col xs={2}>
                <a className="footer-links" href="/">Home</a>
            </Col>
            <Col xs={3}>
                <a className="footer-links" href="/Food">Food</a>
            </Col>
            <Col xs={3}>
                test@gmail.com
            </Col>
            <Col xs={2} className="footer-spacer"></Col>
        </Row>
        <Row>
            <Col xs={2} className="footer-spacer"></Col>
            <Col xs={2}>
                <a className="footer-links" href="/">Health</a>
            </Col>
            <Col xs={3}>
                <a className="footer-links" href="/Food">Toys</a>
            </Col>
            <Col xs={5} className="footer-spacer"></Col>
        </Row>
        <Row>
            <Col xs={2} className="footer-spacer"></Col>
            <Col xs={2}>
                <a href="/" className="footer-links">Training</a>
            </Col>
            <Col xs={3}>
                <a className="footer-links" href="/Food">Leads</a>
            </Col>
            <Col xs={5} className="footer-spacer"></Col>
        </Row>
        <hr></hr>
        <Row>
            <Col xs={12} className="footer-year">2023</Col>
        </Row>
        </>
    )
}

export default Footer;
