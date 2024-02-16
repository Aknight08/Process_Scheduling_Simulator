package com.simulator.algorithms_model;

import jakarta.persistence.Entity;

@Entity
public class Process {
	
	private String algorithm;
	private int id;
	private int arrivalTime;
	private int burstTime;
	private int priority;
	private int timeSlice;
	
	
	//Constructor for fcfs,sjf and round-robin algorithms
	public Process(String algorithm,int id, int arrival_time, int burst_time, int priority) {
		super();
		this.algorithm = algorithm;
		this.id = id;
		this.arrivalTime = arrivalTime;
		this.burstTime = burstTime;
		this.timeSlice= timeSlice;
	}
	
	
	//Constructor for priority algorithm
	public Process(String algorithm,int id, int arrivalTime, int burstTime) {
		super();
		this.algorithm = algorithm;
		this.id = id;
		this.arrivalTime = arrivalTime;
		this.burstTime = burstTime;
		this.priority = priority;
	}
	
	
	
	//Input getters and setters
	public String getAlgorithm() {
		return algorithm;
	}


	public void setAlgorithm(String algorithm) {
		this.algorithm = algorithm;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(int arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public int getBurstTime() {
		return burstTime;
	}

	public void setBurstTime(int burstTime) {
		this.burstTime = burstTime;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}


	public int getTimeSlice() {
		return timeSlice;
	}


	public void setTimeSlice(int timeSlice) {
		this.timeSlice = timeSlice;
	}
	

	
	
	
	

}
