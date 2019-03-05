'use strict';

const PORT: number = 3000;
const express = require('express');
const app = express();

app.use(express.json());

app.post('sith', (req, res) => {
  let input: string = req.body.text;

  
})

app.listen(PORT, () => {
  console.log('Welcome to the jungle!');
});