// import { useState } from "react";
// import axios from "axios";

// import GanntChart from "../GanntChart";
// import bgImg from "../images/6402688_3274408.jpg";
// import "./Simulator.css";
// import Table from "../Table/Table";

// export default function App() {

//   const [inputarr, setInputarr] = useState([]);

//   const [inputdata, SetInputdata] = useState({
//     process: "",
//     burst: "",
//     arrival: "",
//   });

//   const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

//   const [isVisible, setIsVisible] = useState(false);

//   const [result, setResult] = useState([]);

//   // Sending data to backend
//   const sendToController = async (e) => {
//     e.preventDefault();
//     try {

//       const dataToSend = inputarr.map(item => ({ ...item, algorithm: selectedAlgorithm }));

//       const response = await axios.post("http://localhost:8080/redirect/main", dataToSend);

//       // Remove after testing done
//       console.log(dataToSend);
//       console.log("\nForm data submitted successfully:", response.data);

//       // setResult(response.data);
//       setInputarr(response.data)

//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }
//   };

//   const handleCalculate = (e) => {
//     if (e) {
//       e.preventDefault();
//     }
//     setSelectedAlgorithm(e.target.value);
//     setIsVisible(true);

//     // addAlgoDetail(e);

//     sendToController(e);
//   };

//   function changehandle(e) {
//     SetInputdata({ ...inputdata, [e.target.name]: e.target.value });
//   }

//   const resetTable = () => {
//     setInputarr([]); // Resetting the table entries
//   };



//   let { process, burst, arrival } = inputdata;
//   function changhandle() {
//     // Check if any field is empty or contains only whitespace
//     if (process.trim() === "") {
//       alert("Please fill Process Id");
//       return; // Prevent adding empty values to the array
//     }

//     if (burst.trim() === "") {
//       alert("Please fill burst Time");
//       return; // Prevent adding empty values to the array
//     }

//     if (arrival.trim() === "") {
//       alert("Please fill Arrival Time");
//       return; // Prevent adding empty values to the array
//     }

//     setInputarr([...inputarr, { process, burst, arrival }]);

//     SetInputdata({ process: "", burst: "", arrival: "" });
//   }

//   //  -------------------------------------------------------------

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="row">
//         <div className="col offset-5">
//           <h1 className="my-3" style={{ fontFamily: "Arima, system-ui" }}>
//             CPU Scheduler
//           </h1>
//         </div>
//       </div>
//       <div className="row">
//         {/* <form className="col-12" onSubmit={(e) => sendToController(e)}> */}
//         <div className="col-12 col-md-9 offset-md-1 my-5">
//           <div className="row">
//             <div className="col-md-3 m-2">
//               <input
//                 type="number"
//                 autoComplete="off"
//                 name="process"
//                 value={inputdata.process}
//                 onChange={changehandle}
//                 placeholder="Process ID"
//                 className="form-control"
//               />
//             </div>

//             <div className="col-md-3 m-2">
//               <input
//                 type="number"
//                 autoComplete="off"
//                 name="arrival"
//                 value={inputdata.arrival}
//                 onChange={changehandle}
//                 placeholder="Arrival Time"
//                 className="form-control"
//               />
//             </div>

//             <div className="col-md-3 m-2">
//               <input
//                 type="number"
//                 autoComplete="off"
//                 name="burst"
//                 value={inputdata.burst}
//                 onChange={changehandle}
//                 placeholder="Burst Time"
//                 className="form-control"
//               />

//             </div>
//             <div className="col-md-3 mx-2 m-2">
//               <button
//                 className="btn btn-success"
//                 // type="submit"
//                 onClick={changhandle}
//               >
//                 Add Process
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="offset-lg-1 col-lg-6 col-md-2 my-5">
//           <div className="row">
//             <div className="col-md-9">
//               <select
//                 name="algo"
//                 id="algo"
//                 value={selectedAlgorithm}
//                 onChange={(e) => setSelectedAlgorithm(e.target.value)}
//                 className="form-control"
//               >
//                 <option value="" disabled hidden>
//                   Select an algorithm
//                 </option>
//                 <option name="sjf" value="3">Shortest Job First</option>
//                 <option name="rr" value="2">Round Robin</option>
//                 <option name="fcfs" value="1">First Come First Serve</option>
//                 <option name="ps" value="4">Priority Scheduling</option>
//               </select>
//               <br />
//               <button className="btn btn-danger" type="submit" onClick={(e) => handleCalculate(e)}>
//                 Calculate
//               </button>
//               {/* ---------------------------------- */}

