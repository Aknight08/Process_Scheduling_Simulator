import React from "react";

export default function GanntChart({props})   {
    
    return(
        <div className="row">
            <div className="col">
                <div className='table-container'>
                GANTT CHART
                    <table className='table table-striped table-hover table-dark table-bordered' >
                        <tbody>
                            
                        <tr>
                            <td>Process ID</td>
                            {props.map((item) => <td>P{item.process}</td>)}
                            
                        </tr>
                        <tr>
                            <td>Completion Time</td>
                        </tr>
                        
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}