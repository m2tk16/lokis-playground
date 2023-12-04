import React, { useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const Subscribe = () => {
    const [emailValue, setEmailValue] = useState("")
    const [emailStatus, setEmailStatus] = useState("pending")

    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast);
    
    const SubscribeSubmission = async (email, sub_type) => {  
        Amplify.configure({
            API: {
                endpoints: [
                    {
                        name: "LokisPlaygroundSubscriptionAPI ",
                        endpoint: "https://bgfjilk040.execute-api.us-east-1.amazonaws.com/staging",
                        path: "/"
                    },
                ],
            },
        });

        const myInit = {
            headers: {},
            response: false,
            queryStringParameters: { 
                email: email,
                subscription_type: sub_type
            }
        };

        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        if (emailRegex.test(email)) {
            console.log("Valid email");

            return API.get("LokisPlaygroundSubscriptionAPI", "/", myInit).then((response) => {
                setEmailStatus(response.status);
                setShowToast(true);
            });

        } else {
            console.log("Invalid email");
            setEmailStatus("invalid_email");
            setShowToast(!showToast)
        }
    };

    const HandleEmailChange = (e: String) => {
        setEmailValue(e.target.value.toLowerCase());
    }
 
   
    const toastCaption = () => {
        if  (emailStatus === 'sucessfully_unsubscribed') {
            return "This email has been successfully unsubscribed.";
        } else if (emailStatus === 'previously_unsubscribed') {
            return "This email has previously been unsubscribed."
        } else if (emailStatus === 'never_subscribed') {
            return "This email currently does not exist, please subscribe to Loki's Playground."
        } else if (emailStatus === 'invalid_email') {
            return "Please add a valid email."
        } else {
            return "This email does not exist and fell into a catch all error."
        }
    }



    return (
        <Container>
            <h5 className="subscribe-route-title">Unsubscribe to Loki's Playground</h5>
            <Row className="subscribe-row">
                <Col xs={12} className="subscribe-column">
                    We are sorry to see you go. We hope you enjoyed your time while you were
                    with us. Please input your email and select submit to unsubscribe. You
                    will no longer receive emails for Loki's Playground.
                </Col>
            </Row>
            <Row className="subscribe-row">
                <InputGroup className="mb-3" size="sm">
                    <Col key="subscribe-column-input" className="subscribe-column button" xs={8}>
                        <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            value={emailValue}
                            onChange={HandleEmailChange}
                        />
                    </Col>
                    <Col key="subscribe-column-button" className="subscribe-column button" xs={4}>
                        <Button 
                            variant="outline-info" 
                            size="md"
                            onClick={() => SubscribeSubmission(emailValue, 'unsubscribe')}
                            >Submit
                        </Button>
                    </Col>
                </InputGroup>
            </Row>
            <Row className="subscribe-row">
                <Col key="subscribe-column" className="subscribe-column" xs={12}>
                    {emailStatus !== 'pending' &&
                    <Row>
                        <Col key="subscribe-toast" xs={12}>
                            <Toast 
                                show={showToast} 
                                onClose={toggleShowToast}
                                animation={true}
                                delay={5000} 
                                autohide
                            >
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Subscription Status</strong>
                                    <small>Now</small>
                                </Toast.Header>
                                <Toast.Body>{toastCaption()}</Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Subscribe;
