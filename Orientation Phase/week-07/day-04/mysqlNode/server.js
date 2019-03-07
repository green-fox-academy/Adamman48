'use strict';
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});
/* connection.connect((err) => {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});
connection.end(); */
app.get('/', function (req, res) {
    connection.query('SHOW DATABASES;', function (err, rows) {
        err ? (console.log(err),
            res.status(500).send()) :
            res.send(rows);
    });
});
app.listen(PORT, function () {
    console.log('Haile Selassie!');
});
