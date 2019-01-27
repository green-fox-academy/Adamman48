'use strict';

export{};

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(arrayElement: number[]) {
    let divArray: number[] = arrayElement.filter(divFour => divFour % 4 === 0 && divFour <= 16);
    let arraySum: number = divArray.reduce((sum, current) => sum += current, 0,);
    if (arraySum === 40 && divArray.length === 4) {
        let arrayChecker: boolean = true;
        return arrayChecker;
    } else {
        let arrayChecker: boolean = false;
        return arrayChecker;
    }
}

console.log(checkNums(listOfNumbers));

export = checkNums;