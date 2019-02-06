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
        let allocateAmmo: number = 
        this.aircrafts.filter(jetfighter => jetfighter.currentAmmo < jetfighter.maxAmmo)
        .reduce((accumulator: any, jetfighter) => 
        {return accumulator + (jetfighter.maxAmmo - jetfighter.currentAmmo);}, 0);

        function priorityFilling(fleet: Aircraft[], ammo: number, checker: boolean) {
            fleet.filter(jetfighter => jetfighter.IsPriority() === checker)
            .forEach(jetfighter => jetfighter.Refill(ammo));
        }

        priorityFilling(this.aircrafts, this.motherload, true);

        this.motherload > 0 ? 
        priorityFilling(this.aircrafts, this.motherload, false) : 
        console.log('No ammo left, Sir!');

        this.motherload -= allocateAmmo;
    }

    Fight(target: AircraftCarrier) {
        let dmgDealt: number = 
        this.aircrafts.reduce((accumulator: any, jetfighter) =>
        {return accumulator + jetfighter.Fight();}, 0);

        target.health -= dmgDealt;
    }

    GetStatus() {
        let jetStatusReport: string[] = [];
        let potentialDamage: number = this.aircrafts.reduce((aircraft1, aircraft2) => 
        {return aircraft1 + (aircraft2.currentAmmo * aircraft2.baseDamage)}, 0);

        this.aircrafts.forEach(jetfighter => jetStatusReport.push(jetfighter.GetStatus()));

        return `Name: ${this.name} HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.motherload}, Total damage: ${potentialDamage}\nAircrafts:\n${jetStatusReport.join(`\n`)}`;
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
carrier1.Fight(carrier2);

console.log(carrier1.GetStatus());
console.log(carrier2.GetStatus());