'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(inputArray: number[], orderOfSort: boolean): number[] {
  orderOfSort === true ? inputArray.sort((a, b) => b - a) : inputArray.sort((a, b) => a - b);

  return inputArray;
}

let list: number[] = [1, 2, 7, 3, 9, 4, 12, 11, 30, 21, 30];

console.log(bubble(list, true))