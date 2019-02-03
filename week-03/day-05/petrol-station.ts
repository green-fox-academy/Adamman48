'use strict';

/* Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
    stationBranch: string;
    gasAmountStation: number;

    constructor (gas: number, branch: string) {
        this.gasAmountStation = gas;
        this.stationBranch = branch;
    }

    refill(inputCar: Car) {
        this.gasAmountStation -= inputCar.capacity;
        inputCar.gasAmountCar = inputCar.capacity;
    }
}

class Car {
    type: string;
    capacity: number;
    gasAmountCar: number;

    constructor (t: string) {
        this.capacity = 100;
        this.gasAmountCar = 0;
        this.type = t;
    }
}

let avanti: Station = new Station(1000, 'Avanti');
let lovelyMazda: Car = new Car('Mazda MX6');

avanti.refill(lovelyMazda);

console.log(avanti);
console.log(lovelyMazda);