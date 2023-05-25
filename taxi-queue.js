function TaxiQueue() {
	let passengerQueueCount = 0;
	let taxiQueueCount = 0;
  
	function joinQueue() {
	  passengerQueueCount += 1;
	}
  
	function leaveQueue() {
	  passengerQueueCount -= 1;
	  if (passengerQueueCount < 0) {
		passengerQueueCount = 0;
	  }
	}
  
	function joinTaxiQueue() {
	  taxiQueueCount += 1;
	}
  
	function queueLength() {
	  return passengerQueueCount;
	}
  
	function taxiQueueLength() {
	  return taxiQueueCount;
	}
  
	function taxiDepart() {
	  if (passengerQueueCount >= taxiQueueCount) {
		passengerQueueCount -= taxiQueueCount;
		taxiQueueCount = 0;
	  } else {
		taxiQueueCount -= passengerQueueCount;
		passengerQueueCount = 0;
	  }
	}
  
	return {
	  joinQueue,
	  leaveQueue,
	  joinTaxiQueue,
	  queueLength,
	  taxiQueueLength,
	  taxiDepart,
	};
  }
  