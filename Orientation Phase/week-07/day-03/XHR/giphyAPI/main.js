'use strict';
var http = new XMLHttpRequest();
var thumbnails = document.querySelector('ul');
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = function () {
    var gifData = JSON.parse(http.responseText);
    gifData.data.forEach(function (value) {
        var img = value.images.downsized_still.url;
        thumbnails.appendChild(document.createElement('img')).setAttribute('src', img);
        console.log(gifData);
    });
    var selectImage = document.querySelectorAll('img');
    selectImage.forEach(function (value) { return value.addEventListener('click', function () {
        previewGif(value);
    }); });
};
http.send();
var previewGif = function (stillGif) {
    var clickedGifStill = stillGif.getAttribute('src');
    clickedGifStill.indexOf('_s.gif') > -1 ?
        (stillGif.setAttribute('src', clickedGifStill.slice(0, clickedGifStill.indexOf('_s.gif')) + ".gif"),
            stillGif.setAttribute('class', 'selected-image')) : null;
};
