package com.simulator.algorithms_model;

import java.util.ArrayList;

public class ProcessList {
	private ArrayList<Process> processList= new ArrayList<Process>();
	
	public ProcessList(ArrayList<Process> processList) {
		
		this.processList = processList;
	}
	
	public void addProcess(Process process) {
		processList.add(process);
	}

	public ArrayList<Process> getProcessList() {
		return processList;
	}


	public void setProcessList(ArrayList<Process> processList) {
		this.processList = processList;
	}
	
}
