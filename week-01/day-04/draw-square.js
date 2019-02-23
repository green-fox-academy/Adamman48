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

let lineCount = 6;

function drawSquare(lines) {
  let lining = '%';
  let whitespace = ' ';
  let line = '';

  for (let i = 1; i <= lineCount; i++) {
    i === 1 || i === lineCount ?
      line = lining.repeat(lineCount) :
        line = lining.concat(whitespace.repeat(lineCount - 2)).concat(lining);
    console.log(line);
  }
}

drawSquare(lineCount);