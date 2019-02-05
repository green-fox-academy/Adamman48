'use strict';

import {Aircraft, SU35, J10} from './aircraft'

class AircraftCarrier {
    aircrafts: Aircraft[];
    motherload: number;
    health: number;

    constructor(ml: number, hp: number) {
        this.aircrafts = [];
        this.motherload = ml > 2500 ? this.motherload = 2500 : this.motherload = ml;
        this.health = hp > 15000 ? this.health = 15000 : this.health = hp;
    }

    Add(jet: Aircraft) {
        this.aircrafts.push(jet);
    }

    Fill() {
        
    }
}