#!/usr/bin/node

const request = require('request');

// Function to get and print characters of a Star Wars movie by Movie ID
function printCharactersByMovieId(movieId) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;
  
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      
      console.log(`Characters in "${movieData.title}":`);
      movieData.characters.forEach((characterUrl) => {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          } else {
            console.error(`Failed to retrieve character data. Status code: ${charResponse.statusCode}`);
          }
        });
      });
    } else {
      console.error(`Failed to retrieve movie data. Status code: ${response.statusCode}`);
    }
  });
}

// Usage example: specify the Movie ID (e.g., 3 for "Return of the Jedi")
const movieId = 3;
printCharactersByMovieId(movieId);
