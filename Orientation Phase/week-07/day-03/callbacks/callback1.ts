'use strict';

// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array: any [], callback: CallableFunction): any[] => {
  let output: number[] = [];

  array.forEach(value => output.push(callback(value)));

  return output;
}

const addOne = (number: number): number => {
  return number + 1;
}

// Exercise 1:
console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Create a callback function which removes every second character from a string

const removeSecondLetter = (inputString: string): string => {
  return inputString.split('').filter((value, index) => 
    index % 2 === 0).join('');
}

// Exercise 2:
const words: string[] = ['map', 'reduce', 'filter'];
console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']