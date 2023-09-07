#!bin/usr/node 

exports.incrementAndCall = function (number, theFunction) {
	// Increment the number
	number++;
  
	// Call the provided function
	theFunction(number);
  }