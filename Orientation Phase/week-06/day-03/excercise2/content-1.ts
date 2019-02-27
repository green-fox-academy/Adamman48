'use strict';

/* 1)  Fill every paragraph with the last one's content. */

let paragraphs: HTMLCollection = document.getElementsByTagName('p');

for (let i: number = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = paragraphs[paragraphs.length - 1].textContent;
}


/* 2)  Do the same again, but you should keep the cat strong. */

for (let i: number = 0; i < paragraphs.length; i++) {
  paragraphs[i].innerHTML = paragraphs[paragraphs.length - 1].innerHTML;
}