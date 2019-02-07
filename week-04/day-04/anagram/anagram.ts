'use strict';

/* Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that. */

function anagramChecker(string1: string, string2: string): boolean {

    return string1.split('').sort().join('') === string2.split('').sort().join('');
}

export {anagramChecker};