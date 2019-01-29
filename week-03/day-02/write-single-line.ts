'use strict';

export{};

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');
let inputName: string = 'Adam Pisky-Nagy';
let inputFile: string = 'my-file.txt'

function writeToMyFile(fileName: string, nameToWrite: string) {
    let emptyFile: boolean = fileName.split('').length <= 0;
    let notEmptyFile: boolean = fileName.split('').length > 0;
    let noFile: boolean = fs.existsSync(fileName) === false;
    try { 
        if (noFile || emptyFile) {
            fs.writeFileSync(fileName, nameToWrite);
        }
        else if (notEmptyFile) {
        fs.appendFileSync(fileName, '\n' + nameToWrite);
        }
    }
    catch {
        console.log('Unable to write file: ' + fileName);
    }
}

writeToMyFile(inputFile, inputName);