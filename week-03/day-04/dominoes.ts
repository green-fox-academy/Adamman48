import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

function play(dominoObj: Domino[]) {
    let dominoArray: any[] = dominoObj[0].values;
    let residue: any[] = []; 
    for (let i: number = 0; i < dominoObj.length; i++) {
        if (dominoObj[i].values[0] === dominoArray[0][1]) {
        dominoArray.unshift(dominoObj[i])
        } else if (dominoObj[i].values[1] === dominoArray[0][0]) {
            dominoArray.push(dominoObj[i]);
        } else {
            residue.push(dominoObj[i]);
        }
    } return dominoArray 
} 

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

console.log(play(dominoes))

//print(dominoes);