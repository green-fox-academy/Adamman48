'use strict';

export{};

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(a: string[]) {
    for (let i: number = 0; i < a.length; i++) {
        a[i] = a[i] + 'a';
    }
    return a;
}

console.log(appendA(far));

export = appendA;