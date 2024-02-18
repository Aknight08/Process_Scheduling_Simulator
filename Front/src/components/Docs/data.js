const details = {
  whatScheduling: `CPU Scheduling is a process of determining which process will own
        CPU for execution while another process is on hold. The main task of
        CPU scheduling is to make sure that whenever the CPU remains idle,
        the OS at least select one of the processes available in the ready
        queue for execution. The selection process will be carried out by
        the CPU scheduler. It selects one of the processes in memory that
        are ready for execution.`,

  whyScheduling: `A typical process involves both I/O time and CPU time. In a uni
  programming system like MS-DOS, time spent waiting for I/O is wasted
  and CPU is free during this time. In multi programming systems, one
  process can use CPU while another is waiting for I/O. This is
  possible only with process scheduling.`,

  objectives: [
    "Max CPU utilization [Keep CPU as busy as possible]",
    "Fair allocation of CPU.",
    `Max throughput [Number of processes that complete their
    execution per time unit]`,
    `Min turnaround time [Time taken by a process to finish
    execution]`,
    `Min waiting time [Time a process waits in ready queue]</p>`,
    `Min response time [Time when a process produces first response]`,
  ],

  terminologies: [
    `Burst Time/Execution Time : It is a time required by the process to
    complete execution. It is also called running time.`,
    `Arrival Time : when a process enters in a ready state`,
    `Finish Time : when process complete and exit from a system`,
    `Multiprogramming : A number of programs which can be present in
    memory at the same time.`,
    `Jobs : It is a type of program without any kind of user
    interaction.`,
    `User : It is a kind of program having user interaction.`,
    `Process : It is the reference that is used for both job and user.`,
    `CPU/IO burst cycle : Characterizes process execution, which
    alternates between CPU and I/O activity. CPU times are shorter
    than the time of I/O.`,
  ],

  preempt: `In Preemptive Scheduling, the tasks are mostly assigned with their
  priorities. Sometimes it is important to run a task with a higher
  priority before another lower priority task, even if the lower
  priority task is still running. The lower priority task holds for
  some time and resumes when the higher priority task finishes its
  execution.`,

  nonPreempt: `In this type of scheduling method, the CPU has been allocated to a
  specific process. The process that keeps the CPU busy will release
  the CPU either by switching context or terminating. It is the only
  method that can be used for various hardware platforms. That’s
  because it doesn’t need special hardware (for example, a timer) like
  preemptive scheduling.`,

  schedulingTypes: [
    `First Come First Serve (FCFS)`,
    `Shortest-Job-First (SJF) Scheduling`,
    `Shortest Remaining Time`,
    `Priority Scheduling`,
    `Round Robin Scheduling`,
    `Multilevel Queue Scheduling`,
  ],
};

export default details;
