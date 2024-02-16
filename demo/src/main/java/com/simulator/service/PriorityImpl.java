package com.simulator.service;


	
import com.simulator.algorithms_model.Process;
import com.simulator.algorithms_model.ProcessSimulatorResult;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public abstract class PriorityImpl implements Scheduler {
		@Override
	    public ProcessSimulatorResult scheduleProcesses(List<Process> processesList) {
	        // Sort processes based on priority (lower priority value means higher priority)
	        processesList.sort(Comparator.comparingInt(Process::getPriority));

	        int numOfProcesses = processesList.size();

	        int[] completionTime = new int[numOfProcesses];
	        int[] turnaroundTime = new int[numOfProcesses];
	        int[] waitingTime = new int[numOfProcesses];

	        // Set time = 0
	        int currentTime = 0;

	        for (int i = 0; i < numOfProcesses; i++) {
	            Process process = processesList.get(i);
	            currentTime = Math.max(currentTime, process.getArrivalTime());

	            completionTime[i] = currentTime + process.getBurstTime();
	            turnaroundTime[i] = completionTime[i] - process.getArrivalTime();
	            waitingTime[i] = turnaroundTime[i] - process.getBurstTime();

	            currentTime = completionTime[i];
	        }

	        double totalTurnaroundTime = 0, totalWaitingTime = 0;

	        for (int i = 0; i < numOfProcesses; i++) {
	            totalTurnaroundTime += turnaroundTime[i];
	            totalWaitingTime += waitingTime[i];
	        }

	        double avgTurnaroundTime = totalTurnaroundTime / numOfProcesses;
	        double avgWaitingTime = totalWaitingTime / numOfProcesses;

	        // Display average turnaround time and average waiting time
	        System.out.println("Average Turnaround Time: " + avgTurnaroundTime);
	        System.out.println("Average Waiting Time: " + avgWaitingTime);
	   
	        ProcessSimulatorResult result = new ProcessSimulatorResult(processesList, avgWaitingTime, avgWaitingTime, avgWaitingTime, avgWaitingTime);
	        result.setProcessesList(processesList);
	        result.setAvgTurnaroundTime(avgTurnaroundTime);
	        result.setAvgWaitingTime(avgWaitingTime);
	        result.setTotalTurnaroundTime(totalTurnaroundTime);;
	        result.setTotalWaitingTime(totalWaitingTime);
	        
	        return result ;
	    }
	}


