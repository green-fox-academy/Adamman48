'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.listen(PORT, () => {
  console.log(`The Lord said, let there be light....And there was light.`);
});

app.set('view engine', 'ejs');

function addList() {
  const todos: string[] = [
    'buy Cocaine...on iTunes',
    'listen to Cocaine',
    'bed',
  ];
  let sumArray: string[] = [];
  let output: string = '';
  
  todos.forEach(value => sumArray.push(`\n<li>${value}</li>`));

  output = sumArray.join('');
  return output; 
}

app.get('/', (req, res) => {
  res.render('home', {
    lister: addList(),
  })
});