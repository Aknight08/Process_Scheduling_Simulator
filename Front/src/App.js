import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import AppTemp from "./AppTemp"; // Import the component for the simulator page
import "./App.css";
import Nav from "./components/Navbar/Nav.js";
import Simulator from "./components/Simulator/Simulator.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import Docs from "./components/Docs/Docs.js";
import About from "./components/About/About.js";

// import Sim from "./components/Simulator/Sim.js"
// import Trial from "./Trial.js";

export default function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Simulator" element={<Simulator />} />
          {/* <Route path="/Simulator" element={<Sim />} /> */}
          <Route path="/Docs" element={<Docs />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
