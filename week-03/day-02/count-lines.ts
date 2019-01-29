'use strict';

export{};

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function lineCounter(fileName: string) {
    try{
    let text:string[] = fs.readFileSync(fileName, 'utf-8').split('\n');
    return console.log(text.length);
    }
    catch {
        console.log(0);
    }
}

lineCounter('readMeCountLines.txt');