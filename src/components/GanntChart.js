import React from "react";

export default function GanntChart({props})   {

    
    return(
        <div>

            {console.log(props)}
            <div className='table-container'>
                    <table className='table table-striped table-hover table-dark table-bordered' >
                        <tbody>
                        <tr>
                            <td>Process ID</td>
                            
                        </tr>
                        <tr>
                            <td>Completion Time</td>
                        </tr>
                        <tr>
                            <td>{props[0].process}</td>
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