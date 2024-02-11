import './Simulator.css';
import { useState } from 'react';
import GanntChart from '../GanntChart';


export default function App() {

  const [inputarr, setInputarr] = useState([])

  const [inputdata, SetInputdata] = useState({
    process: "",
    brust: "",
    arrival: ""
  })

  const [selectedAlgorithm, SetSelectedAlgorithm] = useState('');

  
  const [isVisible, setIsVisible] = useState(false);
  const handleCalculate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Add your logic for processing the selected algorithm here
    
    // Reset the form by clearing the selected algorithm
    SetSelectedAlgorithm('');
    
    // on clicking calculate gannt chart will be visible again
    setIsVisible(true);
  }

  function changehandle(e) {
    SetInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }

  let { process, brust, arrival } = inputdata;
  function changhandle() {
    // Check if any field is empty or contains only whitespace
    if (process.trim() === '') {
      alert('Please fill Process Id');
      return; // Prevent adding empty values to the array
    }

    if (brust.trim() === '') {
      alert('Please fill Brust Time');
      return; // Prevent adding empty values to the array
    }

    if (arrival.trim() === '') {
      alert('Please fill Arrival Time');
      return; // Prevent adding empty values to the array
    }

    if (parseInt(brust) === 0) {
      alert('Please enter a valid Burst Time');
      return;
    }

    if (parseInt(arrival) === 0) {
      alert('Please enter a valid Arrival Time');
      return;
    }

    setInputarr([...inputarr, { process, brust, arrival }])

//    console.log(inputdata, "input data what we enter")
    SetInputdata({ process: "", brust: "", arrival: "" })
  }

  
  //  -------------------------------------------------------------
  
  

  
  

  return (
    <div className='container' style={{height:"100%"}}>
      <div className='row'>
        <div className='col offset-5'>
          <h3 className='my-3'>CPU Scheduler</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-9 offset-md-1 my-5'>
      <div className='row'>
        <div className='col-md-3'>
          <input
            type="number"
            autoComplete='off'
            name='process'
            value={inputdata.process}
            onChange={changehandle}
            placeholder='Process ID'
            className="form-control"
          />
        </div>
        <div className='col-md-3'>
          <input
            type="number"
            autoComplete='off'
            name='brust'
            value={inputdata.brust}
            onChange={changehandle}
            placeholder='Brust Time'
            className="form-control"
          />
        </div>
        <div className='col-md-3'>
          <input
            type="number"
            autoComplete='off'
            name='arrival'
            value={inputdata.arrival}
            onChange={changehandle}
            placeholder='Arrival Time'
            className="form-control"
          />
        </div>
        <div className='col-md-3'>
          <button className='btn btn-primary' type='submit' onClick={changhandle}>
            Add Process
          </button>
        </div>
      </div>
        </div>
        <div className='col-md-2 my-5'>
      <div className='row'>
        <form className='f1 col-12' onSubmit={handleCalculate}>
          <div className='col-md-9'>
            <select
              name='algo'
              id='algo'
              value={selectedAlgorithm}
              onChange={(e) => SetSelectedAlgorithm(e.target.value)}
              className="form-control"
            >
              <option value="" disabled hidden>Select an algorithm</option>
              <option value="sjf">Shortest Job First</option>
              <option value="rr">Round Robin</option>
              <option value="fcfs">First Come First Serve</option>
              <option value="ps">Priority Scheduling</option>
            </select>
            <br />
            <button className='btn btn-primary' type='submit'>
              Calculate
            </button>
          </div>
        </form>
      </div>
        </div>
      </div>
      <div className='row'>
        <div className='table-container col-md-12'>
      <table className='table table-striped table-hover table-dark table-bordered'>
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
      <div className='row'>
        <div className='col'>
          {isVisible && <GanntChart props={inputarr} />}
        </div>
      </div>
      </div>
    </div>




  );
};



