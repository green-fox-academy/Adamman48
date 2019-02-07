'use strict';

/* Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
Create a test for that. */

function letterCounter(inputString: string) {
    let dictionary: {[letter: string]: number} = {};

    function filter(whitespace: string, underscore: string, digits: string, specialChars: string): string {
        return [whitespace, underscore, digits, specialChars].join('').replace(/./, '');
    }

let regexp:RegExp [] = [/\s/gim, /\_/gim, /\d*/gim, /^\w/gim];

    inputString.replace(regexp[0], filter).split('')
    .forEach((value, index, array) => dictionary[value] = array.filter(v => v === value).length);

    return dictionary;
}

console.log(letterCounter('adam PHA $&_-9329273'))

export {letterCounter};