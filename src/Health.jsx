import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"
import LokiMaine from "./images/loki-maine.png";
import LokiHotel from "./images/loki-hotel.png";


interface HealthProps {
    endpoint: any
}


const Health = (props: HealthProps) => {
    const { endpoint } = props;
    const [data, setData] = useState([])

    useEffect(() => {
        const GetHealthData = async () => {
            Amplify.configure({
                API: {
                    endpoints: [
                        {
                            name: endpoint.api,
                            endpoint: endpoint.url,
                            path: "/"
                        },
                    ],
                },
            });
            const myInit = {
                headers: {},
                response: false,
                queryStringParameters: { category: 'health' }
            };
            return API.get(endpoint.api, "/", myInit).then((response) => {
                setData(response);
            
            });
        }
        GetHealthData();
    },[endpoint]);

    return (
        <Container>
            <Row>
                <Col className="page-header" sm={12}>
                    Loki Approved Health Products
                </Col>
            </Row>
            <Row>
                <hr></hr>
            </Row>
            <Row style={{'textAlign': 'center'}}>
                <Col xs={7}>
                    <div className="page-about">
                    Welcome to our pawpicked assortment of health products for your four-legged friends! 
                    Each item showcased here has not only been personally acquired and tested by us, 
                    but many remain staples in our daily pet care regimen. 
                    </div>
                </Col> 
                <Col xs={5}>
                    <img className="loki-maine" src={LokiMaine} alt="loki-maine" />
                </Col>
            </Row>
            <Row style={{'textAlign': 'center'}}>
                <Col xs={5}>
                    <img className="loki-hotel" src={LokiHotel} alt="loki-hotel" />
                </Col>
                <Col xs={7}>
                    <div className="page-about">
                    Your pet's well-being is our top priority. 
                    If you're uncertain about any product, we strongly encourage a chat with your veterinarian to confirm 
                    its suitability for your beloved pet. Rest assured, we only feature products that have positively 
                    impacted our lives; anything less than excellent has no place here. Our commitment is to the health 
                    and happiness of our pets, and yours!
                    </div>
                </Col>
                <hr></hr>
            </Row>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} sm={4}>
                        <ProductCardFace 
                            data={data[index]} 
                            index={index} 
                            totalItems={data.length} 
                            ip={endpoint.ip}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Health;
