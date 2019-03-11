'use strict';
/* Create an event listener which logs the current timestamp to the console once the button is clicked.
When the button is clicked for the second or any other times no event listener should be called.
Try to solve this two different ways.
hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button */
var button = document.querySelector('button');
var currentTime = 0;
/* button.addEventListener('click', (event): void => {
  console.log(event.timeStamp);
  button.setAttribute('disabled', 'true');
}); */
/* button.addEventListener('click', (event): void => {
  currentTime === 0 ?
  console.log(event.timeStamp) : null;
  currentTime = event.timeStamp;
});
 */
document.getElementById('click').addEventListener('click', function (event) {
    console.log(event.timeStamp);
    document.getElementById('click').setAttribute('id', 'unclickable');
});
