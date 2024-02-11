console.log("======================= FUNCTIONS =======================");
// => reusable piece of code

// Benefits of using functions:
// 1) Reusability
// 2) Modularity (break larger code into smaller manageable parts)
// 3) Readability

// Two-step process
// 1) Function Declaration
// 2) Function Execution


// ============== FUNCTION TYPES ==============

// ======= Function without parameters and return =======
function sayHello() {
    console.log("Hello!");
}
// let hello = sayHello(); // undefined, it does not have a return statement
sayHello();


// ======= Function with parameters, without return =======
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
// let greet = greet(); // undefined
greet();


// ======= Function without parameters, but with return =======
function getPI() {
    return Math.PI;
}
const pi = getPI();
console.log(pi);


// ======= Function with parameters and return =======
function multiply(num1, num2) {
    return num1 * num2;
}
let multiplyResult = multiply(250, 3);
console.log(multiplyResult);


// ======= Function with more complex parameters =======

// Example: array of numbers
function getAverage(numbersArray) {
    let sum = 0;
    for (let number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}
// let average = getAverage(123) // ERROR
let average = getAverage([123, 32, 43, 545, 300])
console.log(average);

// Example: array of objects
let students = [
    { id: 1, firstName: "Bob", lastName: "Bobski" },
    { id: 2, firstName: "Boba", lastName: "Bobski" },
    { id: 3, firstName: "John", lastName: "Johnski" },
];

function printStudents(studentsArray) {
    for (let student of studentsArray) {
        console.log(`Student #${student.id}. ${student.firstName} ${student.lastName}`);
    }
}

printStudents(students);
printStudents(["Bob Bobsky", "Pink Panther"]); // Student #undefined. undefined undefined


// ======= Anonymous Function used in event handling =======
let clickMeBtn = document.querySelector("#clickMeBtn");
clickMeBtn.addEventListener("click", function () {
    console.log("The button is clicked :)");
})


// ======= many more... (will be learnt througout this subject) =======



// ============== RETURN KEYWORD ==============
// Use cases:
// 1) Returning a Value
// 2) End function execution

function sum(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return; // end function execution if the arguments aren't valid numbers
    }
    return num1 + num2;
}

let result = sum(0, 20.423423);
console.log(result);



console.clear();


// THE BIG QUESTION => "WHEN TO PUT SOMETHING IN A FUNCTION ?!?!"

// The sense of what to put into a function improves with experience and lots of coding ...
// However here are some of the cases when you should use a function:

// 1) Code duplication => if you use same code more than once, add it in function

let numbersArray = [123, 123, 42, 353, 545, 54];

// ***** WITHOUT FUNCTION => BAD EXAMPLE *****

let sum1 = 0;
for (let number of numbersArray) {
    sum1 += number;
}
let average1 = sum1 / numbersArray.length;

// ... CODE CODE CODE ...
numbersArray.push(423, 343, 434);
// ... CODE CODE CODE ...

let sum2 = 0;
for (let number of numbersArray) {
    sum2 += number;
}
let average2 = sum2 / numbersArray.length;


// ***** WITH FUNCTION => GOOD EXAMPLE *****

function calculateAverage(numbersArray) {
    let sum = 0;
    for (let number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}

let firstQuartalAvg = calculateAverage(numbersArray);
// ... CODE CODE CODE ...
numbersArray.push(124, 4242, 2434);
// ... CODE CODE CODE ...
let secondQuartalAvg = calculateAverage(numbersArray);

// 2) Modularity => breaking down your code into smaller, manageable chunks by separating logical operations in functions 
