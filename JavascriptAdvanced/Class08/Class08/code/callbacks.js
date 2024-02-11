console.log("==================== Callback Functions ====================");
// => function that is passed as an argument to another function and is expected to be executed after some async operation is completed

// Common use-cases:

// 1) Asynchronous Operations
function performAsyncOperation(callback) {
    // debugger;
    console.log("Async operation started");
    setTimeout(() => {
        const result = "Async operation completed";
        callback(result);
    }, 2000);
    console.log("... Processing ...");
}
performAsyncOperation(console.log);


// 2) Event Handling
// document.getElementById("clickMeBtn").addEventListener("click", (e) => {
//     // yes, this is a callback function
//     console.log(e.target.id);
// })
function handleClick(event) {
    console.log(`The button with id "${event.target.id}" is clicked`);
}
document.getElementById("clickMeBtn").addEventListener("click", handleClick); // callback 


// 3) Higher Order Functions callbacks
let testArray = [1, 2, 3, 4, 5, 6, 7];
testArray.forEach(x => console.log(x));
// x => console.log(x) ===> callback function


// 4) Making request to an API
// renderFunction => callback
function renderDataFromApi(url, renderFunction) {
    // the anonymous function in .then & .catch, also a callback
    fetch(url)
        .then(response => response.json())
        .then(result => {
            renderFunction(result);
        })
        .catch(error => {
            console.error(error);
        })
}

function showDataInConsole(data) {
    console.log(data);
}
renderDataFromApi("https://api.chucknorris.io/jokes/random", showDataInConsole);

// Q: STO E RAZLIKATA POMEGU DOLNIVE PRIMERI ????????????????????????
renderDataFromApi("https://api.chucknorris.io/jokes/random", console.log);
renderDataFromApi("https://api.chucknorris.io/jokes/random", x => console.log(x));
renderDataFromApi("https://api.chucknorris.io/jokes/random", function (data) {
    console.log(data)
});
renderDataFromApi("https://api.chucknorris.io/jokes/random", data => {
    console.log(data)
});
// they are all doing the same thing, the only difference is the SYNTAX !


console.log("");
console.log("==================== Callback Functions vs Functions as an argument ====================");
// Callback => expected to be executed later, usually after an asynchronous operation or an event (executed asynchroniously)
// Function as an argument => not expected to be executed later (executed synchroniously)

function callbackFunc(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
    console.log("Processing...");
}
callbackFunc(() => console.log("GREAT JOB !!!"))

function functionArguments(func1, func2) {
    console.log("Executing functions ...");
    func1();
    func2();
}
functionArguments(() => console.log("Hello from func1"), () => console.log("Hello from func2"))