# Why Javascript ? 

- Because 97% of webistes are using it. 

## Let's see it uses of javascript or applications : 

1. Interactive user experience.

2. Game Developement.

3. Single Page Applications (SPA).

4. Websites.

5. Web and Moblie Apps.

6. Data Visualization (D3).

7. Artifical Intelligence Apps.

8. Serverless Functions.

9. Virtual Reality Apps.

10. Plugins for popularity of Apps.



### Where it uses , let's see a scenario:

- creating interactive elements in websites.

- Facebook chat or Social Media Chat.
- Collect User input - E commerce webistes (Form Validations e.t.c)

- Control User Interactions - like Youtube, Netflix 

- Building web applications using Angular, Vue, ReactJS.

- Developement of Moblie Applications - Using ReactNative frameworks - which can give both Andriod and IOS applications for moblies.


## Features of  JavaScript : 

- JavaScript is Object-Oriented, Multi-paradigm, High-Level Programming Language.

1. Object-Oriented : Based on Objects for storing most kind of data.

2. Multi-Paradigm : We can use different styles of programming -> Imperative and Declarative style of programming.

3. High-Level : Javascript is high-level programming, we don't need to worry about complex stuff like  memory mangement.


## Role of javascript in Web Development: 

- There are Core three things to complete a webiste HTML , CSS and Javascript 

  - Html is skeleton (Content)

  - Css is Presentation

  - Javascript is Behaviour (Actions)

  - Noun(HTML) + Adjective(CSS) + Verb (javascript)

  JavaScript  Releases 

  - ECMA Script 

  - ES5 to ES6 

  - At Present Es15 is released at 2024.

## Linking a Javascript file:

  - connecting the Internal Javascript.

  - Connecting the External Javascript

## When to use internal Javascript and External Javascript ?

  1. We use internal Javascript for small,sinlge page applications.

  2. External Javascript used for larger scripts or functionality that needs to be shared across multiple pages.

  3. External Javascript files organized and modular to promote code reuse and maintainability.


## Pros and Cons of Internal Javascript: 

 ### Pros:

  - No need to worry about file loading and caching.

  - Can be easily modified and updated.

  - Reduce the number of HTTP requests.

  - Faster page load times.

 ### Cons :

  - Code is tightly coupled with the HTML file.

  - Difficult to maintain and update.

  - Not suitable for large applications.

  - Not reusable.

  - lead to code duplication.

  - can make the HTML document cluttered and harder to read.

## Pros and Cons of External javascript :

 ### Pros :

  - keeps the HTML document clean and organized
  .
  - Allows for code reuse and modularity.

  - Easier to maintain and update.

### Cons:

  - Requires an additional HTTP request to load the script.

  - Can lead to slower page load times if not properly optimized.

## Value and Variables in Javascript : 


  - Value is the Representation of information i.e, storing different type of data like numbers,boolean(true/false), string or characters.

  - calculations, decision making and content visulization.

  - Variables is the container for the values,they hold values to access and manipulate.

  - Variables are declared using var,let,const keywords.

  - Variable is name given to memorylocation which acts as storing data 

  - Variables are used to store values and perform operations on them.

```javascript

let name = "Ranga"
let age = 31
let martialStatus = "single"

let isEmployed = true

```
## We can print the values using the in-builit function console.log() in javascript.

```javascript

console.log(name);
console.log(age);
console.log(isEmployed);
console.log(martialStatus);

```

### Naming Conventions to Declare the variable 

- Good Practices : 

1. Case-sensitive : age,Age, AGE are three different variables (please keep in mind).

2. Avoid reserved Keywords : conditional statements(if,elif,else), loops(for,while, do-while), some more are there refer this reserved keywords in offical MDN document 
[Reserved Keywords]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words").

3. Please make sure upper case letters are reserved for constants , when you declare as shown below:

```javascript

// examples

const PI = 3.1415
const bankName = "Indian"

```

4. Make sure you declare variable in descriptive manner.

- As Shown below

```javascript

let userAge = 31;
let employeeName = "Ranga"
let companyName = "Meta"

```
- Bad Practices :

``` javascript

 let name_1 = "Ranga"
 let name_2 = "Meta"

```

1. From above example as naming convenstion is correct , but there is no meaningful.

2. So code should be more readable and meaningful.Better use descriptive variables.

3. Don't  start variables with number like 1month instead use one_month 

4. Use letters, _ ,& 

## Data Types in Javascript:

 - Primitive 
 - Non Primitive (Object)

### Primitive Data Types: 
1. Number : Floating point numbers used for  decimals and integers .

2. String : sequence of characters, Used for text.

3. Boolean : Logical type that can be only true or false.

4. Undefined: Value taken by variable that is not yet defined ("empty value")

5. Symbol(ES 2015): value that is unique and cannot change.

6. Null : Empty Value

7. BigInt(ES2020) : Large integer than Number type can hold.

- let's see the examples in Javascript:
  [ClickHere](../HTML_CSS_JS/primitve.js).

### Non - primitive or Object Data Type:

- The object data type or non-primitive contains built-in objects, user defined objects.

 - What are built-in objects:
   1. Objects
   2. Arrays
   3. dates
   4. maps
   5. sets
   6. intarrays
   7. floatarrays
   8. booleanarrays
   9. promises.  (list goes on...  e.t.c..)

- [clickhere](../HTML_CSS_JS/objectorNonPrimitive.js) to see examples.

### Concept of Variable declaration using three keyWords:
 - let
 - var
 - const

1. let is a keyword in javascript,which can be used to change the values later in programming.

2. const is a keyword in javascript, which is strict to declare variable.It won't allow to change the value.

3. var is old keyword in javascript, which can be used to change the values. Before let , var is used.

4. Please give let more preferable when to change the value<b>(later we see the concept of scope variable, there you can see the difference between let and var (when to use))</b>, while programming.If value should not change, then use const to declare the variable.

- [clickhere](../HTML_CSS_JS/let_var_const.js) to see examples:

## JavaScript Operators

- we have Opeartors +,-, <,>,<=,>=, *, / , %, != (not equal or nagation), || , && ,**

1. Arthematic Operators - which used for mathematical calcualtions.(+,-,/,%,*)
2. Assignment Operators - which is used to assign values to variables (=,-=,+=,,*=,/=,)
3. Comparision Operators - which is used compare the variables between them.
4. logical Operators - Logical operators are used to combine or modify boolean values.
5. Bitwise Operators -Bitwise operators are used to perform bitwise operations on integers.
6. Typewise Operators - Type operators are used to check the type of a variable.
7. String Operators - String operators are used to concatenate strings. (+=)
8. Conditional Operators(Ternary Operators) - Conditional operators are used to perform conditional operations.

- [clickhere](../HTML_CSS_JS/operator.js) to see all operator examples: