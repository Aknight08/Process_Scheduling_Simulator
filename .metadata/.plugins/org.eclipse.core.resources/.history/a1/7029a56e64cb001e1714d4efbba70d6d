package com.simulator.service;
import com.simulator.algorithms_model.Process;
import java.util.Comparator;

public class BurstTimeComparator implements Comparator<Process>{
	@Override
	public int compare (Process p1 ,Process p2) {
		if (p1.getBurst_time() == p2.getBurst_time()) 
			return 0 ;
		else if (p1.getBurst_time() > p2.getBurst_time())
			return 1 ;
		else 
			return -1;
	}
	
}
