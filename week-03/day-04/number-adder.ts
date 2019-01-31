// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

/*function numAdder(inputN: number, reach: number = inputN) {
    while (inputN > 0) {
    console.log(reach - inputN + inputN/inputN);
    return numAdder(inputN - inputN/inputN, reach);
    }
}*/

function numAdder(inputN: number, static reach: number) {
    console.log(inputN);
    while (inputN > 0) {
    let fuckThisShit: number = inputN;
    inputN--;

    return numAdder(inputN)
    }
}

numAdder(500)