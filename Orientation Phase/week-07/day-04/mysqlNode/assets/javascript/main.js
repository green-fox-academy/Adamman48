'use strict';
var bookNames = function () {
    var http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/booknames');
    http.onload = function () {
        var data = JSON.parse(http.responseText);
        loadBookNamesList(data);
    };
    http.send();
};
bookNames();
var detailedTable = function () {
    var http2 = new XMLHttpRequest();
    http2.open('GET', 'http://localhost:3000/detailedbooklist');
    http2.onload = function () {
        var data = JSON.parse(http2.responseText);
        loadDetailedTable(data);
    };
    http2.send();
};
detailedTable();
var loadBookNamesList = function (inputData) {
    var listHere = document.querySelector('ul');
    inputData.forEach(function (value) {
        return listHere.appendChild(document.createElement('li'))
            .textContent = "" + value.book_name;
    });
};
var loadDetailedTable = function (inputData) {
    for (var i = 0; i <= inputData.length; i++) {
        var newRow = document.createElement('tr');
        document.querySelector('table').appendChild(newRow);
    }
    ;
    for (var i = 0; i < Object.keys(inputData[0]).length; i++) {
        var newHeader = document.createElement('th');
        var headerTitles = ['Title', 'Author', 'Category', 'Publisher', 'Price'];
        document.querySelector('tr').appendChild(newHeader)
            .textContent = "" + headerTitles[i];
    }
    ;
    for (var i = 1; i <= inputData.length; i++) {
        var insertHere = document.querySelectorAll('tr');
        for (var j = 0; j < Object.keys(inputData[0]).length; j++) {
            var newCell = document.createElement('td');
            insertHere[i].appendChild(newCell).textContent =
                "" + Object.values(inputData[i - 1])[j];
        }
        ;
    }
    ;
};
