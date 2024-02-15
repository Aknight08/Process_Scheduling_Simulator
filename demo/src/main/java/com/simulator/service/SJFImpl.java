package com.simulator.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.simulator.algorithms_model.Process; 

public class SJFImpl {
	
	public void scheduleProcesses(List<Process> processesList) {
		int numOfProcesses =processesList.size();
		//set time = 0
		int currentTime =0;
		
		
		int [] completionTime = new int[numOfProcesses];
		int [] turnaroundTime = new int [numOfProcesses];
		int [] waitingTime = new int [numOfProcesses];
		
		
		//sort processes according to arrival time
		Collections.sort(processesList,new Comparator<Process>() {
			// 
			@Override
			public int compare(Process p1 , Process p2) {
				int result = Integer.compare(p1.getArrivalTime(), p2.getArrivalTime());
				if (result == 0) {
					result = Integer.compare(p1.getBurstTime(), p2.getBurstTime());
				}
			
				return result;
			}
		});
		
		ArrayList<Process> completedProList = new ArrayList<>();
		
		while(!processesList.isEmpty()) {
			Process currentProcess = processesList.remove(0);
			currentTime += currentProcess.getBurstTime() ;
			completedProList.add(currentProcess);
		}
		
		for (int i =0; i<completedProList.size();i++) {
			Process p =completedProList.get(i);
			completionTime[i] =currentTime;
			turnaroundTime[i]= completionTime[i]-p.getBurstTime();
			waitingTime[i] = turnaroundTime[i] - p.getBurstTime();
			
		}
		
		double totalWaitingTime = 0, totalTurnaroundTime = 0;
		
		
		for (int i =0; i<completedProList.size();i++) {
		 totalWaitingTime += waitingTime[i];
		 totalTurnaroundTime += turnaroundTime [i];
		}
		
		double avgTurnaroundTime = totalTurnaroundTime / numOfProcesses ;
		double avgWaitTime = totalWaitingTime / numOfProcesses ;
		
		//WARN for testcase
//		System.out.println("Average Turnaround Time: " + avgTurnaroundTime);
//        System.out.println("Average Waiting Time: " + avgWaitingTime);
	}
		
}