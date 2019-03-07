'use strict';
exports.__esModule = true;
var functions_1 = require("./functions");
var http = new XMLHttpRequest();
var thumbnails = document.querySelector('ul');
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = function () {
    functions_1.loadStaticGifs();
    var selectImage = document.querySelectorAll('img');
    selectImage.forEach(function (value, index) {
        value.addEventListener('click', function () {
            functions_1.unselectGif();
            functions_1.previewGif(value, index);
        });
    });
};
http.send();
