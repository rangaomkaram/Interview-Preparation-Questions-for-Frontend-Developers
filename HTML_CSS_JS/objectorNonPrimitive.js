// objects 

const person = {firstName:"Ranga", lastName:"Om"};

// Array object:
const cars = ["Saab", "Volvo", "BMW","Audi"];

// Date object:
const date = new Date("2024-08-12");

//Maps 

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

// use map and set
const newFruits = new Map();
// Set Map Values
newFruits.set("apples", 5000);
newFruits.set("bananas", 3000);
newFruits.set("oranges", 2010);

// Create a Set
const letters = new Set(["a","b","c"]);

// Create a Set
const addLetters = new Set();

// Add Values to the Set
addLetters.add("a");
addLetters.add("b");
addLetters.add("c");

/* Here we print everything is object data type */

console.log(typeof fruits);
console.log(typeof newFruits)
console.log(typeof letters);
console.log(typeof addLetters);
console.log(typeof person);
console.log(typeof cars);
console.log(typeof date);