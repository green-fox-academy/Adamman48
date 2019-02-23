'use strict';

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount = 17

function drawSquareDiagonal(lines) {
  let lining = '%';
  let whitespace = ' ';
  let line = '';

  for (let i = 0; i < lines; i++) {
    i === 0 || i === lines - 1 ?
      line = lining.repeat(lines) :
        line = lining.concat(whitespace.repeat(i - 1)).concat(lining).concat(whitespace.repeat(lines - i - 2)).concat(lining);
    console.log(line);
  }
}

drawSquareDiagonal(lineCount);