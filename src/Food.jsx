import React, { useState, useEffect } from "react";
import { Amplify, API } from 'aws-amplify';
import "./App.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Food = () => {
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
    
    const [title, setTitle] = useState("")
    useEffect(() => {
        const GetHealthData = async () => {
            return API.get(apiName, "/", {headers: {}}).then((response) => {
                setTitle(response[0].product_title);
            
            });
        }
        GetHealthData();
    },[]);

    return (
        <>
        <Row>
            <Col md={12}>
                <div className="home-title">
                    {title}
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Food;
