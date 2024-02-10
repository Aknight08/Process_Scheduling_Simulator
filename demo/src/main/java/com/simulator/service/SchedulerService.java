package com.simulator.service;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SchedulerService {
//	void runFCFS(List<Process> process);
//	void runSJF(List<Process> process);
//	void runRR(List<Process> process);
//	void runPS(List<Process> process);


	private ProcessRepository processRepository;
	private FCFSImpl fcfsAlgo;
	
	
	
	public SchedulerService(ProcessRepository processRepository, FCFSImpl fcfsAlgo) {
		super();
		this.processRepository = processRepository;
		this.fcfsAlgo = fcfsAlgo;
	}
	
	public List<Process> scheduleProcess(List<Process> processes,String algorithm){
		switch(algorithm) {
		case "FCFS":
			void FCFSImpl(List<Process>processes);
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
