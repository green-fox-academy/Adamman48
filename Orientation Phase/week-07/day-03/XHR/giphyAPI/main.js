'use strict';
var http = new XMLHttpRequest();
var thumbnails = document.querySelector('ul');
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = function () {
    var gifData = JSON.parse(http.responseText);
    gifData.data.forEach(function (value) {
        var img = value.images.downsized_still.url;
        thumbnails.appendChild(document.createElement('img')).setAttribute('src', img);
    });
};
http.send();
