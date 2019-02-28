'use strict';
var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;
app.listen(PORT, function () {
    console.log("It's alive!");
});
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('home', {
        title: 'Szervusz Világ!',
        date: 'körülbelül Kr. e. 4500 megaév',
        eon: 'Hadaikum eonotéma',
        temp: 'Magas hőmérséklet'
    });
});
