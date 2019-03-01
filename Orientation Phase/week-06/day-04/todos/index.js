'use strict';
var express = require('express');
var PORT = 3000;
var app = express();
var path = require('path');
app.listen(PORT, function () {
    console.log("The Lord said, let there be light....And there was light.");
});
app.set('view engine', 'ejs');
var listCreator = {
    addList: function () {
        var todos = [
            'buy Cocaine...on iTunes',
            'listen to Cocaine',
            'bed',
        ];
        var sumArray = [];
        var output = '';
        todos.forEach(function (value) { return sumArray.push("\n<li>" + value + "</li>"); });
        sumArray.join('');
        return output;
    }
};
/* function addList(inputArray: string[]) {
  let listCreator: {[todoItem: string]: string} = {};
  let sumArray: string[] = [];

  inputArray.forEach(value => sumArray.push(`\n<li>${value}</li>`));

  listCreator.todoItem = sumArray.join('');

  return listCreator;
}; */
function addList() {
    var todos = [
        'buy Cocaine...on iTunes',
        'listen to Cocaine',
        'bed',
    ];
    var sumArray = [];
    var output = '';
    todos.forEach(function (value) { return sumArray.push("\n<li>" + value + "</li>"); });
    output = sumArray.join('');
    return output;
}
console.log(addList());
app.get('/', function (req, res) {
    res.render('home', {
        lister: addList()
    });
});
