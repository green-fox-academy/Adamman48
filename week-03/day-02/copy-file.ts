'use strict';

export{};

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
let copyFrom: string = 'content-to-copy.txt';
let copyTo: string = 'copied-content.txt';

function copyContent(from: string, to: string) {
    try {
        let content: string = fs.readFileSync(from, 'utf-8');
        fs.writeFileSync(to, content);
        console.log('The copy was successful: ' + true)
    } catch {
        console.log('The copy was successful: ' + false);
    }
}

copyContent(copyFrom, copyTo);