console.log("================== Student Constructor Function ==================");
/*
    Create a constructor function for Student objects with:
    * Properties:
        * firstName
        * lastName
        * birthYear
        * academy
        * grades - array of numbers
    * Methods:
        * getAge() - returns age of student
        * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
        * getGradesAverage() - returns the average of the student grades
    *Create an array with 3 students   
*/

function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    // Method to calculate age
    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    // Method to get student information
    this.getInfo = function () {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    };

    // Method to calculate average grades
    this.getGradesAverage = function () {
        if (!this.grades.length) {
            return;
        }

        let gradesSum = 0;
        for (const grade of this.grades) {
            gradesSum += grade;
        }
        return gradesSum / this.grades.length;
    };
}