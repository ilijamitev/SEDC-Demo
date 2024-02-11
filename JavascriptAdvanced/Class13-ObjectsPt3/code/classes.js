console.log("======================== CLASSES ========================");

// ===> Using constructor function
// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
//     }
// }
// const vehicle = new Vehicle(12, "Yugo", "25B", 500);

// ===> USING CLASS 
class Vehicle {
    // defining our properties
    constructor(id, name, batchNo, price) {
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
        this.price = price;
    }
    // defining our methods
    // *NOTE* => the '()' doesn't imply method execution, it's just a syntax for defining methods in a class
    printVehicle() {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}

// => creating objects (new instances) of the class Vehicle
const vehicle = new Vehicle(12, "Yugo", "25B", 500);
const boat = new Vehicle(33, "Boat", "2z3", 50000);



console.log("");
console.log("============== Inheritance with classes ==============");

// ===> Inheritance using constructor function
// function WheeledVehicle(id, batch, price, name, wheels){
// 	//this.__proto__= Object.create(new Vehicle(id, name, batch, price));
// 	Object.setPrototypeOf(this,new Vehicle(id, name, batch, price))
// 	this.wheels = wheels;
// 	this.drive = function(){
// 		console.log(`Driving on ${this.wheels} wheels!`);
// 	}
// }


// ===> Inheritance using CLASSES
// *extends* => inherits from
// => class WheeledVehicle inherits from Vehicle, meaning it has all the members defined in the Vehicle class
// => Vehicle is also called a parent class (base class, super class)

// class WheeledVehicle extends Vehicle {
//     constructor(wheels, name) {
//         this.wheels = wheels;
//         this.name = name;
//     }
//     drive() {
//         console.log(`Driving on ${this.wheels} wheels!`);
//     }
// }    // !!!!!!!!!! VO ISTOTO DA GO ISKUCAM OVA DOLE !!!!!!!!!!!!!!!!!!!!!

// KAKO DA GI PREPRATIME PARAMETRITE POTREBNI ZA KONSTRUKTOROT NA VEHICLE ??? BASE/PARENT/SUPER

class WheeledVehicle extends Vehicle {
    // write the needed parameters for the all properties (both from WheeledVehicle and Vehicle)
    constructor(id, name, batchNo, price, wheels) {
        // !!!!!!!!!!!!!!!!! super so hover da im pokazam
        // send the parameters needed for the parent class in the *super* constructor
        super(id, name, batchNo, price); // calls the parent class constructor
        // assign the rest needed for the derived (child) class
        this.wheels = wheels;
    }
    drive() {
        console.log(`Driving on ${this.wheels} wheels!`);
    }
}

const bike = new WheeledVehicle(2, "Bicycle", "323", 500, 2);
// even better way, create Bike class that inherits from WheeledVehicle


// =========================== PAUZA =============================


console.log("");
console.log("============== Static methods ==============");
// => created using the keyword *static* before the method definition
// => static method is a method that is associated with the class itself, rather than with instances (objects) created from that particular class
// => this means that you can call a static method without creating an instance of the class, simply by typing the syntax: NameOfClass.NameOfStaticMethod()

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
        super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
        if (ac) {
            this.price += 400;
        }
    }
    buyCar(money) {
        money >= this.price ? console.log("Congrats! You bought a car") :
            console.log(`You need $${this.price - money} more to buy this car!`);
    }
    // !!!!!!!!!! DA GO DODADAM STATIC OTPOSLE
    // ?????????? STO TREBA DA PRIMA KAKO PARAMETAR ??????????
    static addAc(car) {
        if (!(car instanceof Car)) {
            throw new Error("The argument is not of type Car !!!");
        }
        if (!car.airConditioning) {
            car.airConditioning = true;
            car.price += 400;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log(`The car already has AC!`);
        }
    }
}

const audiA3 = new Car(7, "Audi A3", "2020", 20_000, 4, true);
const mustang = new Car(55, "Ford Mustang", "2019", 55000, 2, false);
// mustang.addAc(mustang) // will work if the method is not static, but it's total non-sense
// mustang.addAc(audiA3)
Car.addAc(audiA3);
Car.addAc(mustang);
// mustang.addAc(audiA3) // will throw Error if the method is static


// *** Check if object is an instance of a class ***
console.log(mustang instanceof Car);
console.log(mustang instanceof WheeledVehicle);
console.log(mustang instanceof Vehicle);
console.log("Toyota" instanceof Car);



console.log("");
console.log("============== Get / Set ==============");
// => *GETTER* is a method that is used to get the value of a specific property. It is invoked without the use of parentheses when the property is accessed
// => *SETTER* is a method that is used to set the value of a specific property. It is invoked when the property is assigned a new value

// => GETTER SYNTAX: get nameOfProperty() {return the value of the property}
// => SETTER SYNTAX: set nameOfProperty() {assign value to the property}
// => NOTE: the property in the get & set methods must be reffered to with an UNDERSCORE(_) before its name (example: this._propertyName)

// => Use cases: 
// 1) data validation
// 2) encapsulation
// 3) access control etc...

// ***NOTE*** => Get & Set work under the hood without the need for explicitly creating them. We create them ONLY in cases where we want to do some checks, validations etc.. of some of the properties

class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, owner) {
        super(id, name, batch, price, doors, true);
        this.owner = owner;
        // ???????????????? IMA LI NEKOJ IDEJA KAKO DA GO NAPRAVIME READONLY ??????????
        this.test = "This is a readonly property";
    }
    // !!!!!!!!!!!!!! OTPOSLE !!!!!!!!!!!!!!
    // GETTER for owner property
    get owner() {
        console.log("Hello from property owner GETTER!");
        // return this._owner;
    }
    // SETTER for owner property
    set owner(ownerName) {
        console.log(`Hello from property owner SETTER! Value: ${ownerName}`);
        // if (ownerName.length <= 2) {
        //     throw new Error(`You've entered invalid name !!! Value: "${ownerName}"`)
        // }
        // this._owner = ownerName;
    }

    // => Creating a readonly property
    get test() {
        return this._test;
    }
    set test(testValue) {
        if (this.test) {
            console.error(`You cannot assign values to a readonly property! Value: ${testValue}`);
            return;
        }
        this._test = testValue;
    }
}

const tesla = new ElectricCar(1, 'Tesla Model S', '2023A', 80_000, 4, 'John Doe');
const nissan = new ElectricCar(2, 'Nissan Leaf', '2023B', 35000, 4, 'Jane Smith');

console.log(tesla.owner);
console.log(nissan.name);
// !!!!!!!!!!!!!!!!!! SAMOTO OVA PRISTAPUVANJE VO POZADINA TRIGERIRA NEKOI UNDER THE HOOD FUNKCII ZA KONKRETNOTO PROPERTI

tesla.owner = "Jane Doe";
// tesla.test = "gasgfsag"


// ============================ PAUZA =============================


// ============================ ZADACA =============================