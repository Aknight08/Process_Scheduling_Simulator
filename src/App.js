
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import AppTemp from "./AppTemp"; // Import the component for the simulator page
import './App.css';
import Nav from "./components/Navbar/Nav.js";
import Simulator from "./components/Simulator/Simulator.js"
import AppTemp from "./AppTemp.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import Docs from "./components/Docs/Docs.js";
import About from "./components/About/About.js";
// import Trial from "./Trial.js";

export default function App() {
  return (
    <div>
      <Nav/>
      <Router>
      
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Simulator" element={<Simulator />} />
        <Route path="/Docs" element={< Docs/>} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Home" element={<Trial />} */}
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}