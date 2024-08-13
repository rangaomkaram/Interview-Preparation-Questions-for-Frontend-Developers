
// let

let heroName = "NTR";
console.log(heroName)

heroName = "Jr.NTR";
console.log(heroName);

//const

const PI = 3.1415;
console.log(PI);
// PI = 2.345;
console.log(PI) // Type error : Assignment to const variable

// 

let age = 30

age += 1;

console.log(age)

const birthYear = 1993;

// birthYear = 1994;

console.log(birthYear) // Type error : Assignment to constant variable.

// get practice with some more examples

let isFrontEndFun = true;
console.log("Frontend is fun", isFrontEndFun);

//Reassigning the variable later

isFrontEndFun = "Yes";
console.log("Is is Frontend still fun? ", isFrontEndFun);


// Another example using let

let currentAge = 30;

console.log("current age is : ", currentAge);

//Mutating the variable by changing it's value;

currentAge = 31;
console.log("let's update the age:", currentAge);

//Using const to declare a variable that cannot be changed 

const yearOfBirth = 1991;

console.log("Birth year:", yearOfBirth);

// Attempting the reassign a const variable (leads to error)

// yearOfBirth = 1990; //(Type error : Assignment to constant variable -> if you uncomment this line)

// Avoid declaring the empty const variables (will result in an error)

// const emptylet ; // uncommenting this line leads to error, because there is no value is assigned to it.


// Best Practice : use const by to make default

const lightSpeed = 3e8;

console.log("Speed of light in Vaccum :",lightSpeed);

//Variables


let artistName = "Kalyan";
console.log(artistName);

// Reassigning the variable later
artistName = "pawan Kalyan";
console.log(artistName);

let myAge = 30;
myAge += 1;
console.log(myAge);

// setTimeout(()=>{

// },1000)


// setTimeout(() => {
    
// }, timeout);


// setInterval(() => {
//     myAge +=1; 
//     console.log(myAge)
// }, 1000);

// const strict variable

const yahooSharePrice = 103.30;

// setInterval(() => {
//     yahooSharePrice += 2.4;  // TypeError: Assignment to constant variable.
//     console.log(yahooSharePrice)
// }, 3000);


// var and let 

var movieName = "OG";
console.log(movieName);
