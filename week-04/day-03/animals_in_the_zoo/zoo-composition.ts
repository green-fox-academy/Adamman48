'use strict';

const Breeding = (b: string) => {
    let offsprings: 0;

    return {
        breed(): string {
            offsprings++;
            return b;
        },
        checkOffsprings(): string {
            return `I have ${offsprings} offsprings.`;
        }
    }
}

const Physiology = (sC: string) => {
    let belly: number = 100;

    return {
        coveredIn(): string {
            return sC;
        },
        feed(): void {
            belly += 10;
        },
        foolAround(): void {
            belly -= 10;
        },
        hunger(): string {
            return belly < 50 ? 'I am hungry.' : (belly === 100) ? 'I am full' : 'I could eat, I guess.';
        }
    }
}

const TypeName = (tn: string) => {

    return {
        getName(): string {
            return tn;
        }
    }
}

const Reptile = (nameOfType: string) => {
    let breedingMethod = Breeding('laying eggs');
    let cover = Physiology('scales');
    let typeName = TypeName(nameOfType);

    return {
        typename.getName(){},             //Can I make these repeated 'returns' substitute somehow?
        breed(){},
        hunger(){},
        coveredIn(){},
        checkOffsprings(){},
    }
}

const Bird = (nameOfType: string) => {
    let breedingMethod = Breeding('laying eggs');
    let cover = Physiology('feathers');
    let typeName = TypeName(nameOfType); 

    return {
        getName(){},
        breed(){},
        hunger(){},
        coveredIn(){},
        checkOffsprings(){},
    }
}

const Mammal = (nameOfType: string) => {
    let breedingMethod = Breeding('giving birth');
    let cover = Physiology('fur');
    let typeName = TypeName(nameOfType);

    return {
        getName(){},
        breed(){},
        hunger(){},
        coveredIn(){},
        checkOffsprings(){},
    }
}

let reptile1 = Reptile('Crocodile');
let bird1 = Bird('Cassuary');
let mammal1 = Mammal('Panda');

//Why does it give me undefined?

console.log("Introduce yourselves!");
console.log(`I am a ${reptile1.getName()} and I breed by ${reptile1.breed()}. I have ${reptile1.checkOffsprings()} currently.\nMy skin is covered with ${reptile1.coveredIn()} and ${reptile1.hunger()}.`);
console.log(`I am a ${mammal1.getName()} and I breed by ${mammal1.breed()}. I have ${mammal1.checkOffsprings()} currently.\nMy skin is covered with ${mammal1.coveredIn()} and ${mammal1.hunger()}.`);
console.log(`I am a ${bird1.getName()} and I breed by ${bird1.breed()}. I have ${bird1.checkOffsprings()} currently.\nMy skin is covered with ${bird1.coveredIn()} and ${bird1.hunger()}.`);