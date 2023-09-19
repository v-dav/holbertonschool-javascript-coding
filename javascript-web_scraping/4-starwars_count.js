#!/usr/bin/node

const request = require('request');
const WedgeAntilles = 'https://swapi-api.hbtn.io/api/people/18/';
const filmsUrl = process.argv[2];
let counter = 0;

request(filmsUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const allMovies = JSON.parse(body);
  for (const result of allMovies.results) {
    for (const character of result.characters) {
      if (character === WedgeAntilles) {
        counter += 1;
      }
    }
  }
  console.log(counter);
});
