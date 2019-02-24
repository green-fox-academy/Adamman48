'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable

function matrixInit (rowsAndColumns: number): void {
  let outputMatrix: number[][] = [];
  let replaceThis: number = 1;

  for (let i: number = 0; i < rowsAndColumns; i++) {
    let fillerArray: number[] = [];

    for (let i: number = 0; i <rowsAndColumns; i++) {
      fillerArray.push(0);
    }
    fillerArray[fillerArray.length - replaceThis] = 1;
    outputMatrix.push(fillerArray);
    console.log(fillerArray);
    replaceThis++;
  }
}

matrixInit(10);