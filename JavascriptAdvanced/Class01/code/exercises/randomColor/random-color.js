console.log("============ Random color page ============");
/*
    Create an HTML page
    On every refresh the page should pick a random color and change the background of the page
    The RGB values of the color should be shown in the center of the page on every restart
*/

// 2.1. Handle page refresh
// window.addEventListener("DOMContentLoaded", changeBackgroundColor)
// window.addEventListener("load", changeBackgroundColor)
window.onload = changeBackgroundColor;

// 2.2. Pick (Generate) random color
function generateRandomRgbColor() {
    // We use Math.floor to get integer from the decimal
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// 2.3. Change the background
function changeBackgroundColor() {
    const color = generateRandomRgbColor();
    document.body.style.backgroundColor = color;
    // 3.2. Add text in it with the value of the RGB color ex. rgb(233, 144, 100)
    let rgbElement = document.querySelector("#rgbText");
    rgbElement.textContent = color;
}
