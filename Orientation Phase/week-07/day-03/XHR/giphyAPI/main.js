'use strict';
var http = new XMLHttpRequest();
var thumbnails = document.querySelector('ul');
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = function () {
    loadStaticGifs();
    var selectImage = document.querySelectorAll('img');
    selectImage.forEach(function (value, index) {
        value.addEventListener('click', function () {
            unselectGif();
            previewGif(value, index);
        });
    });
};
http.send();
var previewGif = function (stillGif, gifNo) {
    stillGif.setAttribute('src', JSON.parse(http.responseText).data[gifNo].images.downsized.url);
    stillGif.setAttribute('id', 'selected-image');
};
var unselectGif = function () {
    document.querySelectorAll('img').forEach(function (value) {
        value.setAttribute('id', '');
    });
};
var loadStaticGifs = function () {
    JSON.parse(http.responseText).data.forEach(function (value) {
        return thumbnails.appendChild(document.createElement('img'))
            .setAttribute('src', value.images.downsized_still.url);
    });
};
