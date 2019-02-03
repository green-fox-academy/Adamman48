'use strict';

/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */

import{Sharpie} from './sharpie';

class SharpieSet {
    set: Sharpie[];

    constructor() {
        this.set = [];
    }

    add(sharpie: Sharpie){
        this.set.push(sharpie);
    }

    countUseable() {
        let countArray: number[] = [];
        for (let i: number = 0; i < this.set.length; i++) {
            if (this.set[i].inkAmount > 0) {
            countArray.push(this.set[i].inkAmount);
            }
        } return countArray.length;
    }

    removeTrash () {
        for (let i: number = 0; i < this.set.length; i++) {
            if (this.set[i].inkAmount <= 0) {
            this.set.splice(i, 1);
            }
        } return this.set;
    }
}

let sharpieSetter: SharpieSet = new SharpieSet();

let sharpie1: Sharpie = new Sharpie('orange', 5, 0);
let sharpie2: Sharpie = new Sharpie('aquamarine', 2);
let sharpie3: Sharpie = new Sharpie('yellow', 4, 0);
let sharpie4: Sharpie = new Sharpie('green', 10);
let sharpie5: Sharpie = new Sharpie('bloodred', 6);

sharpieSetter.add(sharpie1);
sharpieSetter.add(sharpie2);
sharpieSetter.add(sharpie3);
sharpieSetter.add(sharpie4);
sharpieSetter.add(sharpie5);

console.log(sharpieSetter.countUseable());
console.log(sharpieSetter.removeTrash());