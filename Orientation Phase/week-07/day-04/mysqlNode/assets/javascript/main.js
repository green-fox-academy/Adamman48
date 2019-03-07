'use strict';
var http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/apibooks');
http.onload = function () {
    var data = JSON.parse(http.responseText);
    console.log(data);
    loadBookList(data);
};
http.send();
var loadBookList = function (inputData) {
    var listHere = document.querySelector('ul');
    inputData.forEach(function (value) {
        return listHere.appendChild(document.createElement('li'))
            .textContent = "" + value.book_name;
    });
};
