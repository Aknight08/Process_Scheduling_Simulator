import React from 'react'

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Docs() {
  
    useEffect(() => {
      // Initialize AOS once the script is loaded
      
        Aos.init();
      
    }, []);

  return (
    <div>
      <div>
        <h1 className='text text-center my-5'>Documentation</h1>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div class="card container bg-light my-5" data-aos="zoom-in">
        {/* <img class="card-img-top" src="#" alt="Title" /> */}
        <div class="card-body ">
          <h4 class="card-title text-center my-3">What is CPU Scheduling?</h4>
          <p class="card-text my-4">
            CPU Scheduling is a process of determining which process will own CPU for execution while another process is on hold. The main task of CPU scheduling is to make sure that whenever the CPU remains idle, the OS at least select one of the processes available in the ready queue for execution. The selection process will be carried out by the CPU scheduler. It selects one of the processes in memory that are ready for execution.
            </p>
        </div>
      </div>
      
      <div class="card container bg-light my-5" data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body ">
          <h4 class="card-title text-center my-3">Why CPU Scheduling?</h4>
          <p class="card-text my-4">A typical process involves both I/O time and CPU time. In a uni programming system like MS-DOS, time spent waiting for I/O is wasted and CPU is free during this time. In multi programming systems, one process can use CPU while another is waiting for I/O. This is possible only with process scheduling.
          </p>
          <h5>Objectives of Process Scheduling Algorithm</h5>
          <ul>
            <li><p>Max CPU utilization [Keep CPU as busy as possible]</p></li>
            <li><p>Fair allocation of CPU.</p></li>
            <li><p>Max throughput [Number of processes that complete their execution per time unit]</p></li>
            <li><p>Min turnaround time [Time taken by a process to finish execution]</p></li>
            <li><p>Min waiting time [Time a process waits in ready queue]</p></li>
            <li><p>Min response time [Time when a process produces first response]</p></li>
          </ul>
        </div>
      </div>
      
      <div class="card container bg-light " data-aos="zoom-in" > {/*data-aos-duration="2000"*/}
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">Important CPU scheduling Terminologies</h4>
          <ul>
            <li>Burst Time/Execution Time: It is a time required by the process to complete execution. It is also called running time.</li>
            <li>Arrival Time: when a process enters in a ready state</li>
            <li>Finish Time: when process complete and exit from a system</li>
            <li>Multiprogramming: A number of programs which can be present in memory at the same time.</li>
            <li>Jobs: It is a type of program without any kind of user interaction.</li>
            <li>User: It is a kind of program having user interaction.</li>
            <li>Process: It is the reference that is used for both job and user.</li>
            <li>CPU/IO burst cycle: Characterizes process execution, which alternates between CPU and I/O activity. CPU times are shorter than the time of I/O.</li>
          </ul>
        </div>
      </div>
      
      <div class="card container bg-light my-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">Types of CPU Scheduling</h4>
          <p class="card-text my-3">There is mainly two major types of CPU Scheduling which is listed below.There is sub-types of this algorithm also. we have discussed all algorithm in details below.</p>
          <ul>
            <li>Preemptive Algorithm</li>
            <li>Non Preemptive Algorithm</li>
          </ul>
          <h5>Preemptive Algorithm</h5>
          <p>In Preemptive Scheduling, the tasks are mostly assigned with their priorities. Sometimes it is important to run a task with a higher priority before another lower priority task, even if the lower priority task is still running. The lower priority task holds for some time and resumes when the higher priority task finishes its execution.</p>
          <h5>Non Preemptive Algorithm</h5>
          <p>
          In this type of scheduling method, the CPU has been allocated to a specific process. The process that keeps the CPU busy will release the CPU either by switching context or terminating. It is the only method that can be used for various hardware platforms. That’s because it doesn’t need special hardware (for example, a timer) like preemptive scheduling.
          </p>
        </div>
      </div>
      
      <div class="card container bg-light my-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">Types of CPU scheduling Algorithm</h4>
          <h5>There are mainly six types of process scheduling algorithm</h5>
          <ul>
            <li>First Come First Serve (FCFS)</li>
            <li>Shortest-Job-First (SJF) Scheduling</li>
            <li>Shortest Remaining Time</li>
            <li>Priority Scheduling</li>
            <li>Round Robin Scheduling</li>
            <li>Multilevel Queue Scheduling</li>
          </ul>
        </div>
      </div>
      


    </div>
  )
}

