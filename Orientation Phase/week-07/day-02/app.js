'use strict';
var express = require('express');
var app = express();
var PORT = 8080;
var path = require('path');
app.use('/assets', express.static('assets'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/doubling', function (req, res) {
    var inputNumber = req.query.input;
    var output = {};
    isNaN(inputNumber) ?
        output = {
            error: "Please provide an input!"
        } :
        output = {
            received: Number(inputNumber),
            result: Number(inputNumber * 2)
        };
    res.send(output);
});
app.get('/greeter', function (req, res) {
    var inputName = req.query.name;
    var inputTitle = req.query.title;
    var output = {};
    inputName === undefined && inputTitle === undefined ?
        output = {
            error: 'Please provide a name and a title!'
        } :
        inputName === undefined ?
            output = {
                error: "Please provide a name!"
            } :
            inputTitle === undefined ?
                output = {
                    error: "Please provide a title!"
                } :
                output = {
                    welcome_message: "Oh, hi there " + inputName + ", my dear " + inputTitle + "!"
                };
    res.send(output);
});
app.listen(PORT, function () {
    console.log("I'm running!");
});
