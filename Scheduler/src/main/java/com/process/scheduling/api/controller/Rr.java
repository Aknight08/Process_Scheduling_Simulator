package com.process.scheduling.api.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.process.scheduling.api.model.ProcessModel;

@Controller
public class Rr {

	@PostMapping("/round_robin")
	public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
        /*
		// Process the received data here
        for (ProcessModel processData : processDataList) {
            // Do something with each process data
            
        }
		*/
		
		// getting the size of the List of processes
				int numOfProcesses = processesList.size();
				
				// if timeSlice is provided by user use other timeSlice
				int timeSlice = 0 ;
					
				int[] remainingTime = new int [numOfProcesses];
				int currentTime = 0;
					
				int [] completionTime = new int[numOfProcesses];
				int [] turnaroundTime = new int [numOfProcesses];
				int [] waitingTime = new int [numOfProcesses];
					
					
					
				for(int i=0 ; i<numOfProcesses ; i++) {
					remainingTime[i] = processesList.get(i).getBurst();
				}
					
				while(true) {
					boolean done = true ;
					for (int i = 0 ; i< numOfProcesses ;i++) {
						if(remainingTime[i]>0) {
							done = false ;
							//if user provides timeSlice then use this if() to get the timeSlice
							if(remainingTime[i]>processesList.get(i).getTimeSlice()) {
								if(remainingTime[i]>timeSlice) {	
									currentTime += timeSlice ;
									remainingTime[i] -= timeSlice;	
								}
								else {
									currentTime += remainingTime[i];
									remainingTime[i]=0;
									completionTime[i] = currentTime;
									turnaroundTime[i] = completionTime[i] - processesList.get(i).getArrival();
									waitingTime[i] = turnaroundTime[i] - processesList.get(i).getBurst();
					
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
					
					return processesList;	
			}
		
		
		
//        return processesList;
    }
}
