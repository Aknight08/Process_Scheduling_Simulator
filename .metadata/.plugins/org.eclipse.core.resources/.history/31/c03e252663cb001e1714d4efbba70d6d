package com.simulator.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simulator.service.SchedulerService;

@RestController
@RequestMapping(value="/api", method= RequestMethod.POST )
public class ProcessSimulatorController {
	
	private final SchedulerService schedulerService;
	//@PostMapping(value="")
	public ProcessSimulatorController(SchedulerService schedulerService) {
		super();
		this.schedulerService = schedulerService;
		
	}


	@PostMapping(value="/simulator")
	public scheduleProcesses(@RequestBody ScheduleRequest  request,@RequestParam String algorithm)
	List<Process> processes =request.getProcesses();
	
	public ResponseEntity<List<Process>> scheduleProcess(@RequestBody List<Process> processes,@RequestParam String algorithm) {
		List<Process>scheduleProcesses = SchedulerService.scheduleProcesses(,algorithm);
		return ResponseEntity.ok(scheduleProcesses);
		}
	}

}
