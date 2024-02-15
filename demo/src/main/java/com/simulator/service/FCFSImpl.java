package com.simulator.service;

import java.util.List;
import com.simulator.algorithms_model.Process;
public class FCFSImpl {
	
	public void scheduleProcesses(List<Process> processesList) {
		
		int numOfProcesses =processesList.size();
		
		int [] completionTime = new int[numOfProcesses];
		int [] turnaroundTime = new int [numOfProcesses];
		int [] waitingTime = new int [numOfProcesses];
		
		//set time = 0
		int currentTime =0;
		
		for(int i=0;i< numOfProcesses;i++) {
			Process process = processesList.get(i);
			currentTime = Math.max(currentTime, process.getArrivalTime());
			
			completionTime [i] = currentTime+process.getBurstTime();
			turnaroundTime [i] = completionTime[i] - process.getArrivalTime();
			waitingTime [i] = turnaroundTime[i] - process.getBurstTime();
			
			currentTime = completionTime[i];
			
		}
		
		double totalTurnaroundTime =0 ,totalWaitingTime = 0 ;
		
		for(int i = 0 ; i<numOfProcesses ; i++) {
			totalTurnaroundTime += turnaroundTime[i];
			totalWaitingTime += waitingTime[i];
		}
		
		double avgTurnaroundTime = totalTurnaroundTime/numOfProcesses ;
		double avgWaitingTime = totalWaitingTime/numOfProcesses ;
		
		//WARN for testcase
		System.out.println("Average Turnaround Time: " + avgTurnaroundTime);
        System.out.println("Average Waiting Time: " + avgWaitingTime);
		
		
	}		
}
	
	
	       