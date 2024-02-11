console.log("============ List generator from an array ============");
/*
    1. Create an array of 5 names
    2. Create an HTML page with:
        2.1. A header
        2.2. An empty unordered list
        2.3. A button
    3. When the button is clicked it should fill in the empty unordered list with the names of the array
*/

let names = ["Bob", "Jane", "John", "Jill", "Bill"];

// Selecting elements
const namesUnorderedList = document.querySelector(".names")
const namesBtn = document.querySelector("#namesBtn");

// Declaring Functions
function populateUnorderedList(element, namesArray) {
    // Q: WHAT HAPPENS IF I DON'T CLEAR THE INNER HTML ???????????????
    // Clear existing list items if any
    element.innerHTML = "";
    for (const name of namesArray) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        element.appendChild(listItem);
    }
}

// Handling Events
namesBtn.addEventListener("click", function () {
    populateUnorderedList(namesUnorderedList, names);
});
