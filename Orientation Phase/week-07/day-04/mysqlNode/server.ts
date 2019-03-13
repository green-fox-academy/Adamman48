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

const errorHandling = (response, error) => {
  error ? (console.error(error),
      response.status(500).send()) :
        null;
}

connection.connect((err) => {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/views/index.html'));
});

app.get('/booknames', (req, res) => {
  connection.query('SELECT book_name FROM book_mast;', (err, rows) => {
    errorHandling(res, err);
    res.send(rows);
  });
});

app.get('/detailedbooklist', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast
    INNER JOIN author
    ON book_mast.aut_id = author.aut_id
    INNER JOIN category
    ON book_mast.cate_id = category.cate_id
    INNER JOIN publisher
    ON book_mast.pub_id = publisher.pub_id;`, (err, rows) => {
      errorHandling(res, err);
      res.send(rows);
    });
});

app.listen(PORT, () => {
  console.log('Haile Selassie!');
});