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

    Add(jet: Aircraft): void {
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
        let jetStatusReport: string[] = [],
        
        jetStatusReport.push(this.aircrafts.forEach(jetfighter => (jetfighter.GetStatus()));

        return `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.motherload}, Total damage: ${this.aircrafts.reduce((accumulator: any, jetfighter) => {accumulator + jetfighter.Fight();}, 0)}
        Aircrafts:\n ${}`
    }
}

let plane1: SU35 = new SU35();
let plane2: SU35 = new SU35();
let plane3: SU35 = new SU35();
let plane4: J10 = new J10();
let plane5: J10 = new J10();
let plane6: J10 = new J10();
let plane7: J10 = new J10();
let plane8: J10 = new J10();

let carrier1: AircraftCarrier = new AircraftCarrier('Eviscerator', 6000, 16000);
let carrier2: AircraftCarrier = new AircraftCarrier('Manchester', 4500, 10000);

carrier1.Add(plane1);
carrier1.Add(plane2);
carrier1.Add(plane3);
carrier1.Add(plane4);
carrier1.Add(plane5);
carrier1.Add(plane6);
carrier1.Add(plane7);
carrier1.Add(plane8);

console.log(carrier1.GetStatus());