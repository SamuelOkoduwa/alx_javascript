#!/usr/bin/node
/*
// Importing request module
const { error } = require('console');
const request = require('request');

// Verify if the URL is provided
if (process.argv.length < 3) {
	console.error('Usage: node getStatus.js <URL>');
	process.exit(1);
}

// When recieving the URl from the command line arguments
const url = process.argv[2];

// Make the GET request
request.get(url, (error, response) => {
	if (error) {
		console.error('Error:', error.message);
		process.exit(1);
	}
	// Dispaly the status code
	console.log('code: ${response.statusCode');
});
*/

// Importing request module
const request = require('request');

// The URL to request passed as the first command-line argument
const url = process.argv[2]; 

// Verify if the url is provided
if (!url) {
  console.error('Usage: node script.js <URL>');
  process.exit(1);
}

// Make the get request
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});



