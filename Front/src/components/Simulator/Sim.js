import { useState } from "react";
import axios from "axios";
import GanntChart from "../GanntChart";
import bgImg from "../images/6402688_3274408.jpg";
import "./Simulator.css";

export default function App() {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    process: "",
    brust: "",
    arrival: "",
  });
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const sendToController = async () => {
    try {
      const response = await axios.post("http://localhost:8080/endpoint", inputarr);
      console.log("\nForm data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (inputarr.length === 0) {
      alert("Please add at least one process before calculating.");
      return;
    }
    setSelectedAlgorithm("");
    setIsVisible(true);
    sendToController();
  };

  const changehandle = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const changhandle = () => {
    const { process, brust, arrival } = inputdata;

    if (process.trim() === "" || brust.trim() === "" || arrival.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    if (parseInt(brust) === 0 || parseInt(arrival) === 0) {
      alert("Please enter valid numbers for Brust Time and Arrival Time");
      return;
    }

    setInputarr([...inputarr, { process, brust, arrival, algorithm: selectedAlgorithm }]);
    setInputdata({ process: "", brust: "", arrival: "" });
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
        <form className="col-12">
          <div className="col-12 col-md-9 offset-md-1 my-5">
            <div className="row">
              {/* Input fields */}
            </div>
          </div>
          <div className="offset-lg-1 col-lg-6 col-md-2 my-5">
            <div className="row">
              <div className="col-md-9">
                <button className="btn btn-danger" type="submit" onClick={handleCalculate}>
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </form>
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
