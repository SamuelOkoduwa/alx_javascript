#!/usr/bin/node

function welcomeMessage(fullName) {
	alert('Welcome' + ' ' + fullName);	//A closure for an alert displaying Welcome <fullname>
}

//Variables with calls to the welcome message
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred')