//               {/* ------------------------------------------- */}
//             </div>
//           </div>
//         </div>
//         {/* </form> */}
//       </div>

//       <div className="row">
//         <div className="table-container mx-5 col-md-8">
//           <table className="table table-striped table-hover table-dark table-bordered">
//             <tbody>
//               <tr>
//                 <td>Process ID</td>
//                 <td>Arrival Time</td>
//                 <td>Burst Time</td>
//               </tr>
//               {inputarr.map((info, ind) => (
//                 <tr key={ind}>
//                   <td>{info.process}</td>
//                   <td>{info.arrival}</td>
//                   <td>{info.burst}</td>
//                 </tr>
//               ))}

//             </tbody>

//           </table>
//         </div>
//         <button className="btn btn-danger" onClick={resetTable}>
//             Reset Table
//           </button>
//       </div>

//       <div className="row">
//         <div className="col">
//           {isVisible && <GanntChart props={inputarr} />}
//         </div>
//       </div>

//       <div className="row">
//         <div className="table-container mx-5 col-md-8">
//           <table className="table table-striped table-hover table-dark table-bordered">
//             <tbody>
//               <tr>
//               <td>Process ID</td>
//                   <td>Arrival Time</td>
//                   <td>Burst Time</td>
//                   <td>Completion Time</td>  
//                   <td>Waiting Time</td>
//                   <td>Turn Around Time</td>
//               </tr>

//               {inputarr.map((info, ind) => (
//                 <tr key={ind}>
//                   <td>{info.process}</td>
//                   <td>{info.arrival}</td>
//                   <td>{info.burst}</td>
//                   <td>{info.completionTime}</td>
//                   <td>{info.waitingTime}</td>
//                 </tr>
//               ))}
//               <tr>
//                 <td>Average Waiting Time</td>
//               </tr>
//             </tbody>

//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef } from "react";
// import axios from "axios";
// import GanntChart from "../GanntChart";
// import bgImg from "../images/6402688_3274408.jpg";
// import "./Simulator.css";

// export default function App() {
//   const [inputarr, setInputarr] = useState([]);
//   const [inputdata, setInputdata] = useState({
//     process: "",
//     burst: "",
//     arrival: "",
//   });
//   const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
//   const [isVisible, setIsVisible] = useState(false);
//   const [result, setResult] = useState([]);
//   const processInputRef = useRef(null); // Creating a ref for the Process ID input field

//   const sendToController = async (e) => {
//     e.preventDefault();
//     try {
//       const dataToSend = inputarr.map((item) => ({
//         ...item,
//         algorithm: selectedAlgorithm,
//       }));
//       const response = await axios.post(
//         "http://localhost:8080/redirect/main",
//         dataToSend
//       );
//       console.log(dataToSend);
//       console.log("\nForm data submitted successfully:", response.data);
//       setInputarr(response.data);
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }
//   };

//   const handleCalculate = (e) => {
//     if (e) {
//       e.preventDefault();
//     }
//     setSelectedAlgorithm(e.target.value);
//     setIsVisible(true);
//     sendToController(e);
//   };

//   const changehandle = (e) => {
//     setInputdata({ ...inputdata, [e.target.name]: e.target.value });
//   };

//   const clearTable = () => {
//     setInputarr([]);
//   };

//   const changhandle = () => {
//     if (inputdata.process.trim() === "") {
//       alert("Please fill Process Id");
//       return;
//     }
//     if (inputdata.burst.trim() === "") {
//       alert("Please fill burst Time");
//       return;
//     }
//     if (inputdata.arrival.trim() === "") {
//       alert("Please fill Arrival Time");
//       return;
//     }
//     setInputarr([...inputarr, inputdata]);
//     setInputdata({ process: "", burst: "", arrival: "" });
//     processInputRef.current.focus(); // Focusing on the Process ID input field after adding a process
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="row">
//         <div className="col offset-5">
//           <h1 className="my-3" style={{ fontFamily: "Arima, system-ui" }}>
//             CPU Scheduler
//           </h1>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-12 col-md-9 offset-md-1 my-5">
//           <div className="row">
//             <div className="col-md-3 m-2">
//               <input
//                 type="number"
//                 autoComplete="off"
//                 name="process"
//                 value={inputdata.process}
//                 onChange={changehandle}
//                 placeholder="Process ID"
//                 className="form-control"
//                 ref={processInputRef} // Assigning the ref to the Process ID input field
//               />
//             </div>
//             <div className="col-md-3 m-2">
//               <input
//                 type="number"
//                 autoComplete="off"
//                 name="arrival"
//                 value={inputdata.arrival}
//                 onChange={changehandle}
//                 placeholder="Arrival Time"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-3 m-2">
//               <input
//                 type="number"
//                 autoComplete="off"
//                 name="burst"
//                 value={inputdata.burst}
//                 onChange={changehandle}
//                 placeholder="Burst Time"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-3 mx-2 m-2">
//               <button
//                 className="btn btn-success"
//                 onClick={changhandle}
//               >
//                 Add Process
//               </button>
//             </div>
//           </div>
//         </div>




