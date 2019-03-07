'use strict';
var express = require('express');
var app = express();
var PORT = 8080;
var path = require('path');
app.use('/assets', express.static('assets'));
app.use(express.json()); //For POST requests
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
app.get('/appenda/:appendable', function (req, res) {
    var input = req.params.appendable;
    var output = {
        appended: input + "a"
    };
    res.send(output);
});
app.post('/dountil/:action', function (req, res) {
    var input = req.params.action;
    var body = req.body.until;
    var output = {};
    function sumOutcome(inputNum) {
        var result = [];
        for (var i = 1; i <= inputNum; i++) {
            result.push(i);
        }
        ;
        return result.reduce(function (accumulator, currentvalue) { return accumulator + currentvalue; });
    }
    function factorOutcome(inputNum) {
        var result = inputNum;
        if (inputNum === 0 || inputNum === 1)
            return 1;
        while (inputNum > 1) {
            inputNum--;
            result *= inputNum;
        }
        return result;
    }
    ;
    input === 'sum' ?
        output = {
            result: Number(sumOutcome(body))
        } :
        input === 'factor' ?
            output = {
                result: Number(factorOutcome(body))
            } :
            body === undefined ?
                output = {
                    error: 'Please provide a number!'
                } :
                null;
    res.send(output);
});
app.listen(PORT, function () {
    console.log("I'm running!");
});
