console.log(" Title Generator ".padStart(30, "=").padEnd(43, "="));
/*
    * Create 3 inputs:
        * Color
        * FontSize
        * Text
    * Create a button for generating titles
    * When the button is clicked generate a new h1 element with the color, font size, and text from the inputs
*/

// Selecting the elements
const generateBtn = document.getElementById("generateTitleBtn");
const titlesDiv = document.getElementById("titles");
const titleColor = document.getElementById("title-color");
const titleFontSize = document.getElementById("title-font-size");
const titleText = document.getElementById("title-text");

// Declaring Functions
function generateTitle() {
    // => First Approach
    let titleElement = document.createElement("h1");
    titleElement.style.color = titleColor.value;
    titleElement.style.fontSize = `${titleFontSize.value}px`;
    titleElement.textContent = titleText.value;
    titlesDiv.appendChild(titleElement);
    // => Second Approach
    // titlesDiv.innerHTML += `<h1 style="color: ${titleColor.value}; font-size:${titleFontSize.value}px">${titleText.value}</h1>`
    resetInputs();
}

function resetInputs() {
    titleColor.value = "";
    titleFontSize.value = "";
    titleText.value = "";
}

// BONUS
function generateTitlePure(color, fontSize, text) {
    let titleElement = document.createElement("h1");
    titleElement.style.color = color;
    titleElement.style.fontSize = `${fontSize}px`;
    titleElement.textContent = text;
    return titleElement;
}

function handleGenerateBtnClick() {
    var titleElement = generateTitlePure(titleColor.value, titleFontSize.value, titleText.value);
    titlesDiv.appendChild(titleElement);
    resetInputs();
}



// Handling Events
generateBtn.addEventListener("click", generateTitle);

console.clear();

let test = {
    testmethod: function () {
        return 3242;
    },
    testmethod2: () => {
        return this.testmethod()
    }
}
console.log(test.testmethod2())