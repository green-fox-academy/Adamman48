'use strict';

class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dice = [];
        for(var i = 0; i < this.numOfDices; i++) { 
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dice;
    }

    reroll(index?: number) {
        if(index == undefined) {
            for(var i = 0; i < this.numOfDices; i++) { 
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }
    
    getCurrent(index?: number) {
        if(index == undefined) {
            for(var i = 0; i < this.numOfDices; i++) { 
                return this.dice[i];
            }
        } else {
            return this.dice[index];
        }        
    }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

console.log("FIRST ROLL");

let diceSet = new DiceSet();
console.log(diceSet.roll());

console.log("REROLLS");

for (let i: number = 0; i <= diceSet.dice.length - 1; i++) {
    while (diceSet.dice[i] !== 6) {
        diceSet.reroll(i);
        console.log(`Dice N.o.: ${i + 1}; New roll: ${diceSet.getCurrent(i)}`);
    } 
}
console.log('JACKPOT')
console.log(diceSet)