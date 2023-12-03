import React, { useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
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
        return API.get("LokisPlaygroundSubscriptionAPI", "/", myInit).then((response) => {
            setEmailStatus(response.status);
            setShowToast(true);
        });
    };

    const HandleEmailChange = (e: String) => {
        setEmailValue(e.target.value);
    }
 
   
    const toastCaption = () => {
        if  (emailStatus === 'sucessfully_unsubscribed') {
            return "This email has been successfully unsubscribed.";
        } else if (emailStatus === 'previously_unsubscribed') {
            return "This email has previously been unsubscribed."
        } else {
            return "This email currently does not exist, please subscribe to Loki's Playground."
        }
    }

    return (
        <>
        <Row className="subscribe-row">
            <Col xs={12} className="unsubscribe-text">
                We are sorry to see you go. We hope you enjoyed your time while you were
                with us. Please input your email and select submit to unsubscribe.
            </Col>
        </Row>

        <Row className="subscribe-row">
            <Col key="subscribe-column" className="subscribe-column" sm={12}>
                <InputGroup className="mb-3" size="sm">
                    <InputGroup.Text id="subscribe-label">Unsubscribe:</InputGroup.Text>
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        value={emailValue}
                        onChange={HandleEmailChange}
                    />
                    <Button 
                        variant="outline-info" 
                        size="sm"
                        onClick={() => SubscribeSubmission(emailValue, 'unsubscribe')}
                    >Submit</Button>
                </InputGroup>

                {emailStatus !== 'pending' &&
                <Row>
                    <Col key="subscribe-toast" sm={12}>
                        <Toast 
                            show={showToast} 
                            onClose={toggleShowToast} 
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
        </>
    )
}

export default Subscribe;
