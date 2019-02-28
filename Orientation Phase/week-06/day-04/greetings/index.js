'use strict';
var PORT = 3000;
var express = require('express');
var app = express();
var path = require('path');
app.listen(PORT, function () {
    console.log("It's alive.....of course!");
});
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    var data = req.query;
    Object.keys(data).length === 0 ?
        data = { name: 'Guest' } :
        null;
    res.render('home', data);
});
