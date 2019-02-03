'use strict';

/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/

class Student {
    name: string;
    knowledge: number;

    constructor (inputName: string) {
        this.name = inputName;
        this.knowledge = 50;
    }
    
    learn() {
        this.knowledge += 5;
    }
    question(inputTeacher: Teacher) {
        inputTeacher.answer();
    }
}

class Teacher {
    name: string;
    patience: number;

    constructor (inputName: string) {
        this.name = inputName;
        this.patience = 50;
    }

    teach(inputStudent: Student) {
        inputStudent.learn();
    }
    answer() {
        this.patience -= 5;
    }
}

let Adam: Student = new Student('Adam');
let Mrs_Holloway: Teacher = new Teacher('Mrs. Holloway');

Adam.question(Mrs_Holloway);
Mrs_Holloway.teach(Adam);

console.log(Mrs_Holloway)
console.log(Adam);