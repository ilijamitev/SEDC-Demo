
// EXERCISE
function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students === undefined ? [] : students;
    this.subjects = subjects === undefined ? [] : subjects;
    this.start = new Date(start);
    this.end = new Date(end);
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function () {
        this.students.forEach(student => {
            console.log(student);
        })
    };
    this.printSubjects = function () {
        this.subjects.forEach(subject => {
            console.log(subject);
        });
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overideClasses = function (classes) {
        this.numberOfClasses = classes <= 3
            ? console.log("error") : classes;
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (someAcademy) {
        this.academy = someAcademy;
        someAcademy.students.push(this);
    }
    this.startSubject = function (someSubject) {
        if (this.academy === null) {
            console.log("You can't enrol on a subject without academy!");
        } else if (!this.academy.subjects.filter(sub => sub.title === someSubject.title)?.length) {
            console.log("There is no subject like that in your academy!");
        } else if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
            this.currentSubject = someSubject;
            someSubject.students.push(this);
        } else {
            this.currentSubject = someSubject;
            someSubject.students.push(this);
        }
    }
}

let javascript = new Subject("javascript", false, undefined, []);
let html = new Subject("html", false, undefined, []);
let cSharp = new Subject("C#", false, undefined, []);
let codeCademy = new Academy("Code", [], [javascript, html, cSharp], "12/10/2019", "12/10/2020");
let bob = new Student("Bob", "Bobsky", 35);
let jill = new Student("Jill", "Riely", 29);