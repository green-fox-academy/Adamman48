'use strict';
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;
app.use(express.json());
app.post('/arrays', function (req, res) {
    var inputMethod = req.body.what;
    var inputArray = req.body.numbers;
    var output = {};
    inputMethod === 'sum' ?
        output.result = Number(inputArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; })) :
        inputMethod === 'multiply' ?
            output.result = Number(inputArray.reduce(function (accumulator, currentValue) { return accumulator * currentValue; })) :
            inputMethod === 'double' ?
                output.result = inputArray.map(function (value) { return value * 2; }) :
                inputMethod === undefined || inputArray === undefined || inputArray.length === 0 ?
                    output = {
                        error: 'Please provide what to do with the numbers!'
                    } :
                    null;
    res.send(output);
});
app.listen(PORT, function () {
    console.log('Haile Selassie');
});
