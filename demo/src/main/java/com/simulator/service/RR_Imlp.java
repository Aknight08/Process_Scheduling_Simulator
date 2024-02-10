package com.simulator.service;

import java.util.ArrayList;
import com.simulator.algorithms_model.Process;
public class RR_Imlp {
		
	public void scheduleProcess(ArrayList<Process> processesList) {
		
			int numOfProcesses = processesList.size();
			int timeSlice = 0 ;// if timeSlice is provided by user use other timeSlice
			int[] remainingTime = new int [numOfProcesses];
			int currentTime = 0;
			
			int [] completionTime = new int[numOfProcesses];
			int [] turnaroundTime = new int [numOfProcesses];
			int [] waitingTime = new int [numOfProcesses];
			
			
			
			for(int i=0 ; i<numOfProcesses ; i++) {
				remainingTime[i] = processesList.get(i).getBurstTime();
			}
			
			while(true) {
				boolean done = true ;
				for (int i = 0 ; i< numOfProcesses ;i++) {
					if(remainingTime[i]>0) {
						done = false ;
						//if user provides timeSlice then use this if() to get the timeSlice
						//if(remainingTime[i]>processesList.get(i).getTimeSlice()) {
						if(remainingTime[i]>timeSlice) {	
							currentTime += timeSlice ;
							remainingTime[i] -= timeSlice;	
						}
						else {
							currentTime += remainingTime[i];
							remainingTime[i]=0;
							completionTime[i] = currentTime;
							turnaroundTime[i] = completionTime[i] - processesList.get(i).getArrivalTime();
							waitingTime[i] = turnaroundTime[i] - processesList.get(i).getBurstTime();
							
						}
					}
				}
				if (done)
					break;
			}
			
			double totalTurnaroundTime = 0, totalWaitingTime = 0;	
			
			for(int i=0 ; i<numOfProcesses ; i++) {
				totalTurnaroundTime += turnaroundTime[i];
				totalWaitingTime += waitingTime[i];
			}
			double avgTurnaroundTime = totalTurnaroundTime/numOfProcesses ;
			double avgWaitingTime = totalWaitingTime / numOfProcesses;
			
			
			//WARN for testcase
			System.out.println("Average Turnaround Time: " + avgTurnaroundTime);
	        System.out.println("Average Waiting Time: " + avgWaitingTime);
			
				
	}
}
