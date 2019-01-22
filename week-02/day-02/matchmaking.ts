'use strict';

export{};

// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a: string[], b: string[]) {
    let matches: string[] = [];
    for (let i: number = 0; i <= a.length && i <= b.length; i++) {
        matches = matches.concat(a.slice(i, i+1).concat(b.slice(i, i+1)));
        } return matches;
}

console.log(makingMatches(girls, boys));

export = makingMatches;