// Javascript Operators

let a = 5;
let b = 3;
let add = a + b;

console.log(add);

// Subtraction

let sub = a - b;
console.log(sub);

//division 
let div = a / b;
console.log(div)

//Multiplication 
let mul = a * b;
console.log(mul)


//Similarly for square 

let square = a ** b;
console.log(square)

// Remember BODMAS rule.

// Modulus %

let mod = a % b;
console.log(mod);

// incerment value 
let number = 20;
number = number + 1
console.log(number)

// Comparision Operators 
let mySalary = 100;
let yourSalary = 0;

console.log(mySalary > yourSalary) // for comparision operators we print boolean value either true or false

console.log(mySalary < yourSalary)
console.log(mySalary === yourSalary)

// In comparsion operators === is a special case which checks type and value
// In comparsion operators == only checks value

// Type operators 

console.log(typeof mySalary)
console.log(typeof yourSalary)

let empSalary = 1000;
let hrSalary  = "1000";

console.log(empSalary == hrSalary); // here this comparision operator only checks the value so it return true

console.log(empSalary === hrSalary); // it returns false , because it checks the value and data type.

// String Addition or concatenation

let firstPerson = "udaykumar";
let secondPerson = "Ranga"

let concatenate = firstPerson + " " + secondPerson;
let  secondConcatenate = secondPerson + " " + firstPerson;

console.log(secondConcatenate)
console.log(concatenate);


//Logical Operators

console.log(mySalary && yourSalary);
console.log(mySalary || yourSalary);


// Conditional Operators:(Ternart Operator)

// This Ternart Operator ?

/* This Ternart Operator in javascript, which is shorthand way of writing an if-else statement.

It is used to return one value if the condition is true and another value if the condition is false

The synatx for the ternary operator is as follows:

condition ? exprIfTrue: exprIfFalse

*/

let isAdmin = true;
let message = isAdmin ? "Hello Admin, you can access now" : "you are not Admin UnAuthorised to access";

console.log(message)

// This Assigning a value based on a condition

let score = 90;
let grade = score >=90 ? "You're grade is A+" : "You're grade is A";
console.log(grade)

// Using ternary operator with multiple conditions

let age = 18;
let result = age >= 18 ? "You're an adult " : age >=13 ? "You're a teenager" : "You're a kid";

console.log(result)






















































































