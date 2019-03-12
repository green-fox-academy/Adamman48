'use strict';
/* Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the lollipop emoji to display the lollipops you have
Display the candy producton rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x */
var createCandy = document.querySelector('.create-candies');
var buyLolly = document.querySelector('.buy-lollypops');
createCandy.addEventListener('click', function (event) {
    var counter = Number(createCandy.dataset.action);
    counter++;
    createCandy.dataset.action = counter;
});
buyLolly.addEventListener('click', function (event) {
    var counter = Number(buyLolly.dataset.action);
    var currentCandies = Number(createCandy.dataset.action);
    currentCandies >= 100 ? (currentCandies -= 100,
        counter++,
        buyLolly.dataset.action = counter,
        createCandy.dataset.action = currentCandies) :
        null;
});
