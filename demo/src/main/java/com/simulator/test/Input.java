package com.simulator.test;
import java.util.*;

import com.simulator.algorithms_model.Process;
import com.simulator.algorithms_model.ProcessList;


public class Input {
	//public Process(String algorithm,String name, int arrival_time, int burst_time, int priority)
	Process process1=new Process("fcfs","P1",1,7);
	Process process2=new Process("fcfs","P2",2,5);
	Process process3=new Process("fcfs","P3",3,1);
	Process process4=new Process("fcfs","P4",4,2);
	Process process5=new Process("fcfs","P5",5,8);
	
	ArrayList<Process> pArray =new ArrayList<Process>();
	pArray.add(process1);
	pArray.add(process2);
	pArray.add(process3);
	pArray.add(process4);
	pArray.add(process5);

	ProcessList plist= new ProcessList(pArray);
}  
