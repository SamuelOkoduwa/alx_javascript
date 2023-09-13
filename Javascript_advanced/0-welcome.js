#!/usr/bin/node

function welcome(firstName, lastName) { 	//The parent function
	let fullName = firstName + ' ' + lastName;	//Variable for the first and last Name
	function displayFullName(){		//Nested function to display the two arguments, first and last name
		alert('welcome' + ' ' + fullName + '!');	//the alert to be displayed
	}
	displayFullName();	//the call back function
}