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
                <Col md={8}>
                    <div className="home-about">
                        Let's start off here: My wife and I love our dog more than anything in the world. 
                        Our dog is Loki -- a 3 year old full black labador retriver, if you haven't caught on yet. 
                        He is 100% a covid dog while I worked from home. If you can relate to this, kudos, we survied.
                        Loki means the world to us and basically gets anything he wants. That said, we have 
                        bought our fair share (thousands) of dollars of almost anything that will 
                        occupy his time. As I like to say, he is "A nuclear bomb of energy".
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
