'use strict';

require('dotenv').config();
const PORT: number = 3000;
const express = require ('express');
const app = express();
const path = require ('path');
const mysql = require ('mysql');
const konzola = console.log;

const reddit = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_db
});

const errorHandling = (response, error) => {
  error ? (konzola(error),
      response.status(500).send()) :
        null;
};

app.use('/assets', express.static('assets'));
app.use(express.json());

reddit.connect((error) => {
  error ? konzola('The cookie jar is not reachable. :(') :
    konzola('The cookie jar is in your hands. Feast!');
});

app.get('/hello', (req, res) => {
  res.send('Hello Boss!')
});

app.get('/posts', (req, res) => {
  res.set('Content-type', 'application/json');
  req.get('Content-type') === 'application/json' ?
    reddit.query(`SELECT * FROM posts;`, (error, rows) => {
    errorHandling(res, error);
    res.json(rows);
  }) : res.send('Request is invalid. You loser!');
});

app.post('/posts', (req, res) => {
  res.set()
})

app.listen(PORT, () => {
  konzola('What is thy bidding, my master?');
});