import React from "react";
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Home = () => {
    return (
        <div className="home-body">
            <Row>
                <Col md={12}>
                    <h1>
                        About Loki's Playground
                        <hr></hr>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col className="home-column" md={6}>
                    <div><b>About Us</b></div>
                    <div className="home-about">
                        Kick-off time: My partner and I absolutely adore our canine companion. 
                        Meet Loki, our dashing three-year-old black Labrador Retriever, 
                        who has undoubtedly stolen the spotlight in our lives. He's our bona 
                        fide "pandemic pup," having been my sidekick throughout the work-from-home 
                        era – shoutout to fellow pet parents who've been in the same boat; 
                        we've made it through together! For Loki, the sky's the limit; 
                        he's the proud recipient of a treasure trove of toys and gadgets,
                        all aimed at channeling his boundless zest for life. In our household, 
                        he's known as the 'Nuclar bomb of energy,' a whirlwind of vivacious 
                        energy that never seems to wind down.
                    </div>
                </Col>
                <Col className="home-column" md={6}>
                <div><b>Purpose of this website</b></div>
                    <div className="home-about">
                        The primary objective of this platform is to curate a selection of products that 
                        cater to both new and seasoned dog owners. Each item presented has been personally 
                        acquired and rigorously tested by Loki, ensuring an authentic puppy seal of approval. 
                        Our aim is to provide valuable insights, and while our experiences with these products 
                        vary, we believe in sharing our perspective to benefit others. Our mission is fulfilled 
                        if we can guide you to cost-effective choices or provide answers to your queries. 
                        The list of products will evolve, so we invite you to revisit for the latest 
                        recommendations.  
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
