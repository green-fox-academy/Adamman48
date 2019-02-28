'use strict';
var express = require('express');
var app = express();
var PORT = 3000;
var path = require('path');
app.listen(PORT, function () {
    console.log("It's alive!");
});
app.use('/assets', express.static('assets'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});
