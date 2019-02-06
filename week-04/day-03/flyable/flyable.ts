'use strict';

interface Flyable {
    land();

    fly();

    takeOff();
}

abstract class Vehicle {
    name: string;
    fuelConsumption: number;
    range: number;
    isFlyable: boolean;
}

class Helicopter extends Vehicle implements Flyable {
    land() {

    };

    fly() {

    };

    takeOff() {

    };
}