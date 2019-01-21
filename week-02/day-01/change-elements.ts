'use strict';

export {};

let numlist: number[] = [1, 2, 3, 8, 5, 6];

let newArray: number[] = numlist.map(function(e) {
    if (e === 8) {
    e = 4;
    }
    return e;
})

console.log(newArray[3]);