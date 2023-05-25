// write your DOM code here.


// DOM element references

const passengerQueCount = document.querySelector(".passenger_queue_count");
const joinButton = document.querySelector(".join_queue");
const leaveButton = document.querySelector(".leave_queue"); 
const taxiQueCount = document.querySelector(".taxi_queue_count");
const joinTaxiQue = document.querySelector(".join_taxi_queue"); 
const departButton = document.querySelector(".depart")

// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

joinButton.addEventListener("click", function(){
    passengerQueCount.innerHTML = Number(passengerQueCount.innerHTML) + 1
    

});

leaveButton.addEventListener("click", function(){
    passengerQueCount.innerHTML = Number(passengerQueCount.innerHTML) - 1


});

joinTaxiQue.addEventListener("click", function(){
    taxiQueCount.innerHTML = Number(taxiQueCount.innerHTML) + 1

});

departButton.addEventListener("click", function(){
    taxiQueCount.innerHTML = Number(taxiQueCount.innerHTML) - 1

});
