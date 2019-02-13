'use strict';

 abstract class Aircraft {
    maxAmmo: number;
    currentAmmo: number;
    baseDamage: number;

    constructor(a: number, dmg: number) {
        this. maxAmmo = a;
        this.currentAmmo = 0;
        this.baseDamage = dmg;
    }

    Fight(): number {
        let damageDealt: number = this.currentAmmo * this.baseDamage;

        this.currentAmmo = 0;

        return damageDealt;
    }

    Refill(ammoStash: number): number {
        let remainingAmmo: number = ammoStash - (this.maxAmmo - this.currentAmmo);

        ammoStash >= this.maxAmmo - this.currentAmmo ? 
        this.currentAmmo = this.maxAmmo : 
        this.currentAmmo += ammoStash;

        remainingAmmo < 0 ? remainingAmmo = 0 : null;

        return remainingAmmo;
    }

    abstract GetType();

    GetStatus() {
        return `Type ${this.GetType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.currentAmmo * this.baseDamage}`
    }

    abstract IsPriority();
}


class SU35 extends Aircraft {
    constructor(a: number = 12, dmg: number = 50) {
        super(a, dmg);
    }

    GetType():string {
        return 'Sukhoi SU-35';
    }

    IsPriority():boolean {
        return true;
    }
}


class J10 extends Aircraft{
    constructor(a: number = 8, dmg: number = 30) {
        super(a, dmg);
    }

    GetType(): string {
        return 'Chengdu J-10';
    }

    IsPriority():boolean {
        return false;
    }
}

export {Aircraft, SU35, J10};