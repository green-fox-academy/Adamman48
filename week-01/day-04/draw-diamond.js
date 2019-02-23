'use strict';

/* Write a program that draws a
// diamond like this:
//
//    *   
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is */

let lineCount = 8;

function drawTriangleOddNum (lines) {
  lines % 2 === 0 ? 
    (console.log
      (`${lines} is not an odd number, line count changed to ${lines - 1} automatically.`) , lines++) 
    : null;
  let spacing = Math.floor(lines / 2);
  let starCountAfterTurn = lines - 2;

  for (let i = 1; i < lines * 2; i += 2) {
    let whitespace = ' ';
    let star = '*';

    console.log(whitespace.repeat(spacing).concat
      (star.repeat(i > lines ? starCountAfterTurn : i)));

  i < lines ? spacing-- : spacing++;
  i > lines ? starCountAfterTurn -= 2 : null;
  }
}

function drawTriangleAllNum (lines) {
  let spacing = Math.floor(lines / 2);
  let starCountAfterTurn = lines % 2 === 0 ? lines - 1 : lines - 2;

  for (let i = 1; i < lines * 2; i += 2) {
    let whitespace = ' ';
    let star = '*';

    console.log(whitespace.repeat(lines % 2 === 0 ? 
        (i >= lines ? spacing + 1 : spacing) : spacing).concat
      (star.repeat(i > lines ? starCountAfterTurn : i)));

  i < lines ? spacing-- : spacing++;
  i > lines ? starCountAfterTurn -= 2 : null;
  }
}

drawTriangleAllNum(lineCount);