#!/usr/bin/node

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
