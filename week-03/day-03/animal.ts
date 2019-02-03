'use strict';

/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

class Animal {
    hunger: number;
    thirst: number;

    constructor (h: number = 50, t: number = 50) {
        this.hunger = h;
        this.thirst = t;
    }

    eat() {
        this.hunger--;
    }
    drink() {
        this.thirst--;
    }
    play() {
        this.hunger++;
        this.thirst++;
    }
}

let lion: Animal = new Animal();
let cassuary: Animal = new Animal();
let tardigrade: Animal = new Animal();

lion.play();
console.log(lion.hunger);

export{Animal};