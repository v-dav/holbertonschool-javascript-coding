#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const doneList = [];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const allTasks = JSON.parse(body);
    for (const task of allTasks) {
      if (task.completed) {
        doneList.push(task);
      }
    }
    // Using reduce method which uses a callback function.
    const result = doneList.reduce((accumulator, current) => {
      const userId = current.userId;
      if (!accumulator[userId]) {
        accumulator[userId] = 0;
      }
      accumulator[userId]++;
      return accumulator;
    }, {});

    console.log(result);
  }
});
