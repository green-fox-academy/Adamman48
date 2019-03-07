'use strict';
require('dotenv').config();
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');
var path = require('path');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
app.use('/assets', express.static('assets'));
app.use(express.json());
var errorHandling = function (response, error, rows) {
    error ? (console.error(error),
        response.status(500).send()) :
        null;
    response.send(rows);
};
connection.connect(function (err) {
    err ? console.error('Error connecting to DB') :
        console.log('DB is connected');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './assets/views/index.html'));
});
app.get('/apibooks', function (req, res) {
    connection.query('SELECT book_name FROM book_mast;', function (err, rows) {
        errorHandling(res, err, rows);
        res.send(rows);
    });
});
app.listen(PORT, function () {
    console.log('Haile Selassie!');
});
