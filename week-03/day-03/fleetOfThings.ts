import { Thing } from "./thing";
import { Fleet } from "./fleet";

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let fleet = new Fleet();

let milk: Thing = new Thing('Get milk');
let obs: Thing = new Thing('Remove the obstacles');
let stand: Thing = new Thing('Stand up');
let eat: Thing = new Thing('Eat lunch');

let isTrue1 = stand.complete();
let isTrue2 = eat.complete();

fleet.add(milk);
fleet.add(obs);
fleet.add(stand);
fleet.add(eat);

console.log(fleet[2][1])