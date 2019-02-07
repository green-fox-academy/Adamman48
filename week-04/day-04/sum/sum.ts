'use strict';

class Summarize {
    arrayOfNumbers: number[];
    
    constructor(a: number[]) {
        this.arrayOfNumbers = a
    }

    sum(): number {
        return this.arrayOfNumbers.reduce((accumulator, arrayelement): number => {return accumulator + arrayelement}, 0);
    }
}

export {Summarize};