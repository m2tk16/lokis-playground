import React, { useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
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
        if (emailStatus === 'sucessfully_subscribed') {
            return "Thank for you subscribing to Loki's Playground!";
        } else if  (emailStatus === 'rewnewed_subscription') {
            return "Welcome back! We are happy to see you back again!";
        } else if (emailStatus === 'invalid_email') {
            return "Please add a valid email."
        } else if  (emailStatus === 'previously_subscribed') {
            return "Thank you for attempting to subscribe, however it seems this email is already in use.";
        }
    }

    return (
        <>
            <h5 className="subscribe-route-title">Subscribe to Loki's Playground</h5>
     
            <Col key="subscribe-column" className="subscribe-column" md={{ span: 6, offset: 3 }}>
                If you are interested in the content being viewed on this page, 
                please submit your email below. Additional items will be added regularly
                and we would love to keep you updated! We promise to not send more emails 
                than once a quarter.
            </Col>
  
            <Col key="subscribe-column" className="subscribe-column" md={{ span: 6, offset: 3 }}>
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
    
            <Col key="subscribe-column" className="subscribe-column" md={{ span: 6, offset: 3 }}>
                {emailStatus !== 'pending' &&
                <Row>
                    <Col key="subscribe-toast" md={{ span: 6, offset: 3 }}>
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
            
      
        </>
    )
}

export default SubscribeComponent;
