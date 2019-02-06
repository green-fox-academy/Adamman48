'use strict';

abstract class Instrument {
    protected name: string;

    constructor(n: string) {
        this.name = n;
    }

    abstract play()
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    
    constructor(n: string, num: number) {
        super(n);
        this.numberOfStrings = num;
    }

    abstract sound()
}

class ElectricGuitar extends StringedInstrument{
    
    constructor(num: number = 6, n: string = 'Electric Guitar') {
        super(n, num);
    }

    sound(): string {
        return `Twang`;
    }

    play(): string {
        return `${this.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`;
    }
}

class BassGuitar extends StringedInstrument{

    constructor(num: number = 4, n: string = 'Bass Guitar') {
        super(n, num);
    }

    sound(): string {
        return `Duum-duum-duum`;
    }

    play(): string {
        return `${this.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`;
    }
}

class Violin extends StringedInstrument{

    constructor(num: number = 4, n: string = 'Violin') {
        super(n, num);
    }

    sound(): string {
        return 'Screech';
    }

    play(): string {
        return `${this.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`;
    }
}

export {Instrument, ElectricGuitar, BassGuitar, Violin};