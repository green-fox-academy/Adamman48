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
        /* let allocateAmmo: number = 
        this.aircrafts.filter(jetfighter => jetfighter.currentAmmo < jetfighter.maxAmmo)
        .reduce((accumulator: any, jetfighter) => {accumulator + (jetfighter.maxAmmo - jetfighter.currentAmmo);}, 0);
        
        this.motherload = this.motherload - allocateAmmo;*/

        function priorityFilling (checkIt: boolean) {
            this.aircrafts.filter(jetfighter => jetfighter.IsPriority() === checkIt)
            .forEach(jetfighter => jetfighter.Refill(this.motherload));    
        }

        priorityFilling(true);

        this.motherload > 0 ? 
        priorityFilling(false) : 
        console.log('No ammo left, Sir!')
    }

    
}