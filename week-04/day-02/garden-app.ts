'use strict';

class Vegetation {
    colour: string;
    waterAmount: number;

    constructor(c: string, w: number) {
        this.colour = c;
        this.waterAmount = w;
    }
}

class Flower extends Vegetation {
}

class Tree extends Vegetation {
}

class Garden {
    flowers: Flower[];
    trees: Tree[];

    constructor() {
        this.flowers = [];
        this.trees = [];
    }

    plant(newPlant) {
            newPlant instanceof Flower ? this.flowers.push(newPlant) : null;
            newPlant instanceof Tree ? this.trees.push(newPlant) : null;
            //console.log(`You cannot plant this item. Please plant a flower or a tree!`)
    }

    StateOfGarden(){
        this.flowers.forEach(flower => flower.waterAmount >= 5 ? 
        console.log(`The ${flower.colour} Flower doesn't need water.`) :
        console.log(`The ${flower.colour} Flower needs water.`));
        
        this.trees.forEach(tree => tree.waterAmount >= 10 ?
        console.log(`The ${tree.colour} Tree doesn't need water.`) :
        console.log(`The ${tree.colour} Tree needs water.`));
    }

    Irrigation(amount: number) {
        console.log(`Watering with ${amount}.`);

        let thirstyGreens: number = this.flowers.filter(flower => flower.waterAmount < 5).length +
        this.trees.filter(tree => tree.waterAmount < 10).length;

        amount = amount / thirstyGreens;

        this.flowers.forEach(flower => flower.waterAmount < 5 ? flower.waterAmount += amount * 0.75 : null);
        this.trees.forEach(tree => tree.waterAmount < 10 ? tree.waterAmount += amount * 0.4 : null);

        this.StateOfGarden();
    }
}

let flower1: Flower = new Flower('yellow', 0);
let flower2: Flower = new Flower('blue', 0);
let tree1: Tree = new Tree('purple', 0);
let tree2: Tree = new Tree('orange', 0);

let faketree: string = 'I am fake';

let garden = new Garden();

garden.plant(flower1);
garden.plant(flower2);
garden.plant(tree1);
garden.plant(tree2);
garden.plant(faketree);

garden.StateOfGarden();
garden.Irrigation(40);
garden.Irrigation(70);

console.log(garden)