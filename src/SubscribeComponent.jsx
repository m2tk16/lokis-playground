import React, { useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const SubscribeComponent = () => {
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
        if (emailStatus === 'sucessfully_subscribed') {
            return "Thank for you subscribing to Loki's Playground!";
        } else if  (emailStatus === 'rewnewed_subscription') {
            return "Welcome back! We are happy to see you back again!";
        } else if  (emailStatus === 'previously_subscribed') {
            return "Thank you for attempting to subscribe, however it seems this email is already in use.";
        }
    }

    return (
        <>
        <h5 className="subscribe-route-title">Subscribe to Loki's Playground</h5>
        <Row className="subscribe-row">
            <Col key="subscribe-column" className="subscribe-column" sm={12}>
                If you are interested in the content being viewed on this page, 
                please submit your email below. Additional items will be added regularly
                and we would love to keep you updated! We promise to not send more emails 
                than once a quarter.
            </Col>
        </Row>
        <Row className="subscribe-row">
            <Col key="subscribe-column" className="subscribe-column" sm={12}>
                <InputGroup className="mb-3" size="sm">
                    <InputGroup.Text id="subscribe-label">Subscribe:</InputGroup.Text>
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        value={emailValue}
                        onChange={HandleEmailChange}
                    />
                    <Button 
                        variant="outline-info" 
                        size="lg"
                        className="subscribe-button"
                        onClick={() => SubscribeSubmission(emailValue, 'subscribe')}
                    >Submit</Button>
                </InputGroup>
            </Col>
        </Row>
        <Row className="subscribe-row">
            {emailStatus !== 'pending' &&
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
            }
        </Row>
        </>
    )
}

export default SubscribeComponent;
