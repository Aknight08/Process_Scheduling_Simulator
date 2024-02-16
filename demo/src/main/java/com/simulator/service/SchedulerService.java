package com.simulator.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.simulator.algorithms_model.Process;
import com.simulator.algorithms_model.ProcessSimulatorResult;

@Service
public class SchedulerService {
//	void runFCFS(List<Process> process);
//	void runSJF(List<Process> process);
//	void runRR(List<Process> process);
//	void runPS(List<Process> process);


	
	private FCFSImpl fcfsImpl;
	private SJFImpl sjfImpl;
	private RRImlp rrImpl;
	private PriorityImpl priorityImpl;
	
	
	
	public SchedulerService(FCFSImpl fcfsImpl, SJFImpl sjfImpl, RRImlp rrImpl, PriorityImpl priorityImpl) {
		super();
		this.fcfsImpl = fcfsImpl;
		this.sjfImpl = sjfImpl;
		this.rrImpl = rrImpl;
		this.priorityImpl = priorityImpl;
	}

	public ProcessSimulatorResult scheduleProcesses (List<Process>processesList,String algorithm) {
		
		switch(algorithm) {
		case "FCFS":
			return fcfsImpl.scheduleProcesses(processesList);
		case "SJF":
			return sjfImpl.scheduleProcesses(processesList);
		case "Round-Robin":
			return rrImpl.scheduleProcesses(processesList);
		case "Priority":
			return priorityImpl.scheduleProcesses(processesList);
		
		default:
			throw new IllegalArgumentException("Invalid choice");
		}
	}

	
//	public List<Process> runFCFS(processexpl);
//	
//	
//	public List<Process> runSJF();
//	
//	public List<Process> runRR();
//	
//	
//	public List<Process> runPS();
//	
	
	
}
