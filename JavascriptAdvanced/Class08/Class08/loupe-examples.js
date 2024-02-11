// 1) Synchronious execution
function first() {
    console.log("First thing!");
}

function second() {
    console.log("Second thing!");
    // first();
    // example with many first()
}

console.log("Begin");
first();
second();
console.log("End");


// 2) Asynchronious execution

// Async opetaion
console.log("Program started...");
setTimeout(function () {
    console.log("This is printed after 2 seconds!");
}, 2000);
console.log("Processing...");

// Handling Event 
function handleClick() {
    console.log("The button is clicked");
}
$.on("#clickMeBtn", "click", handleClick);

// Callback function
function performAsyncOperation(callback) {
    console.log("Async operation started");
    setTimeout(function () {
        callback("Async operation completed");
    }, 2000);
    console.log("... Processing ...");
}
performAsyncOperation(console.log);