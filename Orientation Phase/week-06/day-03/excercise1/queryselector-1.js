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
var king = document.getElementById('b325');
console.log(king.textContent);
var businessLamp = document.getElementsByClassName('asteroid big');
for (var i = 0; i < businessLamp.length; i++) {
    console.log(businessLamp[i].textContent);
}
;
var conceitedKing = document.querySelectorAll('section');
for (var i = 0; i < conceitedKing.length; i++) {
    alert(conceitedKing[i].textContent);
}
;
var noBusiness = document.querySelectorAll('div');
for (var i = 0; i < noBusiness.length; i++) {
    console.log(noBusiness[i].textContent);
}
;
