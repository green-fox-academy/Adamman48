'use strict';

/*Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.
You have a Pokemon class with a method called isEffectiveAgainst().
Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.
You can use the already created pokemon files.*/

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.
// Ash has a few pokemon.
// A wild pokemon appeared!
// Which pokemon should Ash use?

import { Pokemon } from './pokemons'

let ashStash: Pokemon[] = initializePokemon();
let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Venasaur', 'leaf', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Moltres', 'fire', 'leaf'),
        new Pokemon('Magikarp', 'water', 'fire'),
        new Pokemon('Lapras', 'water', 'fire')
    ];
}
for (let i: number = 0; i < ashStash.length; i++) {
    if (ashStash[i].isEffectiveAgainst(wildPokemon)) {
        console.log('I choose you, ' + ashStash[i].name);        
    }
}