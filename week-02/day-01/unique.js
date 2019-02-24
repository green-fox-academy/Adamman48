'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

function unique(inputArray) {
  let outputArray = [];

  inputArray.forEach(value => outputArray.includes(value) ? null : outputArray.push(value));

  return outputArray;
}

let arrayToFilter = [1, 11, 34, 11, 52, 61, 1, 34, 61];

console.log(unique(arrayToFilter));