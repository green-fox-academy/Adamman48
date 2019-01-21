'use strict';

export {};

let abc: string[] = ['Arthur', 'Boe', 'Chloe', 'Adam'];

[abc[0], abc[abc.length-1]] = [abc[abc.length-1], abc[0]];

console.log(abc);