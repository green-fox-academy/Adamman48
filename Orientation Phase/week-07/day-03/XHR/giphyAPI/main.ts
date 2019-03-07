'use strict';

const http = new XMLHttpRequest();
let thumbnails: Node = document.querySelector('ul');

http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=cYxOl3KoB7Qc0YNvXSKd196h9tv2xYvE&q=starwars&limit=20');
http.onload = () => {
  loadStaticGifs();

let selectImage = document.querySelectorAll('img');

selectImage.forEach((value, index) => {value.addEventListener('click', () => {
  unselectGif();
  previewGif(value, index);
  })});
};
http.send();

const previewGif = (stillGif, gifNo) => {
  stillGif.setAttribute('src', JSON.parse(http.responseText).data[gifNo].images.downsized.url);
  stillGif.setAttribute('id', 'selected-image');
};

const unselectGif = () => {
  document.querySelectorAll('img').forEach((value, index) => {
    value.setAttribute('id', '');
    value.setAttribute('src', 
      JSON.parse(http.responseText).data[index].images.downsized_still.url);
  })
}

const loadStaticGifs = () => {
  JSON.parse(http.responseText).data.forEach(value =>
    thumbnails.appendChild(document.createElement('img'))
      .setAttribute('src', value.images.downsized_still.url));
  }