'use strict';

const express = require ('express');
const app = express();
const PORT = 3000;
const mysql = require ('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
});

/* connection.connect((err) => {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});
connection.end(); */

app.get('/', (req, res) => {
  connection.query('SHOW DATABASES;', (err, rows) => {
    err ? (console.log(err),
      res.status(500).send()) :
      res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log('Haile Selassie!');
});

