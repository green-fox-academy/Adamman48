'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let fruitList = (...fruits): string[] => {
  return fruits;
}

const fruitVendor = (callback) => {
  for (let i: number = 0; i < callback.length; i++) {
    setTimeout(() => console.log(callback[i]), 2 * i * 1000);
  }
}

console.log(fruitVendor(fruitList('apple', 'pear', 'melon', 'grapes', 'passionfruit', 'dragonfruit')))