console.log("=================== Exercises ===================")
// 1. Read the requirment
// 2. Brake the requirement into smaller pieces
// 3. Implement them separately

class Academy {
    constructor(name, students, subjects, start, end) {
        this.name = name;
        // this.students = students === undefined ? [] : students;
        this.students = !students ? [] : students;
        this.subjects = !subjects ? [] : subjects;
        this.start = new Date(start);
        this.end = new Date(end);
        this.numberOfClasses = this.subjects.length * 10;
    }

    printStudents() {
        if (!this.students.length) {
            console.log("Still no students assigned.");
            return;
        }
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName}`)
        });
    }

    printSubjects() {
        if (!this.subjects.length) {
            console.log("Still no subjects assigned.");
            return;
        }
        this.subjects.forEach(subject => {
            console.log(subject.title)
        });
    }
}

class Subject {
    constructor(title, isElective, academy, students) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = students;
    }

    overrideClasses(classesNumber) {
        if (!classesNumber || classesNumber <= 3) {
            throw new Error("Classes cannot be less than 3")
        }
        this.numberOfClasses = classesNumber;
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    startAcademy(academyInput) {
        if (!(academyInput instanceof Academy)) {
            throw new Error("Invalid value for academy entered")
        }
        this.academy = academyInput;
        academyInput.students.push(this);
    }

    startSubject(subjectInput) {
        if (!(subjectInput instanceof Subject)) {
            throw new Error("Invalid subject input")
        }
        if (this.academy === null) {
            throw new Error("You can't enrol on a subject without an academy!");
        }
        if (!this.academy.subjects.some(sub => sub.title === subjectInput.title)) {
            throw new Error(`There is no subject named '${subjectInput.title}' in your academy!`);
        }
        if (this.currentSubject === subjectInput) {
            throw new Error(`You've been already assigned to the '${subjectInput.title}' subject!`);
        }

        if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
            this.currentSubject = subjectInput;
            subjectInput.students.push(this);
        } else {
            this.currentSubject = subjectInput;
            subjectInput.students.push(this);
        }
    }
}

let javascript = new Subject("javascript", false, null, []);
let html = new Subject("html", false, null, []);
let cSharp = new Subject("C#", false, null, []);
let codeAcademy = new Academy("Code", [], [javascript, cSharp], "12/10/2019", "12/10/2020");
let bob = new Student("Bob", "Bobsky", 35);
let jill = new Student("Jill", "Riely", 29);

try {
    bob.startAcademy(codeAcademy)
    // bob.startSubject(html);
    bob.startSubject(javascript)
    // bob.startSubject(javascript)
    bob.startSubject(cSharp)
} catch (error) {
    console.error(error);
}
