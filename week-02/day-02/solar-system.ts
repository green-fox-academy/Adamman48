'use strict';

export{};

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(a: string[]) {
    a.splice(a.indexOf('Uranus'), 0, 'Saturn')
    return a;
}

console.log(putSaturn(planetList));

export = putSaturn;