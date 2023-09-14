#!/usr/bin/node

/**
 * log to the console the start of the execution queue
console.log('Start of the execution queue');
// a setTimeout to execute the loop asynchronously
setTimeout(function(){
	for (i = 1; i <= 100; i++) {
		console.log(i)		
	}
	console.log('Final code block to be executed')
}, 0);
// Loging to the console, the end of looping
console.log('End of the loop printing')

 */


console.log("Start of the execution queue");

// Using a loop that iterates 100 times
for (let i = 1; i <= 100; i++) {
  // Schedule logging of the iteration number with setTimeout
  setTimeout(() => {
    console.log(i);

    // Check if this is the last iteration (i.e., 100th iteration)
    if (i === 100) {
      console.log("End of the loop printing");
      // Schedule the final code block to be executed with a delay of 0
      setTimeout(() => {
        console.log("Final code block to be executed");
      }, 0);
    }
  }, 0);
}
