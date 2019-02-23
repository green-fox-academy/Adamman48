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

let lineCount = 7;
let spacing = Math.floor(lineCount / 2);

for (let i = 1; i < lineCount * 2; i += 2) {
  let whitespace = ' ';
  let star = '*';

  console.log(whitespace.repeat(spacing).concat(star.repeat(i)));

  i < lineCount ? spacing-- : spacing++;
}