//         <div className="offset-lg-1 col-lg-6 col-md-2 my-5">
//           <div className="row">
//             <div className="col-md-9">
//               <select
//                 name="algo"
//                 id="algo"
//                 value={selectedAlgorithm}
//                 onChange={(e) => setSelectedAlgorithm(e.target.value)}
//                 className="form-control"
//               >
//                 <option value="" disabled hidden>
//                   Select an algorithm
//                 </option>
//                 <option name="sjf" value="3">Shortest Job First</option>
//                 <option name="rr" value="2">Round Robin</option>
//                 <option name="fcfs" value="1">First Come First Serve</option>
//                 <option name="ps" value="4">Priority Scheduling</option>
//               </select>
//             </div>
//             <div className="col">
//               <button className="btn btn-danger" type="submit" onClick={(e) => handleCalculate(e)}>
//                 Calculate
//               </button>
//             </div>
//           </div>
//         </div>




//       </div>
//       <div className="row">
//         <div className="table-container mx-5 col-md-8">
//           <table className="table table-striped table-hover table-dark table-bordered">
//             <tbody>
//               <tr>
//                 <td>Process ID</td>
//                 <td>Arrival Time</td>
//                 <td>Burst Time</td>
//               </tr>
//               {inputarr.map((info, ind) => (
//                 <tr key={ind}>
//                   <td>{info.process}</td>
//                   <td>{info.arrival}</td>
//                   <td>{info.burst}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <button className="btn btn-danger" onClick={clearTable}>
//               Clear Table
//             </button>
//           </table>
//         </div>
//       </div>

//       <div className="row2">
//         <div className="col">
//           {isVisible && <GanntChart props={inputarr} />}
//         </div>
//       </div>
//       <div className="row3">
//         <div className="table-container mx-5 col-md-8">
//           <table className="table table-striped table-hover table-dark table-bordered">
//             <tbody>
//               <tr>
//                 <td>Process ID</td>
//                 <td>Arrival Time</td>
//                 <td>Burst Time</td>
//                 <td>Completion Time</td>
//                 <td>Waiting Time</td>
//                 <td>Turn Around Time</td>
//               </tr>
//               {inputarr.map((info, ind) => (
//                 <tr key={ind}>
//                   <td>{info.process}</td>
//                   <td>{info.arrival}</td>
//                   <td>{info.burst}</td>
//                   <td>{info.completionTime}</td>
//                   <td>{info.waitingTime}</td>
//                 </tr>
//               ))}
//               <tr>
//                 <td>Average Waiting Time</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import axios from "axios";
import GanntChart from "../GanntChart";
import bgImg from "../images/6402688_3274408.jpg";
import "./Simulator.css";

