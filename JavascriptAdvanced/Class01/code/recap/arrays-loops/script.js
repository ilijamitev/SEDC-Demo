console.log("===================== Arrays =====================");
// collection of related data
// zero-indexed 

// INFO: DECKI NEMORA DA KUCATE SEGA, BITNO E DA GI SLEDITE VNIMATELNO PREDAVANJATA I DA GI SFATITE KONCEPTITE
// Vaseto kucanje e vo najgolema mera doma (prekucuvanje od cas, resavanje domasni, probuvanje raboti)
// Na cas resavanje zadaci i workshop

// let mixedArray = [true, 234, "String", NaN, undefined, 343_434] // avoid using mixed types in an array
let testArray = [1, 23, 54, 545_454, 43, 423, 4343];
console.log(testArray[0]);
console.log(testArray.length);

// ========= Array built-in methods =========

// push(item) => adds an item/items at the end of the array
testArray.push(100);
testArray.push(500, 1000, 1500);
// pop( ) => Removes an item from the end of the array and returns it
let lastItem = testArray.pop();
// unshift(item) => adds an item at the beginning of the array
testArray.unshift(300);
// shift() => removes an item from the beginning of the array and returns it
let firstItem = testArray.shift();
// splice() => removes elements from an array and, if necessary, inserts new elements in their place
testArray.splice(3, 1);
console.log(testArray);
// adding new items at the place of the removed ones
testArray.splice(3, 1, 1_000_000);
// delete everything starting from index 1
testArray.splice(1);

// ========= Storing complex data types in arrays =========

// Ex. Storing objects (most common scenario)
let objectsArray = [
    { id: 1, firstName: "Bob", lastName: "Bobski" },
    { id: 2, firstName: "Boba", lastName: "Bobski" }
];
console.table(objectsArray); // display data in the console in form of a table 
console.log(objectsArray[1].firstName);

// Ex. Storing functions (not so common thing to do)
function sum(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
let functionsArray = [
    sum,
    subtract
];
console.log(functionsArray[0](20, 50));



console.log("");
console.log("===================== Loops =====================");
// => repetitive execution of code
// => iterate over collections of data (arrays)

// ========= WHILE =========
let whileTestArray = [2, 12, 34, 54, 23, 101];
let counter = 0;
while (counter < whileTestArray.length) {
    console.log(whileTestArray[counter]);
    counter++;
}

// ========= DO WHILE =========
let input = "";
// prompt the user to enter name until valid input is entered
do {
    input = prompt("Insert your name");
} while (input === undefined || input === "" || input === null);
console.log(input);

// ========= FOR =========
let students = ["Sirma", "Slavko", "Boris", "Saso", "Vladimir", "Nadica", "Kiro"];
for (let i = 0; i < students.length; i++) {
    console.log(`Student #${i + 1}: ${students[i]}`);
}

// ========= FOR OF =========
for (let student of students) {
    if (student.startsWith("V")) {
        console.log("The following student's name starts with the letter 'V'");
    }
    console.log(`Student ${students.indexOf(student) + 1}: ${student}`);
}


// ========= BREAK & CONTINUE =========
let numbers = [123, 23, 424, 343, 5, 54, 77];

// BREAK
// => used to terminate the loop immediately when a certain condition is met, regardless of whether the loop condition remains true or not

// Example: Find if a certain number exists in an array
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 343) {
        console.log(`We found our number '${numbers[i]}' at index ${i}, exiting the loop ...`);
        break;
    }
    console.log(`Number: ${numbers[i]}`);
}

// CONTINUE
// => skips the current iteration of the loop and proceeds to the next iteration
// => the code after the continue keyword won't be executed during that iteration

// Example: Log only numbers that are not divisible by 3
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        continue;
    }
    console.log(`Number: ${numbers[i]}`);
}