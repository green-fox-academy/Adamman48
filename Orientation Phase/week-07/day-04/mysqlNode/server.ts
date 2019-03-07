'use strict';

require('dotenv').config();
const express = require ('express');
const app = express();
const PORT = 3000;
const mysql = require ('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use(express.json());

/* connection.connect((err) => {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});
connection.end(); */

app.get('/', (req, res) => {
  connection.query('SHOW DATABASES;', (err, rows) => {
    err ? (console.log(err),
      res.status(500).send()) :
        null;
      res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log('Haile Selassie!');
});

