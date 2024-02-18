import React from 'react'

export default function Table() {
  return (
    <div className="row">
          <div className="table-container mx-3 col-md-12">
            <table className="table table-striped table-hover table-dark table-bordered">
                <thead>
                <td>Process ID</td>
                  <td>Burst Time</td>
                  <td>Arrival Time</td>
                  <td>Turn Around Time</td>
                  <td>Waiting Time</td>
                  <td>Completion Time</td>  
                </thead>
              <tbody>
                <tr>
                  {/* <td>Process ID</td>
                  <td>Burst Time</td>
                  <td>Arrival Time</td>
                  <td>Turn Around Time</td>
                  <td>Waiting Time</td>
                  <td>Completion Time</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  )
}
