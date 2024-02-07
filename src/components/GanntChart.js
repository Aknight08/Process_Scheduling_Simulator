import React from "react";

export default function GanntChart({props})   {

    function getEachProcess(item){
        return (
            <td>{item}.process</td>
        );
    }
    
    return(
        <div>

            {console.log(props)}
            <div className='table-container'>
                    <table className='table table-striped table-hover table-dark table-bordered' >
                        <tbody>
                        <tr>
                            <td>Process ID</td>
                            {props.map((item) => <td>{item.process}</td>)}
                            
                        </tr>
                        <tr>
                            <td>Completion Time</td>
                        </tr>
                        
                                                
                        {    /*
                            inputarr.map(
                            (info, ind) => {
                                return (
                                <tr key={props.process}>
                                    <td>{props.process}</td>
                                    <td>{props.brust}</td>
                                    <td>{props.arrival}</td>
                                </tr>
                                )
                            }
                            )
                            */
                        }

                            
                                {/* <tr key={props.process}>
                                    <td>{props.process}</td>
                                    <td>{props.brust}</td>
                                    <td>{props.arrival}</td>
                                </tr> */}
                        
                        
                        </tbody>
                    </table>
                    </div>


        </div>
    );
}