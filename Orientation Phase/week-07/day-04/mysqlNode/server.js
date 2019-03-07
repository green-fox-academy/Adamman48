'use strict';
require('dotenv').config();
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');
var connection = mysql.createConnection({
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
app.get('/', function (req, res) {
    connection.query('SHOW DATABASES;', function (err, rows) {
        err ? (console.log(err),
            res.status(500).send()) :
            null;
        res.send(rows);
    });
});
app.listen(PORT, function () {
    console.log('Haile Selassie!');
});
