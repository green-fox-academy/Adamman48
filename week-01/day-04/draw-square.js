'use strict';

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
// .repeat is not present in typescript, using js format then

let lineCount = 17;

function drawSquare(lines) {
  let lining = '%';
  let whitespace = ' ';
  let line = '';

  for (let i = 1; i <= lines; i++) {
    i === 1 || i === lines ?
      line = lining.repeat(lines) :
        line = lining.concat(whitespace.repeat(lines - 2)).concat(lining);
    console.log(line);
  }
}

drawSquare(lineCount);