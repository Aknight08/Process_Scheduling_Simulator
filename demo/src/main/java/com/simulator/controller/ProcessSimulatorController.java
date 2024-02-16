package com.simulator.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.simulator.algorithms_model.Process;
import com.simulator.algorithms_model.ProcessSimulatorResult;
import com.simulator.service.SchedulerService;

@RestController
public class ProcessSimulatorController {
		
	private final SchedulerService schedulerService;
	//@PostMapping(value="")
	
	public ProcessSimulatorController(SchedulerService schedulerService) {
		this.schedulerService = schedulerService;
		
	}
	

	//@RequestMapping(value="/api", method= RequestMethod.POST )
	@PostMapping(value="/simulator")
	public ProcessSimulatorResult scheduleProcesses(@RequestBody List<Process>processesList,@RequestParam("algorithm")String algorithm){
		return schedulerService.scheduleProcesses(processesList,algorithm);
	}
	
	@ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<String> handleException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
    }
	
	

}
