import "./Simulator.css";
import { useState } from "react";
import GanntChart from "../GanntChart";
import bgImg from "../images/6402688_3274408.jpg";

export default function App() {
  const [inputarr, setInputarr] = useState([]);

  const [inputdata, SetInputdata] = useState({
    process: "",
    brust: "",
    arrival: "",
  });

  const [selectedAlgorithm, SetSelectedAlgorithm] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const handleCalculate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Reset the form by clearing the selected algorithm
    SetSelectedAlgorithm("");

    // on clicking calculate gannt chart will be visible again
    setIsVisible(true);
  };

  function changehandle(e) {
    SetInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { process, brust, arrival } = inputdata;
  function changhandle() {
    // Check if any field is empty or contains only whitespace
    if (process.trim() === "") {
      alert("Please fill Process Id");
      return; // Prevent adding empty values to the array
    }

    if (brust.trim() === "") {
      alert("Please fill Brust Time");
      return; // Prevent adding empty values to the array
    }

    if (arrival.trim() === "") {
      alert("Please fill Arrival Time");
      return; // Prevent adding empty values to the array
    }

    if (parseInt(brust) === 0) {
      alert("Please enter a valid Burst Time");
      return;
    }

    if (parseInt(arrival) === 0) {
      alert("Please enter a valid Arrival Time");
      return;
    }

    setInputarr([...inputarr, { process, brust, arrival }]);

    SetInputdata({ process: "", brust: "", arrival: "" });
  }

  //  -------------------------------------------------------------

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
          <h1
            className="my-3"
            style={{ fontFamily: "Arima, system-ui"}}
          >
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
              />
            </div>
            <div className="col-md-3 m-2">
              <input
                type="number"
                autoComplete="off"
                name="brust"
                value={inputdata.brust}
                onChange={changehandle}
                placeholder="Brust Time"
                className="form-control"
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
            <div className="col-md-3 mx-2 m-2">
              <button
                className="btn btn-success"
                type="submit"
                onClick={changhandle}
              >
                Add Process
              </button>
            </div>
          </div>
        </div>
        <div className="offset-lg-1 col-lg-6 col-md-2 my-5">
          <div className="row">
            <form className="col-12" onSubmit={handleCalculate}>
              <div className="col-md-9">
                <select
                  name="algo"
                  id="algo"
                  value={selectedAlgorithm}
                  onChange={(e) => SetSelectedAlgorithm(e.target.value)}
                  className="form-control"
                >
                  <option value="" disabled hidden>
                    Select an algorithm
                  </option>
                  <option value="sjf">Shortest Job First</option>
                  <option value="rr">Round Robin</option>
                  <option value="fcfs">First Come First Serve</option>
                  <option value="ps">Priority Scheduling</option>
                </select>
                <br />
                <button className="btn btn-danger" type="submit">
                  Calculate
                </button>
                {/* ---------------------------------- */}

                {/* ------------------------------------------- */}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="table-container mx-3 col-md-12">
          <table className="table table-striped table-hover table-dark table-bordered">
            <tbody>
              <tr>
                <td>Process ID</td>
                <td>Brust Time</td>
                <td>Arrival Time</td>
              </tr>
              {inputarr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.process}</td>
                  <td>{info.brust}</td>
                  <td>{info.arrival}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {isVisible && <GanntChart props={inputarr} />}
        </div>
      </div>
    </div>
  );
}
