'use strict';
/* Create a simple HTML document with one button.
If the user clicks the button it should wait 2 seconds
and it should show a text under the button: 2 seconds ellapsed */
var button = document.querySelector('button');
button.addEventListener('click', function (event) {
    setTimeout(printStuff, 2000);
});
var printStuff = function () {
    var body = document.querySelector('body');
    var stuff = document.createElement('p');
    body.appendChild(stuff).textContent = '2 seconds ellapsed';
};
