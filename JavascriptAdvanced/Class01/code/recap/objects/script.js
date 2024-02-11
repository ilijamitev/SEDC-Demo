console.log("======================= OBJECTS =======================");
// representation of entities that exist in the real world
// consists of PROPERTIES and METHODS

// 1) created using curly brackets (object literal) {} 
let dog = {
    name: "Sparky",
    color: "Brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    favoriteFood: ["Carrot", "Watermellon", "Bacon"],
    bark: function () {
        console.log("BARK BARK BARK");
    },
    eat: function (food) {
        // for (const favourite of this.favoriteFood) {
        //     if (favourite === food) {
        //         console.log("Aw Aw! My favorite!")
        //     }
        // }
        if (this.favoriteFood.includes(food)) {
            console.log("Aw Aw! My favorite!")
        }
        console.log("NOM NOM NOM");
    }
}

// 2) created using the 'new' keyword
let otherDog = new Object();
otherDog.name = "Chapo";
otherDog["isStreetDog"] = true;

// 3) created using Constructor Notation Template (Constructor Function)
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Q: HOW TO GET FULL NAME ???????????????????
    // this.fullName = `${this.firstName} ${this.lastName}`;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
    this.printThis = function () {
        console.log(this);
    }
}

// BONUS:
// ?? => nullish coalescing operator
// || => logical OR
// ? : => ternary operator
function Dog(name, color, age, favouriteFood, owner) {
    this.name = name ?? "unnamed"; // if the value of name is *undefined or null*, then assign "unnamed" to the property
    // SKIP FOR NOW !!!
    this.name = name || "unnamed" // if the value of name is *any kind of falsy value*, then assign "unnamed" to the property
    this.name = name ? name : "unnamed"; // ternary operator => if 'name' is truthy than assign it (name) to the this.name property, if not assign "unnamed" to the property....
    this.color = color;
    this.age = age;
    this.owner = owner;
    this.favoriteFood = favouriteFood;
    this.bark = function () {
        console.log("BARK BARK BARK");
    };
    this.eat = function (food) {
        if (this.favoriteFood.includes(food)) {
            console.log("Aw Aw! My favorite!")
        }
        console.log("NOM NOM NOM");
    };
    this.printInfo = function () {
        console.log(`The dog ${this.name} is of color ${this.color} and has ${this.age} years.The owner name is ${this.owner.getFullName()}`);
    };
}

let ilija = new Person("Ilija", "Mitev");
ilija.printThis();
let aks = new Dog("Aks", "Apricot Fawn", 5, ["Dog food", "Hazelnuts"], ilija)

aks.printInfo();
aks.eat("Hazelnuts")

// Accessing objects properties
console.log(aks.name);
console.log(aks["name"]);

// Updating values
aks.name = "Baks";
aks["age"] = 6;

// Objects in Javascript are DYNAMIC !!! 
// => meaning you can add new properties and methods after the objects creation
aks.likesToCuddle = true;
console.log(aks);



console.log("======================= BONUS PART =======================");
// we will dive deeper into this topic in the following classes
// this is just a brief introduction 

console.log("=========== The 'window' object ===========");
// the global object !!!
// variables and functions declared globally become properties and methods of the window object
console.log(window);
console.log(this); //global this === window
console.log(window.innerWidth);

// alert();
// prompt();
// this.alert();
// window.prompt()
function testWindowObject() {
    console.log("Hello from function");
}
this.testWindowObject();
window.testWindowObject();
// SKIP FOR NOW...
// var testWindow = "Test with var";
// let testWindow2 = "Test with let";
// console.log(window.testWindow); 

console.log("=========== The 'document' object ===========");
// represents the web page (HTML&CSS) loaded in the window and provides methods and properties to interact with the HTML document
console.log(window.document);
console.log(document);
console.log(document.children);
console.log(document.querySelector("h1").textContent);