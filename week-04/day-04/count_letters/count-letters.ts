'use strict';

/* Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
Create a test for that. */

function letterCounter(inputString: string) {
    let dictionary: {[letter: string]: number} = {};
    let regexpFilterArray:RegExp [] = [/\s*/gm, /\_*/gm, /\d*/gm, /\W*/gm];

    for (let i: number = 0; i < regexpFilterArray.length; i++) {
        inputString = inputString.replace(regexpFilterArray[i], '');
    }
    
    inputString.toLowerCase().split('')
    .forEach((value, index, array) => dictionary[value] = array.filter(v => v === value).length);

    return dictionary;
}

console.log(letterCounter('Adam PHA $&_-9329273'));

export {letterCounter};