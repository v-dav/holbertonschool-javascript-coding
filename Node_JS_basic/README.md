# NodeJS Basics

![Ubuntu Version](https://img.shields.io/badge/Ubuntu-18.04%20LTS-green.svg)
![Node Version](https://img.shields.io/badge/NodeJS-12.x.x-blue.svg)
![Express](https://img.shields.io/badge/Express-Web_Framework-red.svg)
![Mocha](https://img.shields.io/badge/Mocha-Testing_Framework-brightgreen.svg)
![Nodemon](https://img.shields.io/badge/Nodemon-Development_Tool-orange.svg)

## Project Overview

Welcome to the NodeJS Basics project! This project is designed to help you build a strong foundation in Node.js, one of the most popular and powerful JavaScript runtime environments. Node.js allows you to run JavaScript on the server side, opening up a world of possibilities for building web applications, APIs, and more.

In this project, you will explore the basics of Node.js, including how to run JavaScript code using Node, work with Node modules, read files, and access command line arguments and the environment using the Process API. You will also learn how to create a small HTTP server using pure Node.js and take it a step further by using the Express.js web framework to create advanced routes and applications.

Additionally, you'll discover how to leverage modern JavaScript features like ES6 with Babel-node and enhance your development workflow with Nodemon.

By the end of this project, you will have a solid understanding of Node.js fundamentals and be ready to tackle more complex Node.js projects.

## Learning Objectives

By the end of this project, you will be able to explain the following concepts without the need for external references:

- How to run JavaScript using Node.js
- How to use Node.js modules
- How to read files with Node.js
- How to access command line arguments and the environment using the Process API
- How to create a small HTTP server using Node.js
- How to create a small HTTP server using Express.js
- How to create advanced routes with Express.js
- How to use ES6 with Node.js using Babel-node
- How to use Nodemon for faster development

## Ressources

**Read or watch**:

- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)


## Setup

### Install NodeJS 12.11.x
(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1

$ npm -v
6.11.3
```


### Install Jest, Babel, and ESLint
in your project directory:

- Install Jest using: npm install --save-dev jest
- Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
- Install ESLint using: npm install --save-dev eslint

### Files

- `package.json`
```{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```
- `babel.config.js`
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
- `utils.js` (Use when you get to tasks requiring uploadPhoto and createUser.)
```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```
- `.eslintrc.js`
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
- `database.csv`
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

Don’t forget to run `$ npm install` when you have the `package.json`.

## Author

- [Vladimir Davidov](https://github.com/v-dav)
