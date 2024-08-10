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