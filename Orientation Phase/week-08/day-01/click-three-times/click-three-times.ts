'use strict';

/* Create a simple HTML document with one button.
If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
5 seconds elapsed and clicked 3 times
If the user starts clicking before the first 5 seconds, nothing should be printed */

let button: HTMLButtonElement = document.querySelector('button');
let clickCounter: number = 0;
let timerReady: boolean = false;
let newStuff: HTMLElement = document.createElement('p');


const clicker = () => {
button.addEventListener('click', (event) => {
  clickCounter++;
})};

setTimeout(() => {clicker(), clickCounter === 3 ? 
  document.querySelector('body').appendChild(newStuff).textContent = '5 seconds elapsed and clicked 3 times' : null}, 5000);