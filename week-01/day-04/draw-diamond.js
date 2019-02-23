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

let lineCount = 50;
lineCount % 2 === 0 ? (console.log(`${lineCount} is not an odd number, line count changed to ${lineCount + 1} automatically.`) , lineCount++) : null;
let spacing = Math.floor(lineCount / 2);
let starCountAfterTurn = lineCount - 2;

for (let i = 1; i < lineCount * 2; i += 2) {
  let whitespace = ' ';
  let star = '*';

  console.log(whitespace.repeat(spacing).concat(star.repeat(i > lineCount ? starCountAfterTurn : i)));

  i < lineCount ? spacing-- : spacing++;
  i > lineCount ? starCountAfterTurn -= 2 : null;
}