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

class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    constructor (n: string = 'Jane Doe', a: number = 30, g: string = 'female', prev: string = 'The School Of Life') {
        super(n, a, g);
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

class Mentor extends Person {
    level: string;

    constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', l: string = 'intermediate') {
        super(n, a, g);
        this.level = l;
    }

    introduce () {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal () {
        console.log('Educate brilliant junior software developers.');
    }
}

class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', c: string = 'Google') {
        super(n, a, g);
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

class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    constructor (n: string) {
        this.name = n;
        this.students = [];
        this.mentors = [];
    }

    AddStudent(stud: Student) {
        this.students.push(stud);
    }

    AddMentor(ment: Mentor) {
        this.mentors.push(ment);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
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

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

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

let awesome = new Cohort('AWESOME');
awesome.AddStudent(student);
awesome.AddStudent(john);
awesome.AddMentor(mentor);
awesome.AddMentor(gandhi);
awesome.info();