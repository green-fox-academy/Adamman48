'use strict';

const http = new XMLHttpRequest();
let thumbnails: Node = document.querySelector('ul');

http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = () => {
  let gifData = JSON.parse(http.responseText);
  gifData.data.forEach(value => {
    let img = value.images.downsized_still.url;
    thumbnails.appendChild(document.createElement('img')).setAttribute('src', img)
    console.log(gifData)
  });
  
let selectImage = document.querySelectorAll('img');

selectImage.forEach(value => value.addEventListener('click', () => {
    previewGif(value);
  })
)};
http.send();

const previewGif = (stillGif) => {
  let clickedGifStill = stillGif.getAttribute('src');
  clickedGifStill.indexOf('_s.gif') > -1 ?
  (stillGif.setAttribute('src', `${clickedGifStill.slice(0, clickedGifStill.indexOf('_s.gif'))}.gif`),
  stillGif.setAttribute('class', 'selected-image')) : null;
};