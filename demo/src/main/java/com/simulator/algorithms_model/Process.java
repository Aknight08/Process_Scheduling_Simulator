package com.simulator.algorithms_model;

public class Process {
	private String name;
	private int arrival_time;
	private int burst_time;
	private int priority;
	
	
	//Constructor for fcfs,sjf and round-robin algorithms
	public Process(String name, int arrival_time, int burst_time, int priority) {
		super();
		this.name = name;
		this.arrival_time = arrival_time;
		this.burst_time = burst_time;
		this.priority = priority;
	}
	
	
	//Constructor for priority algorithm
	public Process(String name, int arrival_time, int burst_time) {
		super();
		this.name = name;
		this.arrival_time = arrival_time;
		this.burst_time = burst_time;
	}
	
	
	//Input getters and setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getArrival_time() {
		return arrival_time;
	}

	public void setArrival_time(int arrival_time) {
		this.arrival_time = arrival_time;
	}

	public int getBurst_time() {
		return burst_time;
	}

	public void setBurst_time(int burst_time) {
		this.burst_time = burst_time;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	
	
	
	

}
