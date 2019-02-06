'use strict';

import {Aircraft, SU35, J10} from './aircraft'

class AircraftCarrier {
    name: string;
    aircrafts: Aircraft[];
    motherload: number;
    health: number;

    constructor(n: string, ml: number, hp: number) {
        this.name = n;
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

    Fight(target: AircraftCarrier) {
        let dmgDealt: number = this.aircrafts.reduce((accumulator: any, jetfighter) =>
        {accumulator + jetfighter.Fight();}, 0);

        target.health -= dmgDealt;
    }

    GetStatus() {
        let output: string = '';

        this.health > 0 ? output =
        `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.motherload}, Total damage: 
        ${this.aircrafts.reduce((accumulator: any, jetfighter) => {accumulator + jetfighter.Fight();}, 0)}\n
        Aircrafts:\n ${this.aircrafts.forEach(jetfighter => jetfighter.GetStatus())}`
        :
        output = `It's dead Jim... :(`

        return output;
    }
}

let plane1: SU35 = new SU35()

console.log(plane1.GetStatus())