console.log("");
console.log("===================== EVENTS =====================");

// Find the element on which you want to add an event listener
const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const buttonThree = document.getElementById("btnThree");

// Listen for a click event on the #clickMeBtn
buttonOne.addEventListener("click", function () {
    console.log("Button 1 has been clicked!");
});

// Listen for a click event and catching the event object
// The event object in JavaScript is automatically passed as an argument to the event handler function when the event occures
buttonTwo.addEventListener("click", function (event) {
    console.log("Button 2 has been clicked!");
    console.log("This is the event:");
    console.log(event);
    console.log(event.target);
    // The e.target is the object representation of the element that is clicked
    // console.log(event.target === this); // true
    console.log(`The id of the clicked element is '${event.target.id}'`);
});

// NOTE: The standard event handler function in JavaScript typically receives only one parameter: the event object !!!

// Using a pre-defined function instead of annonymous one
function handleClick(event) {
    console.log("Button 3 has been clicked!");
    console.log("This is the event:");
    console.log(event);
}

// buttonThree.addEventListener("click", handleClick());
buttonThree.addEventListener("click", handleClick);
