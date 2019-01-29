'use strict';

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');

function ticTacResult(inputFile: string) {
    let multiArray: string[][] = [];
    fs.readFileSync(inputFile).split('\n').push(multiArray);
    let winner: string = '';

    for (let i: number = 0; i < multiArray.length; i++) {
        if (multiArray[i][0] === multiArray[i][1] && multiArray[i][1] === multiArray[i][2]) {
            winner = multiArray[i][0];
        } else if (multiArray[0][i] === multiArray[1][i] && multiArray[1][i] === multiArray[2][i]) {
            winner = multiArray[0][i];
        } else if (multiArray[0][0] === multiArray[1][1] && multiArray[1][1] === multiArray[2][2]) {
            winner = multiArray[0][0];
        } else if (multiArray[0][2] === multiArray[1][1] && multiArray[1][1] === multiArray[2][0]) {
            winner = multiArray [0][2];
        } else {
            winner = 'draw';
        } 
    }
    return winner;
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"