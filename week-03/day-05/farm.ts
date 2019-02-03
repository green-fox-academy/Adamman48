'use strict';

import { Animal } from "./animal";

/* Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal */

class Farm {
    currentLifestock: Animal[];
    slotsForAnimals: number;

    constructor(init: Animal[]) {
        this.currentLifestock = init;
        this.slotsForAnimals = 10;
    }

    breed(newAnimal: Animal) {
        if (this.slotsForAnimals > this.currentLifestock.length) {
        this.currentLifestock.push(newAnimal);
        this.slotsForAnimals -= 1;
        return this.currentLifestock;
        } else {
            console.log('Sorry, the farm is full. Slaughter before adding more lifestock to it.')
        }
    }

    slaughter() {
        let sortableArray: any[] = [];
        for (let i: number = 0; i < this.currentLifestock.length; i++) {
            sortableArray.push(this.currentLifestock[i]);
        } 
        sortableArray.sort(function (animalX: number, animalY: number) {
        return animalX[0] - animalY[0]});
        delete this.currentLifestock[sortableArray[0]];
        sortableArray.shift();
        //let lifestockUpdate: Farm[] = []; 
        for (let j: number = 0; j < sortableArray.length; j++) {
            this.currentLifestock.push(sortableArray[j]);
        }
        this.slotsForAnimals += 1; 
        return this.currentLifestock;
    } 
}

function startFarm() {
    let animals: Animal[] = [];
    animals.push(new Animal('cassuary')),
    animals.push(new Animal('giraffe')),
    animals.push(new Animal('honeybadger')),
    animals.push(new Animal('ostrich')),
    animals.push(new Animal('cock')),
    animals.push(new Animal('cow')),
    animals.push(new Animal('sheep')),
    animals.push(new Animal('elephant')),
    animals.push(new Animal('dragon', 100)),
    animals.push(new Animal('pig'));
    return animals;
}

let lifestock = new Farm(startFarm());

let penguin: Animal = new Animal('penguin');

lifestock.slaughter();

console.log(lifestock)

//lifestock.breed(penguin);