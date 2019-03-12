'use strict';

/* Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the lollipop emoji to display the lollipops you have
Display the candy producton rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x */

const createCandy: HTMLButtonElement = document.querySelector('.create-candies');
const buyLolly: HTMLButtonElement = document.querySelector('.buy-lollypops');

createCandy.addEventListener('click', (event) => {
  let  counter: any = Number(createCandy.dataset.action);
  counter++;
  createCandy.dataset.action = counter;
});

buyLolly.addEventListener('click', (event) => {
  let  counter: any = Number(buyLolly.dataset.action);
  let currentCandies: any = Number(createCandy.dataset.action);
  
  currentCandies >= 100 ? (
    currentCandies -= 100,
    counter++,
    buyLolly.dataset.action = counter,
    createCandy.dataset.action = currentCandies) :
    null;
});