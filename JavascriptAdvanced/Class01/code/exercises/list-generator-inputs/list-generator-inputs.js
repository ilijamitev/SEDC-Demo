console.log("========== List Generator dynamically from inputs ==========");
/*
    1. Create 3 inputs:
       1.1 Color
       1.2 FontSize
       1.3. Items

    2. Create a button for generating unordered lists

    3. When the button is clicked generate a new ul element with the color, font size, and items from the inputs

    NOTE: Items should be added separated by "," in the input
*/

// ==================== Selecting Elements ====================

const colorInput = document.getElementById("color");
const fontSizeInput = document.getElementById("fontSize");
const itemsInput = document.getElementById("items");
const generateListBtn = document.getElementById("generateListBtn");
const listContainer = document.getElementById("listContainer");


// ==================== Declaring Functions ====================

// Function for handling the event
// BITNO!!!!!!!!!!!!!!! Prvo namesto vo posebni funkcii da im go iskucam tuka celiot kod, pa da napravam REFACTOR ====> ZOSTO E BITEN REFACTOR

function handleGenerateList() {
    // 1. Get input values
    const color = colorInput.value;
    const fontSize = fontSizeInput.value;
    const items = itemsInput.value;

    // 2. Validate input values
    if (!(color && fontSize && items)) {
        return;
    }

    // 3. Create UL element 
    const ul = document.createElement('ul');
    ul.style.marginTop = "5px";
    ul.style.color = color;
    ul.style.fontSize = `${fontSize}px`;

    // 4. Add items in the UL element
    const itemsArray = items.split(",");
    for (const item of itemsArray) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }

    // 5. Append the UL element to the container
    listContainer.appendChild(unorderedList);

    // 6. Reset the input values
    colorInput.value = '';
    fontSizeInput.value = '';
    itemsInput.value = '';
}

// WITH REFACTOR => Better code 
// function handleGenerateList() {
//     const color = colorInput.value;
//     const fontSize = fontSizeInput.value;
//     const items = itemsInput.value;

//     let validInputs = validateInputs(color, fontSize, items);
//     if (!validInputs) {
//         return;
//     }
//     const unorderedList = createUnorderedList(color, fontSize, items)
//     listContainer.appendChild(unorderedList);

//     clearInputFields();
// }

// Function for creating an unordered list
function createUnorderedList(color, fontSize, items) {
    const ul = document.createElement('ul');

    ul.style.marginTop = "5px";
    ul.style.color = color;
    ul.style.fontSize = `${fontSize}px`;

    const itemsArray = items.split(",");
    for (const item of itemsArray) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }

    return ul;
}

// Function to clear input fields
function clearInputFields() {
    colorInput.value = '';
    fontSizeInput.value = '';
    itemsInput.value = '';
}

// Function to validate inputs
function validateInputs(color, fontSize, items) {
    // return !!(color && fontSize && items);
    return Boolean(color && fontSize && items);
}


// ==================== Handling Events ====================
generateListBtn.addEventListener("click", handleGenerateList);

