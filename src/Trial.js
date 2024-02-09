// Home.js

import React from 'react';
import image from "./one.png"

export default function Trial() {
  return (
    <div>
        <img className="card-img-top img-fluid " src={image} alt="Title" />
        
      {/* <img src={image} className="img-fluid" alt="home image"/> Use the imported image */}
      {/* <div className="card ">
        <img className="card-img-top img-fluid" src={image} alt="Title" />
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">fndskfn</p>
        </div> */}
      {/* </div> */}
      <canvas class="background"></canvas>
  
      <script src="path/to/particles.min.js"></script>
    </div>
  );
}

