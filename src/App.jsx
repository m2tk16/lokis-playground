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
import Training from "./Training";
import Leads from "./Leads";
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
            <Route path='/health' element={<Health />} />
            <Route path='/training' element={<Training />} />
            <Route path='/leads' element={<Leads />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;