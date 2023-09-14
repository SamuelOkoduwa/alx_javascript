
const apiURL = "https://swapi-api.alx-tools.com/api/films/";
const characterID = 18;

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Filter films where Wedge Antilles appears
    const filmsWithWedge = data.results.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterID}/`)
    );

    // Count the number of films with Wedge Antilles
    const numFilms = filmsWithWedge.length;

    // Print the result
    console.log((numFilms));
  })
  .catch((error) => {
    console.error(error.message);
  });
