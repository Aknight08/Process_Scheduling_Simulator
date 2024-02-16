package com.simulator.algorithms_model;

import java.util.List;

public class ProcessSimulatorResult {
	
	private List<Process> processesList;
	private double avgTurnaroundTime ;
	private double avgWaitingTime ;
	private double totalTurnaroundTime;
	private double totalWaitingTime ;
	
	public ProcessSimulatorResult(List<Process> processesList, double avgTurnaroundTime, double avgWaitingTime,
			double totalTurnaroundTime, double totalWaitingTime) {
		super();
		this.processesList = processesList;
		this.avgTurnaroundTime = avgTurnaroundTime;
		this.avgWaitingTime = avgWaitingTime;
		this.totalTurnaroundTime = totalTurnaroundTime;
		this.totalWaitingTime = totalWaitingTime;
	}

	public List<Process> getProcessesList() {
		return processesList;
	}

	public double getAvgTurnaroundTime() {
		return avgTurnaroundTime;
	}

	public double getAvgWaitingTime() {
		return avgWaitingTime;
	}

	public double getTotalTurnaroundTime() {
		return totalTurnaroundTime;
	}

	public double getTotalWaitingTime() {
		return totalWaitingTime;
	}

	public void setProcessesList(List<Process> processesList) {
		this.processesList = processesList;
	}

	public void setAvgTurnaroundTime(double avgTurnaroundTime) {
		this.avgTurnaroundTime = avgTurnaroundTime;
	}

	public void setAvgWaitingTime(double avgWaitingTime) {
		this.avgWaitingTime = avgWaitingTime;
	}

	public void setTotalTurnaroundTime(double totalTurnaroundTime) {
		this.totalTurnaroundTime = totalTurnaroundTime;
	}

	public void setTotalWaitingTime(double totalWaitingTime) {
		this.totalWaitingTime = totalWaitingTime;
	}

}
