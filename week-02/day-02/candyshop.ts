'use strict';

export{};

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(a: string[]) {
    for (let i: number = 0; i < a.length; i++) {
        if (typeof a[i] === 'number') {
        a.splice(i, 1, 'Croissant');
        } else if (typeof a[i] === 'boolean') {
            a.splice(i, 1, 'Ice cream');
        } else {continue}
    }
    return a;
}

console.log(sweets(shopItems));

export = sweets;