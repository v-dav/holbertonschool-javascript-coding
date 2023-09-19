#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(url, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(response.body).characters;
    fetchCharacters(characters, 0);
  }
});

function fetchCharacters (characters, index) {
  request.get(characters[index], (error, response) => {
    if (error) {
      console.log(error);
    }
    console.log(JSON.parse(response.body).name);
    if (index + 1 < characters.length) {
      fetchCharacters(characters, index + 1);
    }
  });
}
