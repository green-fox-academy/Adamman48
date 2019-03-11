'use strict';

/* Create a simple HTML document with one button. 
If the user clicks the button it should wait 2 seconds 
and it should show a text under the button: 2 seconds ellapsed */

let button: HTMLButtonElement = document.querySelector('button');

button.addEventListener('click', (event) => {
  setTimeout(printStuff, 2000);
});

const printStuff = (): void => {
  let body: Node = document.querySelector('body');
  let stuff: HTMLElement = document.createElement('p');

  body.appendChild(stuff).textContent = '2 seconds ellapsed';  
};