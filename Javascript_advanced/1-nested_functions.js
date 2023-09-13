#!/usr/bin/node

let globalVariable = 'Welcome'; //A global variable
function outer(){	//the outer function
	alert(globalVariable)	//alert of the global variable
	let course = 'Holberton';	//variable with value Holberton
	function inner() {		//The inner function	
		alert(globalVariable + ' ' + course)	//the alert on the inner function
		let exclamation = '!';	//The exclamation variable
		function inception() {	//The inception funtion
			alert(globalVariable + ' ' + course + exclamation)	//alert on the inception function
			inception();	//calling the inception function
		}
		inner();	//calling the inner function
	}
	outer();	//calling the outer function
}
