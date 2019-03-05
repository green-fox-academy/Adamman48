'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.use(express.json()); //For POST requests

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
});

app.post('/dountil/:action', (req, res) => {
  let input: string = req.params.action;
  let body: number = req.body.until;
  let output: Object = {};

  function sumOutcome(inputNum: number): number {
    let result: number[] = [];
    
    for (let i: number = 1; i <= inputNum; i++) {
      result.push(i);
    };

    return result.reduce((accumulator, currentvalue) => 
      {return accumulator + currentvalue});
  }

  function factorOutcome(inputNum: number): number {
    let result: number = inputNum;
    if (inputNum === 0 || inputNum === 1) 
      return 1; 
    while (inputNum > 1) { 
      inputNum--;
      result *= inputNum;
    }
    return result;
  };

  input === 'sum' ?
    output = {
      result: Number(sumOutcome(body)),
    } :
  input === 'factor' ?
    output = {
      result: Number(factorOutcome(body)),
    } :
  body === undefined ?
    output = {
      error: 'Please provide a number!',
    } :
  null;

  res.send(output);
})

app.listen(PORT, () => {
  console.log(`I'm running!`);
});