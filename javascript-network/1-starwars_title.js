#!/usr/bin/node

// Importing the requested module
const request = require('request');

 // Passing the movie ID as the first command-line argument
const movieId = process.argv[2]; 

if (!movieId) {
  console.error('Usage: node script.js <movie ID>');
  process.exit(1);
}

// The star war Api EndPoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// The GET request
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      const movie = JSON.parse(body);
      console.log(`Title: ${movie.title}`);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});


