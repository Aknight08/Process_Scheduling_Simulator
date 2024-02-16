package com.simulator.service;

import java.util.List;


import com.simulator.algorithms_model.Process;
import com.simulator.algorithms_model.ProcessSimulatorResult;

public interface Scheduler {
	

	
	ProcessSimulatorResult scheduleProcesses(List<Process> processesList);
}
