#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(url, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    const movie = JSON.parse(response.body);
    const characters = movie.characters;
    for (const characterURL of characters) {
      request.get(characterURL, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          const character = JSON.parse(resp.body);
          console.log(character.name);
        }
      });
    }
  }
});
