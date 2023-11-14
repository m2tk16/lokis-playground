import React, { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCardFace from "./ProductCardFace"
import LokiMaine from "./images/loki-maine.png";
import LokiHotel from "./images/loki-hotel.png";



const Health = () => {
    const [data, setData] = useState([])
    const apiName = "LokisPlaygroundHealthProductsAPI";
    
    Amplify.configure({
      API: {
        endpoints: [
          {
            name: apiName,
            endpoint: "https://hc7bhdzjlj.execute-api.us-east-1.amazonaws.com/staging",
            path: "/"
          },
        ],
      },
    });
    
    useEffect(() => {
        const GetHealthData = async () => {
            return API.get(apiName, "/", {headers: {}}).then((response) => {
                setData(response);
            
            });
        }
        GetHealthData();
    },[]);

    return (
        <>
        <Row>
            <Col className="page-header" sm={12}>
                Loki Approved Health Products
            </Col>
        </Row>
        <Row>
            <hr></hr>
        </Row>
        <Row>
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
        <Row className="page-row-spacer">
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
                    <ProductCardFace data={data[index]} index={index} totalItems={data.length} page="health"/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Health;
