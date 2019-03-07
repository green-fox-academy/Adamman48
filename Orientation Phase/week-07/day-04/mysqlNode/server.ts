'use strict';

require('dotenv').config();
const express = require ('express');
const app = express();
const PORT = 3000;
const mysql = require ('mysql');
const path = require ('path');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
app.use('/assets', express.static('assets'));
app.use(express.json());

const errorHandling = (response, error, rows) => {
  error ? (console.error(error),
      response.status(500).send()) :
        null;
      response.send(rows);
}

connection.connect((err) => {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/views/index.html'));
});

app.get('/apibooks', (req, res) => {
  connection.query('SELECT book_name FROM book_mast;', (err, rows) => {
    errorHandling(res, err, rows);
    res.send(rows);
  });
});



app.listen(PORT, () => {
  console.log('Haile Selassie!');
});

