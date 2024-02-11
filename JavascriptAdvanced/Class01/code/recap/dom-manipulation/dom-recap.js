console.log("===================== DOM MANIPULATION =====================");

console.log("");
console.log("============= Selectors =============");
// *1) document.getElementById( id ) - Selects ONE element by the given id
//  2) document.getElementsByClassName( class ) - Selects COLLECTION of elements by the given class ( even if there is one element, it is still in a collection )
//  3) document.getElementsByTagName( tag ) - Selects COLLECTION of elements by the given HTML tag ( even if there is one element, it is still in a collection )
// *4) document.querySelector( css selector ) - Selects the FIRST entity of any query selector result
//  5) document.querySelectorAll( css selector ) - Selects COLLECTION of entities of any query selector result
const title = document.querySelector("h1");
const firstParagraph = document.querySelector("[name='Paragraph One']") // select by attribute
const secondParagraph = document.getElementsByTagName("p")[1];
const firstDiv = document.getElementById("firstDiv");
const secondDiv = document.querySelector(".secondDiv")



console.log("");
console.log("============= Get or Change data of an Element =============");

// ***** TEXT *****
// element.innerText = "New text"   
// element.textContent = "New text"  
console.log(title.innerText); // shows the human-readable text, excludes content hidden by css
console.log(title.textContent); // includes content hidden by css

// ***** ATTRIBUTES *****
// element.getAttribute("attributeName")
// element.setAttribute("attributeName", "new-value")
// element.removeAttribute("attributeName")
title.firstChild.removeAttribute("hidden")
let paragraphCustomAttribute = firstParagraph.getAttribute("customAttribute")
console.log(paragraphCustomAttribute);
firstParagraph.setAttribute("bob", "bobsky"); // add new attribute (bob) and value (bobsky)

// ***** STYLE *****
// element.style.nameOfCssProperty = ""
title.style.color = "darkred"



console.log("");
console.log("============= Creating and Appending new Elements =============");

// document.createElement("element-name")
// element.appendChild(child-element)
let h2 = document.createElement("h2");
h2.innerText = "h2 created by JS"
firstDiv.appendChild(h2);
let paragraph = document.createElement("p");
paragraph.innerText = "This is paragraph created with document.createElement('p')";
paragraph.style.backgroundColor = "green";
firstDiv.appendChild(paragraph);

// element.innerHtml = "";
secondDiv.innerHTML = "<h2>This is created using innerHtml</h2>";
secondDiv.innerHTML += "<p style='color:magenta;'>Hello this is a magenta paragraph</p>"

let fullName = "Bob Bobsky";
secondDiv.innerHTML = "";
secondDiv.innerHTML = `
    <h2>This is created using innerHtml</h2>
    <p id="magentaText" style='color:magenta;'>Hello this is a magenta paragraph</p>
    <h3>Hello from <i>${fullName}</i></h3>
    <p>Yes, you can use string interpolation when manipulating with elements :)</p>
`;


// Example => function that makes element's text upper-cased
function makeElementTextUpperCased(element) {
    element.innerText = element.innerText.toUpperCase();
}

makeElementTextUpperCased(firstParagraph);
makeElementTextUpperCased(document.querySelector("#magentaText"));
