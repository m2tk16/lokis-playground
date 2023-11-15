import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Food from "./Food";
import Toys from "./Toys";
import Health from "./Health";
import Accessories from "./Accessories";
import Footer from "./Footer";


function App() {
  const [endpoint, setEndPoint] = useState({
    url: "https://8n0kkaiqz4.execute-api.us-east-1.amazonaws.com/staging/",
    api: "LokisPlaygroundProductsAPI"
  })

  return (
    <div className="body">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home endpoint={endpoint}/>} />
            <Route path='/food' element={<Food page="food" endpoint={endpoint}/>} />
            <Route path='/toys' element={<Toys page="toys" endpoint={endpoint}/>} />
            <Route path='/health' element={<Health page="health" endpoint={endpoint}/>} />
            <Route path='/accessories' element={<Accessories page="accessories" endpoint={endpoint}/>} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;