console.log("======================= OBJECTS PART 1 =======================");
// => representation of entities that exist in the real world
// => consists of PROPERTIES and METHODS

// NEMORA TOJ ENTITET DA E FIZICKI, NEGO MOZE NEKOJA DEJNOST NEKOI 
// PRIMER: menadziranje na finansii vo firma (prihodi, rashodi, plati, ddv itn...)

// !!!!!!!!!!!! PRVO OBJEKTITE PA POSLE PRIMERITE ZA THIS !!!!!!!!!!!

// Anonymous object, created using object-literals (curly brackets {})
let dog = {
    name: "Sparky",
    color: "brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    bark: function () {
        console.log("BARK BARK BARK");
    },
    // 'this' examples
    getThis: this,
    printThisAnonymous: () => {
        console.log(this);
    },
    printThis: function () {
        console.log(this);
    },
}

console.log(dog.getThis); // window object
dog.printThisAnonymous()  // window object
dog.printThis() // the dog object
// TIP: when using anonymous objects use 'function' for creating methods


// Created using Constructor Notation Template (Constructor Function)
function Person(firstName, lastName) {
    this.firstName = firstName ? firstName : "unnamed"; // ternary operator => if 'firstName' (parameter) is truthy than assign it to the this.firstName property, else assign "unnamed" to the property...
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
    // 'this' examples
    this.getThis = this;
    this.printThisAnonymous = () => {
        console.log(this);
    };
    this.printThis = function () {
        console.log(this);
    };
}

let john = new Person("John", "Doe");
console.log(john.getThis); // current Person object
john.printThisAnonymous(); // current Person object
john.printThis(); // current Person object

function test() {
    console.log(this);
}
test(); // window object


// !!!!!!!!!!!! SAMO DA GI SPOMNAM !!!!!!!!!!!!

console.log("");
console.log("=========== The 'window' object ===========");
// the global object !!!
// variables and functions declared globally become properties and methods of the window object
function testWindowObject() {
    console.log("Hello from function");
}
window.testWindowObject();
var testWindow = "test"
console.log(window.testWindow);


console.log("");
console.log("=========== The 'document' object ===========");
// represents the web page (HTML&CSS) loaded in the window and provides methods and properties to interact with the HTML document



console.clear();
console.log("");
console.log("======================= OBJECT METHODS =======================");

// ***create***
// => method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument

let person = {
    firstName: "Bob",
    "lastName": "Bobsky",
    greet: function () {
        console.log("Hello!");
    }
}
console.log(person);

// !!!!!!!!!!!!!! TUKA SO HOVER CREATE I DA IM GO SPOMNAM PROTOTYPE !!!!!!!!!!!
// bukvalno znaci nasleduvanje, t.e. novokreiraniot objekt ke gi ima site elementi na objektot sto go isprakjame kako argument
let bob = Object.create(person);
console.log(bob);
console.log(bob.firstName);


// ***assign***
// => method that can merge two objects into one. It accepts two objects and tries to merge the second object into the first one
let bobsAddress = {
    street: "Bobsky St.",
    city: "Skopje"
}

let bobsInfo = Object.assign(bob, bobsAddress);
console.log(bobsInfo);
console.log(bobsInfo.lastName);
console.log(bobsInfo.street);



console.log("");
console.log("============== Exploring the object ==============");

let barnie = {
    name: "Barnie",
    age: 1,
    bark: function () {
        console.log("Aw Aw Aw !");
    },
}

// *** keys ***
// => returns all the property and method names of our object in an array
let barniesKeys = Object.keys(barnie);
console.log(barniesKeys);

// *** values ***
// => returns all values from our properties and methods ( the whole functions ) in an array
let barniesValues = Object.values(barnie);
console.log(barniesValues);

// *** entries ***
// => returns an array of arrays that have a key and value pair
let keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);

// TYPICALLY USED FOR TRANSFORMING OBJECT'S PROPERTIRES/VALUES !!!!!!!!!!


console.log("");
console.log("============== Changing the object accessibility ==============");

// *** freeze ***
// => completely lock our object for any modifications
// => adding new properties/methods is not allowed
// => changing the values of existing is also not allowed

Object.freeze(barnie);   // !!!!!!!! DA GO ZAKOMENTIRAM PA OTKOMENTIRAM !!!!!!!!!!
console.log(barnie);
barnie.color = "white"; // won't add new propery
console.log(barnie.color);
barnie.name = "Kuce"; // won't change the existing value
console.log(barnie.name);

// *** seal ***
// => can't add new properties or methods
// => can change the existing ones

let marley = {
    name: "Marley",
    color: "brown"
}

Object.seal(marley);
marley.age = 10; // won't add new property
console.log(marley.age);
marley.color = "white"; // will change the existing value with the newly assigned
console.log(marley.color);