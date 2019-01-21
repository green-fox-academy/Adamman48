'use strict';

export {};

function factorio(a) {
    let num: number = 1;
    for (let i: number = 1; i <= a; i++) {
    num = num * i;
    }
    return num;
}

console.log(factorio(10));