import React from "react";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Data from "./data";

export default function Docs() {
  useEffect(() => {
    // Initialize AOS once the script is loaded
    Aos.init();
  }, []);

  return (
    <div >
      <div className="h">
        <h1 className="text text-center" style={{marginTop:"150px"}}>Documentation</h1>
      </div>
      <div class="card container bg-light " style={{marginTop:"100px"}} data-aos="zoom-in">
        {/* <img class="card-img-top" src="#" alt="Title" /> */}
        <div class="card-body ">
          <h4 class="card-title text-center my-3">What is CPU Scheduling?</h4>
          <p class="card-text my-4">{Data.whatScheduling}</p>
        </div>
      </div>

      <div class="card container bg-light my-5" data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body ">
          <h4 class="card-title text-center my-3">Why CPU Scheduling?</h4>
          <p class="card-text my-4">{Data.whyScheduling}</p>
          <h5>Objectives of Process Scheduling Algorithm</h5>
          <ul>
            {Data.objectives.map((objective, index) => (
              <li key={index}>
                <p>{objective}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="card container bg-light " data-aos="zoom-in">
        {" "}
        {/*data-aos-duration="2000"*/}
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">
            Important CPU scheduling Terminologies
          </h4>
          <ul>
            {Data.terminologies.map((terminologies, index) => (
              <li key={index}>
                <p>{terminologies}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="card container bg-light my-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">Types of CPU Scheduling</h4>
          <p class="card-text my-3">
            There is mainly two major types of CPU Scheduling which is listed
            below.There is sub-types of this algorithm also. we have discussed
            all algorithm in details below.
          </p>
          <ul>
            <li>Preemptive Algorithm</li>
            <li>Non Preemptive Algorithm</li>
          </ul>
          <h5>Preemptive Algorithm</h5>
          <p>{Data.preempt}</p>
          <h5>Non Preemptive Algorithm</h5>
          <p>{Data.nonPreempt}</p>
        </div>
      </div>

      <div class="card container bg-light my-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">
            Types of CPU scheduling Algorithm
          </h4>
          <h5 className="my-3">
            There are mainly six types of process scheduling algorithm
          </h5>
          <ul>
            {Data.schedulingTypes.map((schedulingTypes, index) => (
              <li key={index}>
                <p>{schedulingTypes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
