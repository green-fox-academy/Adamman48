'use strict';

/* 1. store the element that says 'The King' in the 'king' variable.
console.log it.
2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them.
3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one.
4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them. */

let king: HTMLElement = document.getElementById('b325');

console.log(king.textContent);

let businessLamp: NodeList = document.querySelectorAll('.asteroid big');

for (let i: number = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i].textContent);
};

let conceitedKing: NodeList = document.querySelectorAll('section');

for (let i: number = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].textContent);
};

let noBusiness: NodeList = document.querySelectorAll('div');

for (let i: number = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i].textContent);
};