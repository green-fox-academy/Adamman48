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

        /*function priorityFilling (checkIt: boolean) {
            this.aircrafts.filter(jetfighter => jetfighter.IsPriority() === checkIt)
            .forEach(jetfighter => jetfighter.Refill(this.motherload));    
        }*/
        let allocateAmmo: number[] = [];
        
        this.aircrafts.filter(jetfighter => jetfighter.IsPriority() === true)
        .forEach(jetfighter => jetfighter.Refill(this.motherload)); //push return value to array than reduce array

        this.motherload > 0 ? 
        this.aircrafts.filter(jetfighter => jetfighter.IsPriority() === false)
        .forEach(jetfighter => jetfighter.Refill(this.motherload)) : 
        console.log('No ammo left, Sir!')
    }

    Fight(target: AircraftCarrier) {
        let dmgDealt: number = this.aircrafts.reduce((accumulator: any, jetfighter) =>
        {accumulator + jetfighter.Fight();}, 0);

        target.health -= dmgDealt;
    }

    GetStatus() {
        let jetStatusReport: string[] = [];
        
        this.aircrafts.forEach(jetfighter => jetStatusReport.push(jetfighter.GetStatus()));

        return `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.motherload}, Total damage: ${this.aircrafts.reduce((accumulator: any, jetfighter) => {accumulator + jetfighter.Fight();}, 0)}\nAircrafts:\n${jetStatusReport.join(`\n`)}`;
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

let carrier1: AircraftCarrier = new AircraftCarrier('Ural', 6000, 16000);
let carrier2: AircraftCarrier = new AircraftCarrier('Manchester', 4500, 10000);

carrier1.Add(plane1);
carrier1.Add(plane2);
carrier1.Add(plane3);
carrier1.Add(plane4);
carrier1.Add(plane5);
carrier1.Add(plane6);
carrier1.Add(plane7);
carrier1.Add(plane8);

carrier1.Fill();

console.log(carrier1.GetStatus());