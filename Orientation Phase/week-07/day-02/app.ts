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
})

app.listen(PORT, () => {
  console.log(`I'm running!`);
});