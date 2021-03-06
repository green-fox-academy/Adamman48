'use strict';

/* Write the image's url to the console. */

let imageContent: HTMLImageElement = document.querySelector('img');

console.log(imageContent.getAttribute('src'));

/* Replace the image with a picture of your favorite animal. */

imageContent.setAttribute('src', 'https://media.giphy.com/media/RE5iREBNhI0Ok/giphy.gif');

/* Make the link point to the Green Fox Academy website. */

let linkContent: HTMLAnchorElement = document.querySelector('a');

linkContent.setAttribute('target', 'blank');
linkContent.setAttribute('href', 'https://www.greenfoxacademy.com/junior-programozo-kepzes#tandij');

/* Disable the second button. */

let buttonContent: HTMLButtonElement = document.querySelector('.this-one');

buttonContent.setAttribute('disabled', 'true')

/* Replace its text with 'Don't click me!'. */

buttonContent.textContent = `Don't click me!`;