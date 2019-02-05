'use strict';

class Aircraft {
    maxAmmo: number;
    currentAmmo: number;
    baseDamage: number;

    constructor(a: number, dmg: number) {
        this. maxAmmo = a;
        this.currentAmmo = 0;
        this.baseDamage = dmg;
    }

    Fight() {
        let damageDealt: number = this.currentAmmo * this.baseDamage;

        this.currentAmmo = 0;

        return damageDealt;
    }

    Refill(ammoStash: number) {
        let remainingAmmo: number = ammoStash - (this.maxAmmo - this.currentAmmo);

        ammoStash >= this.maxAmmo - this.currentAmmo ? 
        this.currentAmmo = this.maxAmmo : 
        this.currentAmmo += ammoStash;

        remainingAmmo < 0 ? 
        remainingAmmo = 0 : 
        remainingAmmo = remainingAmmo;

        return remainingAmmo;
    }

    GetType() {
        let type: string = '';

        Aircraft instanceof SU35 ?
        type = 'Sukhoi SU-35' : null;

        Aircraft instanceof J10 ?
        type = 'Chengdu J-10' : null;

        return type;

    }

    GetStatus() {
        return `Type ${this.GetType}, Ammo: ${this.currentAmmo}, 
        Base Damage: ${this.baseDamage}, All Damage: ${this.currentAmmo * this.baseDamage}`
    }

    IsPriority() {
        let checker: boolean = undefined;

        Aircraft instanceof SU35 ? checker = true : null;

        Aircraft instanceof J10 ? checker = false : null;
        
        return checker;
    }

}

class SU35 extends Aircraft {
    constructor(a: number, dmg: number) {
        super(a = 12, dmg = 50);
    }
}

class J10 extends Aircraft{
    constructor(a: number, dmg: number) {
        super(a = 8, dmg = 30);
    }
}

export {Aircraft, SU35, J10};