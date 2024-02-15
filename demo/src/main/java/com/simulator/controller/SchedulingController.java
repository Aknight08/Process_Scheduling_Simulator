package com.simulator.controller;


import com.simulator.algorithms_model.Process;
import com.simulator.service.FCFSImpl;
import com.simulator.service.PriorityImpl;
import com.simulator.service.RoundRobinImpl;
import com.simulator.service.SJFImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SchedulingController {

    private final FCFSImpl fcfsImpl;
    private final SJFImpl sjfImpl;
    private final PriorityImpl priorityImpl;
    private final RoundRobinImpl roundRobinImpl;

    @Autowired
    public SchedulingController(FCFSImpl fcfsImpl, SJFImpl sjfImpl, PriorityImpl priorityImpl, RoundRobinImpl roundRobinImpl) {
        this.fcfsImpl = fcfsImpl;
        this.sjfImpl = sjfImpl;
        this.priorityImpl = priorityImpl;
        this.roundRobinImpl = roundRobinImpl;
    }

    @PostMapping("/schedule/fcfs")
    public ResponseEntity<String> scheduleFCFS(@RequestBody List<Process> processesList) {
        fcfsImpl.scheduleProcesses(processesList);
        return ResponseEntity.status(HttpStatus.OK).body("FCFS scheduling completed successfully.");
    }

    @PostMapping("/schedule/sjf")
    public ResponseEntity<String> scheduleSJF(@RequestBody List<Process> processesList) {
        sjfImpl.scheduleProcesses(processesList);
        return ResponseEntity.status(HttpStatus.OK).body("SJF scheduling completed successfully.");
    }

    @PostMapping("/schedule/priority")
    public ResponseEntity<String> schedulePriority(@RequestBody List<Process> processesList) {
        priorityImpl.scheduleProcesses(processesList);
        return ResponseEntity.status(HttpStatus.OK).body("Priority scheduling completed successfully.");
    }

    @PostMapping("/schedule/round-robin")
    public ResponseEntity<String> scheduleRoundRobin(@RequestBody List<Process> processesList) {
        roundRobinImpl.scheduleProcesses(processesList);
        return ResponseEntity.status(HttpStatus.OK).body("Round-Robin scheduling completed successfully.");
    }
}