export default function App() {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    process: "",
    burst: "",
    arrival: ""
  });
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [timeQuantum, setTimeQuantum] = useState(""); // State for time quantum
  const processInputRef = useRef(null); // Ref for the Process ID input field

  const sendToController = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = inputarr.map((item) => ({
        ...item,
        algorithm: selectedAlgorithm,
        timeQuantum: selectedAlgorithm === "2" ? timeQuantum : "" // Use time quantum only if Round Robin is selected
      }));
      const response = await axios.post(
        "http://localhost:8080/redirect/main",
        dataToSend
      );
      console.log(dataToSend);
      console.log("\nForm data submitted successfully:", response.data);
      setInputarr(response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleCalculate = (e) => {
    if (e) {
      e.preventDefault();
    }
    setSelectedAlgorithm(e.target.value);
    setIsVisible(true);
    sendToController(e);
  };

  const changehandle = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const clearTable = () => {
    setInputarr([]);
  };

  const changhandle = () => {
    if (inputdata.process.trim() === "") {
      alert("Please fill Process Id");
      return;
    }
    if (inputdata.burst.trim() === "") {
      alert("Please fill burst Time");
      return;
    }
    if (inputdata.arrival.trim() === "") {
      alert("Please fill Arrival Time");
      return;
    }
    setInputarr([...inputarr, inputdata]);
    setInputdata({ process: "", burst: "", arrival: "" });
    processInputRef.current.focus(); // Focus on the Process ID input field after adding a process
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        <div className="col offset-5">
          <h1 className="my-3" style={{ fontFamily: "Arima, system-ui" }}>
            CPU Scheduler
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-9 offset-md-1 my-5">
          <div className="row">
            <div className="col-md-3 m-2">
              <input
                type="number"
                autoComplete="off"
                name="process"
                value={inputdata.process}
                onChange={changehandle}
                placeholder="Process ID"
                className="form-control"
                ref={processInputRef} // Assign the ref to the Process ID input field
              />
            </div>
            <div className="col-md-3 m-2">
              <input
                type="number"
                autoComplete="off"
                name="arrival"
                value={inputdata.arrival}
                onChange={changehandle}
                placeholder="Arrival Time"
                className="form-control"
              />
            </div>
            <div className="col-md-3 m-2">
              <input
                type="number"
                autoComplete="off"
                name="burst"
                value={inputdata.burst}
                onChange={changehandle}
                placeholder="Burst Time"
                className="form-control"
              />
            </div>
            {selectedAlgorithm === "2" && ( // Display the time quantum input only for Round Robin
              <div className="col-md-3 m-2">
                <input
                  type="number"
                  autoComplete="off"
                  name="timeQuantum"
                  value={timeQuantum}
                  onChange={(e) => setTimeQuantum(e.target.value)}
                  placeholder="Time Quantum"
                  className="form-control"
                />
              </div>
            )}
            <div className="col-md-3 mx-2 m-2">
              <button
                className="btn btn-success"
                onClick={changhandle}
              >
                Add Process
              </button>
            </div>
          </div>
        </div>
        <div className="offset-lg-1 col-lg-6 col-md-2 my-5">
          <div className="row">
            <div className="col-md-9">
              <select
                name="algo"
                id="algo"
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                className="form-control"
              >
                <option value="" disabled hidden>
                  Select an algorithm
                </option>
                <option name="sjf" value="3">Shortest Job First</option>
                <option name="rr" value="2">Round Robin</option>
                <option name="fcfs" value="1">First Come First Serve</option>
                <option name="ps" value="4">Priority Scheduling</option>
              </select>
            </div>
            <div className="col">
              <button className="btn btn-danger" type="submit" onClick={(e) => handleCalculate(e)}>
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="table-container mx-5 col-md-8">
          <table className="table table-striped table-hover table-dark table-bordered">
            <tbody>
              <tr>
                <td>Process ID</td>
                <td>Arrival Time</td>
                <td>Burst Time</td>
                {selectedAlgorithm === "2" && <td>Time Quantum</td>} {/* Display "Time Quantum" header only for Round Robin */}
              </tr>
              {inputarr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.process}</td>
                  <td>{info.arrival}</td>
                  <td>{info.burst}</td>
                  {selectedAlgorithm === "2" && <td>{timeQuantum}</td>} 
                </tr>
              ))}
            </tbody>
            <button className="btn btn-danger" onClick={clearTable}>
              Clear Table
            </button>
          </table>
        </div>
      </div>
      <div className="row2">
        <div className="col">
          {isVisible && <GanntChart props={inputarr} />}
        </div>
      </div>
      <div className="row3">
        <div className="table-container mx-5 col-md-8">
          <table className="table table-striped table-hover table-dark table-bordered">
            <tbody>
              <tr>
                <td>Process ID</td>
                <td>Arrival Time</td>
                <td>Burst Time</td>
                <td>Completion Time</td>
                <td>Waiting Time</td>
                <td>Turn Around Time</td>
              </tr>
              {inputarr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.process}</td>
                  <td>{info.arrival}</td>
                  <td>{info.burst}</td>
                  <td>{info.completionTime}</td>
                  <td>{info.waitingTime}</td>
                </tr>
              ))}
              <tr>
                <td>Average Waiting Time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

