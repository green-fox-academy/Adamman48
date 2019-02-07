'use strict';

/* Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
Create a test for that. */

function letterCounter(inputString: string) {
    let dictionary: {[letter: string]: number} = {};

    inputString.replace(/\s/g, '').split('')
    .forEach((value, index, array) => dictionary[value] = array.filter(v => v === value).length);

    return dictionary;
}

console.log(letterCounter('adam'))

export {letterCounter};