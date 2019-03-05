'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let inputNumber: number = req.query.input;
  let output: Object = {};

  isNaN(inputNumber) ?
    output = {
      error: "Please provide an input!"
    } :
    output = {
      received: Number(inputNumber),
      result: Number(inputNumber * 2),
    };
  
  res.send(output);
});

app.get('/greeter', (req, res) => {
  let inputName: string = req.query.name;
  let inputTitle: string = req.query.title;
  let output: Object = {};

  inputName === undefined && inputTitle === undefined ?
    output = {
    error: 'Please provide a name and a title!',
    } :
  inputName === undefined ?
    output = {
      error: `Please provide a name!`
    } :
      inputTitle === undefined ?
      output = {
        error: `Please provide a title!`
      } :
        output = {
          welcome_message: `Oh, hi there ${inputName}, my dear ${inputTitle}!`,
        }

  res.send(output);
});

app.get('/appenda/:appendable', (req, res) => {
  let input: string = req.params.appendable;
  let output: Object = {
    appended: `${input}a`,
  };

  res.send(output);
})

app.listen(PORT, () => {
  console.log(`I'm running!`);
});