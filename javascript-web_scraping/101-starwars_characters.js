#!/usr/bin/node

const request = require('request-promise');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;

async function fetchCharacterName (charactersAPI) {
  for (const character of charactersAPI) {
    await request(character, (err, reponse, body) => {
      if (err) {
        console.log(err);
      } else {
        const theCharacter = JSON.parse(body);
        console.log(theCharacter.name);
      }
    });
  }
}

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const movie = JSON.parse(body);
    const charactersAPI = movie.characters;
    fetchCharacterName(charactersAPI);
  }
});
