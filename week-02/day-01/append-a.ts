'use strict';

export{};

let animals: string[] = ['koal', "pand", 'zebr'];

animals = animals.map (function(e) {
    return e + 'a';
});

console.log(animals);