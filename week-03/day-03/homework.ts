'use strict';

export{};

class Tree {
    type: string;
    leafColor: string;
    age: number;
    sex: string;

    constructor (type: string, color: string, age: number, sex: string) {
        this.type = type;
        this.leafColor = color;
        this.age = age;
        this.sex = sex;
    }

    getData() {
        return console.log(this.type, this.leafColor, this.age, this.sex);
    }
}

let Sequoia: Tree = new Tree('evergreen', 'dark green', 3000, 'male');
let WaterOak: Tree = new Tree('decidous', 'shiny green', 50, 'female');
let Adansonia: Tree = new Tree('decidous', 'light green', 100, 'female');
let SocotraDragonTree: Tree = new Tree('evergreen', 'matte green', 220, 'male');
let AtlasCedar: Tree = new Tree('evergreen', 'blue', 100, 'male');

Sequoia.getData();
WaterOak.getData();
Adansonia.getData();
SocotraDragonTree.getData();
AtlasCedar.getData();