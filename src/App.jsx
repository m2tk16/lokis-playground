import React from "react";
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
  return (
    <div className="body">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/food' element={<Food />} />
            <Route path='/toys' element={<Toys />} />
            <Route path='/health' element={<Health page="health"/>} />
            <Route path='/accessories' element={<Accessories page="health"/>} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;