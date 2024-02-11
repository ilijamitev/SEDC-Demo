console.log("====================== DESTRUCTURING ======================");
// => breaking down a complex structure into simpler parts
// => cleaner syntax to get items from arrays, or property-values from objects, and put them into distinct variables

console.log("");
console.log("============== Object Destructuring ==============");

let userObj = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "bloodGroup": "A-",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": {
        "color": "Black",
        "type": "Strands"
    },
    "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
    }
}

// => take id, firstName, lastName (WITHOUT DESTRUCTURING)
// const id = userObj.id;
// const firstName = userObj.firstName;
// const lastName = userObj.lastName;

// => take id, firstName, lastName (WITH DESTRUCTURING)
// const { id, firstName, lastName } = userObj;
// console.log(id, firstName, lastName);

// => take firstName, lastName, age
// const { userFirstName, userLastName, age } = userObj;
// console.log(userFirstName, userLastName, age);  // undefined, undefined, 50

// We must use the same key-names (property names) !!!  

// !!!!!!!!!!!!! DA SE NAVRATAM NA KRAJ ZA OVA 
// *However, there is workaround syntax even for that* 
// Syntax: { propertyName : ourCustomVariableName } = ourObject
const { firstName: userFirstNameCustom } = userObj;
console.log(userFirstNameCustom);

// => take adress latitude and longitude (WITHOUT DESTRUCTURING)
let latitude = userObj.address.coordinates.lat;
let longitude = userObj.address.coordinates.lng;

// ???????????????????? NEKOJ IDEJA KAKO DA GI ZEMEME SO DESTRUCTURING ????????????

// => take adress latitude and longitude (WITH DESTRUCTURING)
// const { lat, lng } = userObj.address.coordinates;
// console.log(lat, lng);

// => take adress city, latitude and longitude (WITH DESTRUCTURING)
// destructuring nested objects
const { city, coordinates: { lat, lng } } = userObj.address;
console.log(city, lat, lng);



console.log("");
console.log("============== Parameters Destructuring ==============");

// without destructuring
// function getUserFullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// with destructuring... nothing special, even worse...
// function getUserFullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// with PARAMETERS DESTRUCTURING :)
function getUserFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

let fullName = getUserFullName(userObj)
console.log(fullName);



console.log("");
console.log("============== Array Destructuring ==============");

const testArray = [100, 300, 5_000, 400, 10_000];

// => take first 3 items from the array (WITHOUT DESCTRUCTURING)
const firstNum = testArray[0];
const secondNum = testArray[1];
const thirdNum = testArray[2];

// => take first 3 items from the array (WITH DESCTRUCTURING)
const [itemOne, itemTwo, itemThree, itemFive] = testArray;
console.log(itemOne);
console.log(itemTwo);
console.log(itemThree);
console.log(itemFive); // 400
// TAKES THEM BY ORDER !!!!!
// ???????????????? STO MISLITE KAKO BI GO ZEMALE PETIOT ELEMENT OD NIZATA ??????????????

// => take first and third div with class arrayDemo (WITH DESCTRUCTURING)
// ???????????????? NEKOJ IDEJA ?????????????
const [firstDiv, , thirdDiv] = document.getElementsByClassName("arrayDemo");
console.log(firstDiv);
console.log(thirdDiv);



const testArrayTwo = ["First string", "Second string"]  //"blabla"];  !!!!!!!!!!! POSLE

// Destructuring with default values 
// => if there isn't third item in the array, use the default value
const [firstString, secondString, thirdString = "Third string ?"] = testArrayTwo;
console.log(firstString);
console.log(secondString);
console.log(thirdString);



console.clear();
console.log("");
console.log("============== Spread operator ==============");

// *** Spread in fucntion calls ***
console.log(Math.max(-5, 10, 34, 350, 123, 10_000, 43))
const numbers = [-5, 10, 34, 350, 123, 10_000, 43];
console.log(Math.max(...numbers));

console.log(numbers); // prints the whole array object
console.log(...numbers); // prints only the values


// *** Spread with Arrays ***
const dogs = ["Bax", "Axe", "Chapo"];
const cats = ["Zuza", "Missy"];

// ?????????????????? KAKO DA GI NAPRAVIME VO EDNA ????????????????????

// => merge 2 arrays into 1 (WITH SPREAD)
const allPets = [...dogs, ...cats]

// => create copy of dogs array
const dogsCopy = [...dogs];
dogsCopy.push("Pluto"); // won't change the original dogs array


// *** Spread with Objects ***
// => merge 2 objects into 1 (WITH SPREAD)
const dog = {
    name: "Aks",
    breed: "Pug"
}
const dogDescription = {
    group: "Toy",
    color: "Appricot Fawn",
    origin: "China"
}

const aksDogInfo = { ...dog, ...dogDescription } // , isHappy: true }
console.log(aksDogInfo);



console.log("");
console.log("============== Rest operator ==============");

const students = ["Bob", "Jill", "John", "Steve", "Bobby"];

const [bob, jill, ...restStudents] = students;
console.log(bob);
console.log(jill);
console.log(restStudents);

// => function that sums random count of numbers passed as arguments
// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(sum(1, 2, 3, 5)); // 5 is ignored

function sum(...nums) {
    return !nums.length ? 0 : nums.reduce((acc, curr) => acc + curr);
}
