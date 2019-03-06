'use strict';

  let input: string = `this is a try. i don't know what the fuck is going on.`;
  let fasz = input.split(/\s/);
  console.log(fasz);
  let outputOdd = [];
  let outputEven = [];
  let output = [];
  fasz.forEach((value, index) => {index % 2 !== 0 ? outputEven.push(value) : outputOdd.push(value)})
  for (let i: number = 0; i < fasz.length; i++) {
    output.push(outputEven[i]);
    output.push(outputOdd[i]);
  }
  console.log(output);