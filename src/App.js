import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import GanntChart from './components/GanntChart';

function App() {

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
/*
    if (brust === arrival) {
      alert('Burst Time and Arrival Time should not be the same or Zero');
      return;
    }
*/
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


  // function changhandle2(){
  //   console.log("object store in Array",inputarr)
  // }
  //  -------------------------------------------------------------
  
  

  
  

  return (
    <div>
      <nav
        class="navbar bg-dark"
      >
        <div class="container">
          <a class="navbar-brand text-light" href="https://ravipatel1309.github.io/CPUScheduler/" target="_blank">CPU Scheduling</a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>

      
      <div className="App">

        <input type="text" autoComplete='off' name='process' value={inputdata.process} onChange={changehandle} placeholder='Process ID' 
        style={{
          width: '150px',  // Set the desired width
          textAlign:'left',  // Center-align the text
          padding: '5px', // Add padding for better appearance
          marginRight: '10px'  
        }}/>
        <input type="text" autoComplete='off' name='brust' value={inputdata.brust} onChange={changehandle} placeholder='Brust Time' 
        style={{
          width: '150px',  // Set the desired width
          textAlign:'left',  // Center-align the text
          padding: '5px',
          marginRight: '10px'  // Add padding for better appearance
        }}/>
        <input type="text" autoComplete='off' name='arrival' value={inputdata.arrival} onChange={changehandle} placeholder='Arrival Time' 
        style={{
          width: '150px',  // Set the desired width
          textAlign:'left',  // Center-align the text
          padding: '5px',
          marginRight: '10px'  // Add padding for better appearance
        }}/>

        <button className='btn btn-primary ' type='submit' onClick={changhandle} style={{padding:'8px'}}>
          Add Process
        </button>
        </div>
        
        {/* <button className='btn btn-info' onClick={changhandle2}>Check array in console</button> */}

        <form className='f1'  onSubmit={handleCalculate}>
        <div className='col-9'>
          
            <select name='algo' id='algo' value={selectedAlgorithm} onChange={(e) => SetSelectedAlgorithm(e.target.value)} style={{padding:'8px'}}>
              <option value="" disabled hidden
              >Select an algorithm</option>
              <option value="sjf">Shortest Job First</option>
              <option value="rr">Round Robin</option>
              <option value="fcfs">First Come First Serve</option>
              <option value="ps">Priority Scheduling</option>
            </select><br></br>

            {/*   Page is getting reloaded on click need to just execute the function on click        */}
            <button className='btn btn-primary' type='submit' style={{marginTop:'50px'}} >
              Calculate
            </button>
          
        </div>
        </form>

        

        <div className='table-container'>
          <table className='table table-striped table-hover table-dark table-bordered' >
            <tbody>
              <tr>
                <td>Process ID</td>
                <td>Brust Time</td>
                <td>Arrival Time</td>
              </tr>

              {
                inputarr.map(
                  (info, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{info.process}</td>
                        <td>{info.brust}</td>
                        <td>{info.arrival}</td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>

    {/* {console.log(inputdata)}
    {console.log(inputarr)} */}
        {isVisible && <GanntChart props={inputarr} />}     

      
    </div>
  );
};




export default App;
