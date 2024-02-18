import React from "react";

export default function GanntChart({props})   {
    
    return(
        <div className="row">
            <div className="col">
        <div className='table-container'>
          GANTT CHART
          <table className='table table-striped table-hover table-dark table-bordered ' >
            <tbody>
              <tr>
                <td>Process ID</td>
                {props.map((item, index) => <td key={index}>P{item.process}</td>)}
              </tr>
              <tr>
                <td>Completion Time</td>
                {props.map((item, index) => <td key={index}>{item.completionTime}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
            </div>
        </div>
    );
}



