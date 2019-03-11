'use strict';
/* Create a simple HTML document with one button.
If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
5 seconds elapsed and clicked 3 times
If the user starts clicking before the first 5 seconds, nothing should be printed */
var button = document.querySelector('button');
var clickCounter = 0;
var timerReady = false;
var newStuff = document.createElement('p');
var clicker = function () {
    button.addEventListener('click', function (event) {
        clickCounter++;
    });
};
setTimeout(function () {
    clicker(), clickCounter === 3 ?
        document.querySelector('body').appendChild(newStuff).textContent = '5 seconds elapsed and clicked 3 times' : null;
}, 5000);
