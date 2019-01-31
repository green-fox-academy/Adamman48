import { Thing } from "./thing";
import { Fleet } from "./fleet";

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let fleet = new Fleet();

let milk = 'Get milk';
let obs = 'Remove the obstacles';
let stand = 'Stand up';
let eat = 'Eat lunch';

let arrayTransFrom: any = [milk, obs, stand, eat];

/*class FuckThisShit extends Fleet {
    
    get GetThings() {
        return this.things;
    }
}*/

for (let i: number = 0; i < arrayTransFrom.length; i++) {
    fleet.add(arrayTransFrom[i]);
    }

let checkStand: Thing = new Thing(stand);

function changeVoid(input) {
    if (typeof input.complete() === undefined) {
        console.log('[X]')
    }
}

/*    return outcomeArray;
}*/

console.log(fleet[0][0])