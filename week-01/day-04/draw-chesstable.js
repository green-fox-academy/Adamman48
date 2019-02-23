'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

function drawChesstable () {
  let filled = '[@]'
  let empty = '[ ]'
  let line = '';

  for (let i = 1; i <= 8; i++) {
    let block = '';
    i % 2 === 0 ?
      block = empty.concat(filled) :
        block = filled.concat(empty);
    line = block.repeat(4);
    console.log(line);
  }
}

drawChesstable();