'use strict';

require('dotenv').config();
const PORT: number = 3000;
const express = require ('express');
const app = express();
const path = require ('path');
const mysql = require ('mysql');
const konzola = console.log;

const errorHandling = (response, error) => {
  error ? (konzola(error),
      response.status(500).send()) :
        null;
};

app.use('/assets', express.static('assets'));
app.use(express.json());


app.get('/hello', (req, res) => {
  res.send('Hello Boss!')
});


app.listen(PORT, () => {
  konzola('What is thy bidding, my master?');
});