'use strict';

/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor (c: string, w: number, ink: number = 100) {
        this.color = c;
        this.width = w;
        this.inkAmount = ink;
    }

    use(strokes: number) {
        this.inkAmount = this.inkAmount - strokes * 10;
    }
}

let sharpie1: Sharpie = new Sharpie('orange', 5);
let sharpie2: Sharpie = new Sharpie('aquamarine', 2);

sharpie2.use(2);

console.log(sharpie2.inkAmount);