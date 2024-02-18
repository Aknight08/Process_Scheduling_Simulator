package com.process.scheduling.api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.process.scheduling.api.model.ProcessModel;

@Controller
public class PriorityJobFirst {

	@PostMapping("/priority_job")
	public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processDataList) {
        // Process the received data here
        for (ProcessModel processData : processDataList) {
            // Do something with each process data
            
        }

        return processDataList;
    }
}
