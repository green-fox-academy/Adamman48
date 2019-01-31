'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function recurse(n: number) {
    for (let i: number = n; i - i - 1 < i; i--) {
    console.log(n);
    return recurse(n - 1);
    }
}

recurse(10000);