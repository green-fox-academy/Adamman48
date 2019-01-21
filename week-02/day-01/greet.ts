'use strict';

export {};

let name: string = 'Greenfox';

function greet(a = 'Johndoe') {
    return a;
}

console.log('Greetings, dear ' + greet(name));