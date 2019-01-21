'use strict';

export {};

function sum(a) {
    let num: number = 0;
    for (let i: number = 0; i <= a; i++){
    num += i;
    }
return num;
}

console.log(sum(5));