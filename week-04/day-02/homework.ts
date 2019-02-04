'use strict';

class Person {
    name: string;
    age: number;
    gender: string;

    constructor (n: string = 'Jane Doe', a: number = 30, g: string = 'female') {
        this.name = n;
        this.age = a;
        this.gender = g;
    }

    introduce () {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`)
    }

    getGoal () {
        console.log('My goal is: Live for the moment!');
    }
}

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;

    constructor (n: string = 'Jane Doe', a: number = 30, g: string = 'female', prev: string = 'The School Of Life') {
        this.name = n;
        this.age = a;
        this.gender = g;
        this.previousOrganization = prev;
        this.skippedDays = 0;
    }

    introduce () {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal () {
        console.log('My goal is: Be a junior software developer!');
    }

    skipDays (numOfDays) {
        this.skippedDays += numOfDays;
    }
}

class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;

    constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', l: string = 'intermediate') {
        this.name = n;
        this.age = a;
        this.gender = g;
        this.level = l;
    }

    introduce () {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal () {
        console.log('Educate brilliant junior software developers.');
    }
}

class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;

    constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', c: string = 'Google') {
        this.name = n;
        this.age = a;
        this.gender = g;
        this.company = c;
        this.hiredStudents = 0;
    }

    introduce () {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal () {
        console.log('Hire brilliant junior software developers.');
    }

    hire() {
        this.hiredStudents += 1;
    }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}