'use strict';
require('dotenv').config();
var PORT = 3000;
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var konzola = console.log;
var errorHandling = function (response, error) {
    error ? (konzola(error),
        response.status(500).send()) :
        null;
};
app.use('/assets', express.static('assets'));
app.use(express.json());
app.get('/hello', function (req, res) {
    res.send('Hello Boss!');
});
app.listen(PORT, function () {
    konzola('What is thy bidding, my master?');
});
