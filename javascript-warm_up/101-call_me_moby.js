#!/bin/usr/node

// A function that executes x  times a function

// exports.callMeMeMoby = function (x, theFunction) {
// 	for (let i = 0; i < x; i++) {
// 	  theFunction();
// 	}
//   }

//   module.export.callMeMeMoby = callMeMeMoby;

// const executeXTimes = {
// 	execute: function(x, theFunction) {
// 	  for (let i = 0; i < x; i++) {
// 		theFunction();
// 	  }
// 	},
//   };
  
//   // Now you can use the execute function from outside
//   executeXTimes.execute(5, () => {
// 	console.log("This function will execute 5 times.");
//   });

  
exports.callMeMoby = function (x, theFunction){
    for (let i = 0; i < x; i++){
        theFunction();
    }
}