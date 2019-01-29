'use strict';

export{};

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

const fs = require('fs');
let pathToFile: string = 'multiwrite.txt';
let inputWord: string = 'megalotis';
let numOfLines: number = 5;

function writeMultiToFile(path: string, word: string, lines: number) {
    let emptyFile: boolean = path.split('').length <= 0;
    let notEmptyFile: boolean = path.split('').length > 0;
    let noFile: boolean = fs.existsSync(path) === false;
    try {
        for (let i: number = 0; i < lines; i++) {
            if (emptyFile || noFile) {
            fs.appendFileSync(path, word + '\n');
            } else if (notEmptyFile) {
                fs.appendFileSync(path, '\n' + word);
            }
        }
    } catch {
        console.log('');
    }
}

writeMultiToFile(pathToFile, inputWord, numOfLines);