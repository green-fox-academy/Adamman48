'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) => {
  let inputMethod: string = req.body.what;
  let inputArray: number[] = req.body.numbers;
  let output: {[result: string]: any} = {};

  inputMethod === undefined || inputArray === undefined || inputArray.length === 0 ?
    output = {
      error: 'Please provide what to do with the numbers!'
    } :
  inputMethod === 'sum' ?
    output.result = Number(inputArray.reduce((accumulator, currentValue) => 
      {return accumulator + currentValue})) :
  inputMethod === 'multiply' ?
    output.result = Number(inputArray.reduce((accumulator, currentValue) => 
      {return accumulator * currentValue})) :
  inputMethod === 'double' ?
    output.result = inputArray.map(value => value * 2) :
  null;

  res.send(output);    
})

app.listen(PORT, () => {
  console.log('Haile Selassie');
});