'use strict';

/* On the click of the button,
Count the items in the list
And display the result in the result element. */

document.querySelector('button').addEventListener('click', () => {
  let sumItems: number = document.querySelectorAll('li').length;
  document.querySelector('p').textContent = `${sumItems}`;
});