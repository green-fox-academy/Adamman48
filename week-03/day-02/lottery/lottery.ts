'use strict';

import { stringify } from "querystring";

let fs = require ('fs');

let source: string = 'lottery.csv';

function mostCommonFinder(inputSource: string): string[] {
  let textToArray: string[] = fs.readFileSync(inputSource, 'utf-8').split('Ft')
  let counter: {} = {};
  textToArray = textToArray.filter((v, index) => 
    {return index % 4 === 0}).filter((v, index) => 
      {return index !== 0}).join('\r').split('\r').filter((v, index) => 
        {return index % 2 === 0}).join('').split(';').filter((v, index) => 
          {return index !== 0}).sort();

  textToArray.forEach((element: string, index, array) => counter[element] = array.filter(element: string))
  
  return textToArray;
}

//mostCommonFinder(source)
console.log(mostCommonFinder(source))