#!bin/usr/node 

exports.addMeMaybe = function (number, theFunction) {
	// Increment the number
	number++;
  
	// Call the provided function
	theFunction(number);
  }