'use strict';

const PORT: number = 3000;
const express = require('express');
const app = express();

app.use(express.json());

app.post('sith', (req, res) => {
  let input: string = req.body.text;
  let startPoint: number = 0;
  let endPoint: number = input.indexOf('\s' || '\W', startPoint);
  let transformArray: string[] = [];
  let output: {[sith_text: string]: string} = {};

  transformArray.push(input.slice(startPoint, endPoint).toLowerCase());
  startPoint = endPoint;
  transformArray.unshift(input.slice(startPoint, endPoint).toLowerCase());
  startPoint = endPoint;

  input.indexOf('\W')

})

app.listen(PORT, () => {
  console.log('Welcome to the jungle!');
});