'use strict';

const http = new XMLHttpRequest();

let thumbnails: Node = document.querySelector('ul');

http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = () => {
  let gifData = JSON.parse(http.responseText);
  gifData.data.forEach(value => {
    let img = value.images.downsized_still.url;
    thumbnails.appendChild(document.createElement('img')).setAttribute('src', img)
  })
};
http.send();


