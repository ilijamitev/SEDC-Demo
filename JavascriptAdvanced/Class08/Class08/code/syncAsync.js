console.log("=============== Debugging ===============");
// => the process of identifying, isolating, and fixing errors or bugs in our program 
// => ensure that the program behaves as expected
// => common ways to debug in Javascript
// 1) console.log
// 2) using browsers Developer Tools (Sources tab)
// 3) using keyword debugger;

// console.log("This is before debugger;");
// debugger;
// console.log("This is after debugger;");

console.log("");
console.log("=============== Synchronous and asynchronous executing ===============");
// => JAVASCRIPT IS SINGLE THREADED !!! 
// => the code is executed only on one place in the browser (the call stack)
// => at any given point in time, that single JS thread is running at most ONE line of JS code

// ***Synchronous execution***
// => code is executed sequentially, one line at a time
// => each line of code must be completed before moving on to the next one
// => blocking nature

function first() {
    console.log("First thing!");
}

function second() {
    console.log("Second thing!");
}

first();
second();


// ajde da se osigurame kako se izvrsuva kodot
// IMA LI NEKOJ IDEJA KOGA POCNUVA DA SE IZVRSUVA NASIOT JS KOD ??????????????
// ======================== DEBUGGING => da im go stavam gore ======================


// ========== SEGA PRED DA PREMINEME NA ASYNCHRONO IZVRSUVANJE NA KOD DA SPOMNEME DVE BUILT IN FUNKCII KOI KE NI POMOGNAT DA GO POSTIGNEME ISTOTO ==========


// ***Asynchronous execution***
// => ability of the program to perform tasks 'in the background'
// => started executing some code, but not waiting for it to complete before moving on to the next line of code
// => when one line of code gets executed later on
// => most common examples: 
// 1) making http request with fetch (Fetch API) & handling the responses without freezing the user's interface
// 2) handling events

// KLASICEN PRIMER => POVIK DO API I CEKANJE NA REZULTAT BEZ PRITOA DA SE UKOCI APLIKACIJATA


// *setTimeout*
// => executes a function (first argument) when a given time passes (second argument)
// setTimeout(() => {
//     console.log("This is printed after 2 seconds!");
// }, 2000); // 2000 ms => 2s

// *setInterval*
// => executes a function (first argument) repeatedly on a specified time interval (second argument)
// setInterval(() => {
//     console.log("This is printed every 3 seconds!");
// }, 3000);

console.clear();

// debugger;
function greet(name) {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, 2500);
}
// greet("Saso")
console.log("This is printed second ?!");

// Synchronous vs Asynchronous execution
// debugger;

// Synchronous
console.log(1);
console.log(2);
console.log(3);
// Result:
// 1
// 2
// 3

// Asynchronous
setTimeout(() => console.log(4), 1000)
console.log(5);
setTimeout(() => console.log(6), 2000);
// Result:
// 5
// 4
// 6
