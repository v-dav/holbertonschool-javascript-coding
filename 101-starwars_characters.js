#!/usr/bin/node

const request = require('request-promise');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;

async function fetchCharacterName (charactersAPI) {
  // Creates an array of promises to fetch caracter names for each character Url
  const characterPromises = charactersAPI.map(async (characterURL) => {
    const characterData = await request(characterURL);
    const theCharacter = JSON.parse(characterData);
    return theCharacter.name;
  });

  // Awaits with a promise that all promises done
  const characterNames = await Promise.all(characterPromises);

  // Prints character names at once
  characterNames.forEach((name) => {
    console.log(name);
  });
}

// Fetches all movie characters and call the async function
request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const movie = JSON.parse(body);
    const charactersAPI = movie.characters;
    fetchCharacterName(charactersAPI);
  }
});
