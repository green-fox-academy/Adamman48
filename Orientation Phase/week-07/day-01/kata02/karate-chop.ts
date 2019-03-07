'use strict';

function chopArray (searchThis: number, inputArray: number[]): number {
  let memory: number = 0;
  let searchFrom: number = 0;
  let searchUntil: number = inputArray.length - 1;
  
  inputArray[searchUntil] < searchThis ?
      memory = -1 :
      null;

  while (inputArray[searchUntil] > searchThis) {
    inputArray[searchUntil] === searchThis ?
      memory = searchUntil :
        searchUntil = searchUntil / 2;
  }

  while (inputArray[searchFrom] < searchThis) {
    inputArray[searchFrom] === searchThis ?
      memory = searchFrom :
        searchFrom = searchUntil / 2;
  }

  for (let i: number = searchFrom; i <= searchUntil; i++) {
    inputArray[i] === searchThis ?
     memory = i :
      null;
  }
  
  return memory;
}

export { chopArray };