#!bin/usr/node 

exports.incrementAndCall = function incrementAndCall(number, theFunction) {
	// Increment the number
	number++;
  
	// Call the provided function
	theFunction(number);
  }