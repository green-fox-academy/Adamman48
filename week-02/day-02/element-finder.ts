'use strict';

export{};

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(a: number[]) {
    let answer: string = ''
    for (let i: number = 0; i < a.length; i++) {
        if (a[i] === 7) {
            answer = 'Hoorray';
        } else {
            answer = 'Noooooo';
        }
    }
    return answer;
}

console.log(containsSeven(numbers));

export = containsSeven;