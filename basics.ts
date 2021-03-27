//Install node js
//Add env variables
//Install VSCode
//Add extensions

// npm init -y
//npm install
/*
"nodemon": "^2.0.7",
"typescript": "^4.2.3" 

Dev depenendies
  "@types/node": "^14.14.35",
  "ts-node": "^9.1.1"

*/

//tsc -init
//Add root folder and output folder

//Add scripts in Package.json
//"start": "node public/app.js",
//"dev": "nodemon src/app.ts",
//"build": "tsc -p ."
//---------------------------------------------------------------------------------------

//1.Why typescript
// `
// TypeScript uses static typing, meaning that you can give a type
//  to a variable during declaration. And it's something that can't be done with JavaScript because it's a dynamically typed language, it does not know
// the data type of a variable until it assigns a value to that variable at runtime.

// Static type checking makes TypeScript great because it helps to
// throw an error at compile-time if the variable is unused or reassigned with a different type annotation. However, the error does
// not block the code from executing, the JavaScript code will still be generated.
// `

//2.Basic Types

//1.let vs const vs car
//var => Used to declare variables.Have some different scoping rules
// let =>  To solve the scoping rules, ES6 introduced let
// difference between var and let => Block scope : Function, if ekse or loop

//const => constant identifiers

//Can be declared in any block scope

var sheep = "pity";
sheep = "pity2";
sheep = "pity3";

let cat;
cat = "ruby";
cat = "ruby2";

const dog = "bruno";
// dog = "chuno"
// console.log(cat);

//Block scope things

// console.log(fruit2)
var fruit2 = "mango";

// console.log(fruit) // with let
let fruit = "apple";

//NOTE : let variables cannot be redeclared
//Example

// var aa = 55
// var AA = 100
// var aa = 55

// let aa =

//2.Type annotations and syntax

//Strings
let username: string = "xyz";
console.log(username);

//Numbers
let useruid: number;
useruid = 55;
console.log(useruid);

//Booleans
let isSleeping: boolean;
isSleeping = true;
console.log(isSleeping);

//Arrays
let userHabits: string[];
userHabits = ["sleeping", "eating"];
userHabits.push("dance");
console.log(userHabits);

// userHabits.push(55) => Error
// userHabits.push(true) => Error

//Enum

enum UserEnum {
  UserName,
  UserAge,
  UserLocation,
}

UserEnum.UserAge;

//Will be taking a deep dive over it in functions

//Tuples => Ordered and Cannot be changed

let veggies: [number, string];

veggies = [0, "potato"];
veggies[1] = "chilly"; //Access
console.log(veggies);

// Tuple array

let listOfVeggies: [number, string][];
listOfVeggies = [
  [1, "potato"],
  [2, "chilly"],
];

listOfVeggies[0] = [1, "updated potato"];

console.log(listOfVeggies[0]);

//Union types

let decideMyType: boolean | string | number;

decideMyType = 55;
decideMyType = "55";
decideMyType = false;

//The varitation of paranthesis
let val: boolean | string[];
val = true;
val = ["some", "data"];

// Any types
let car: any;
car = 55;
car = "55";
car = false;
car = [55, 55];
car = ["audi", 55];

let arrayOfCars: any[];
arrayOfCars = [55, "55", false];

//Custom types
type userDataInfo = string | number;
let userData: userDataInfo;
userData = 55;

type carData = string;
let myCar: carData;
myCar = "audi";

type customArray = number[];
let myMarks: customArray = [55, 744, 66, 5, 4, 819, 649, 494, 9, 498, 4];

//Type intellisense
let myHobbies = ["Sleeping", "Eating", 55, "Dancing"];

// Let try adding some data in myHobbies
myHobbies.push(10);
myHobbies.push("Coding");
// myHobbies.push(true) //Error

//Type assertion
let food: any = "Chips";
let snacks = <string>food;
//  snacks = false

// Functions
function sayMyName(x: string) {
  //Declare the function
  console.log(x);
}
sayMyName("Abhishvek"); // Calling the function

function detectMyName(x: string) {
  if ((x = "Abhishvek")) {
    console.log("User identified");
  } else {
    console.log("Error");
  }
}

detectMyName("Abhishvek");

//Normal types
function sumOfNumbers(x: number, y: number) {
  return x + y;
}
console.log(sumOfNumbers(5, 5));

// Add explicit return type
function sumOfNumbers2(x: number, y: number): number {
  return x + y;
}
console.log(sumOfNumbers2(5, 5));

// Optional Parameters
function callMe(name: string, latency: number, age?: number) {
  return name + "was called by " + latency + age;
}
callMe("Abhishvek", 55);

// Default Parameter
function callMe2(name: string, latency: number, age: number = 20) {
  return name + "was called by " + latency + age;
}
callMe("Abhishvek", 55);

// Function signature
let shopFood: (name: string, price: number) => void;

shopFood = (name: string, price: number) => {
  console.log(`${name} has ${price} price`);
};

shopFood("Sushi", 100);

// You can even declare the custom function alias
type foodName = string;
type foodPrice = number;

let shopFood2: (name: foodName, price: foodPrice) => void;

// Classes => Blueprint

class Car {
  model: string;
  engine: string;

  constructor(x: string, y: string) {
    this.model = x;
    this.engine = y;
  }

  carData() {
    return `model ${this.model} has ${this.engine} engine`;
  }
}

const car1 = new Car("Audi", "NH6");
console.log(car1.carData());

const car2 = new Car("Mercedes", "IO9");
console.log(car2.carData());

//Class access modifiers
car1.model = "Mercedes 2";
console.log(car1.carData());

//Readonly things
//Examples

// Static

class Subjects {
  static topic: string;
  prop: number;
  constructor(x: number) {
    this.prop = x;
  }
}

Subjects.topic = "aifbaofb";

// Interface
/*
Interface is a structure that defines the contract in your application.
 It defines the syntax for classes to follow. Classes that are 
derived from an interface must follow the structure provided by their interface.
*/

interface DogData {
  name: string;
  breed: string;
  age: number;
}

const dog4: DogData = {
  name: "Bruno",
  breed: "German Shepherd",
  age: 20,
};

dog4.name = "Bruno2";
dog4.age = 21;
dog4.breed = "XYZ";

const dog6: DogData = {
  name: "Bruno",
  breed: "German Shepherd",
  age: 20,
};
// Add readonly

interface CarInfo {
  readonly engine: string;
  model: string;
}

const car88: CarInfo = {
  engine: "YT5",
  model: "Toyota",
};

// car88.engine = ""
car88.model = "";

// Generics
/*Generics provide a way to make components work with any data type and 
not restrict to one data type. So, components can be called or used with
 a variety of data types.*/

function myFunction<T>(x: T) {
  return x;
}

function getArray<T>(props: T[]): T[] {
  return new Array<T>();
}

let num1 = getArray<number>([5, 10, 15, 20]);
let string1 = getArray<string>(["a", "b", "c"]);

num1.push(55);
// num1.push(false)// Error

//Multiple Types

function getData2<T, U>(name: T, id: U): string {
  return `${typeof name} and ${typeof id}`;
}

console.log(getData2("Abhishek", 44));
console.log(getData2<string, number>("Abhishek", 44));

//Constraints
class Person {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

function display<T extends Person>(per: T): void {
  console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per);
