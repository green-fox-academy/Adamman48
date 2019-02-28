'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.listen(PORT, () => {
  console.log(`The Lord said, let there be light....And there was light.`);
});

app.set('view engine', 'ejs');

const todos: string[] = [
  'buy Cocaine...on iTunes',
  'listen to Cocaine',
  'bed',
];

function addList(inputArray: string[]) {
  let listParentNode: HTMLElement = document.querySelector('ul');
  
  for (let i: number = 0; i < inputArray.length; i++) {
    let newListElement: HTMLElement = document.createElement('li');
    newListElement.textContent = `${inputArray[i]}`;
    listParentNode.appendChild(newListElement);
  }
}

app.get('/', (req, res) => {
  res.render('home', addList(todos));
})