import React from "react";
import image from "../images/5031.jpg";



export default function Home() {
  const inlineStyles = {
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center"
      style={inlineStyles}
    >
      <div className="row position-absolute my-5 ">
        <div className="col  text-light text-center">
          <h1>Process Scheduling Simulator</h1>
        </div>
      </div>

      <div
        className="row rounded-pill text-light text-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          marginLeft: "30rem",
        }}
      >
        <div className="col py-3">
          <h4>
            A CPU Scheduling Simulation for learning and better understanding of
            the Computers
          </h4>
        </div>
        <form action="/Docs">
          <button className="btn btn-outline-primary my-3">Get Started</button>
        </form>
      </div>

      <div className="row align-items-center"></div>
    </div>
  );
}
