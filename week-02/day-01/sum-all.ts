'use strict';

export{};

let ai: number = [3, 4, 5, 6, 7].reduce((accumulator, initialValue) => {
    return accumulator + initialValue;
}, 0);

console.log(ai);