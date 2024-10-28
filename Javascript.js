js_content = """
// JavaScript Essentials in One File

// 1. Basic Syntax
// Variables
let myName = 'JavaScript';
const PI = 3.14159;
var age = 25;

// Data Types
let str = "Hello";      // String
let num = 123;          // Number
let isTrue = true;      // Boolean
let arr = [1, 2, 3];    // Array
let obj = { name: "John", age: 30 }; // Object

// Operators
let sum = num + age;    // Arithmetic Operators
let isEqual = (num === 123);  // Comparison Operators
let isAdult = (age >= 18) && isTrue;  // Logical Operators

// 2. Control Structures
// Conditionals
if (age > 18) {
    console.log("Adult");
} else if (age === 18) {
    console.log("Just became an adult");
} else {
    console.log("Not an adult");
}

// Switch case
let grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    default:
        console.log("Needs Improvement");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3. Functions
// Function Declaration
function greet(name) {
    return `Hello, ${name}`;
}

// Arrow Functions
const square = (x) => x * x;

// Closures
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// 4. Objects and Classes
// Object creation
let person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet();

// Class and inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}
let dog = new Dog("Rex");
dog.speak();

// 5. Async Programming
// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

fetchData((data) => console.log(data));

// Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
});
promise.then((message) => console.log(message)).catch((err) => console.log(err));

// async/await
async function asyncFunction() {
    let result = await promise;
    console.log(result);
}
asyncFunction();

// 6. DOM Manipulation (only works in a browser environment)
// document.querySelector('button').addEventListener('click', () => {
//     document.querySelector('p').textContent = 'Button clicked!';
// });

// 7. Error Handling
try {
    throw new Error("An error occurred");
} catch (error) {
    console.log(error.message);
}

// 8. Modules (export and import)
// export function add(a, b) { return a + b; }
// import { add } from './mathModule';

// 9. Additional ES6+ Features
// Destructuring
const [first, second] = arr;
const { name, age: personAge } = person;

// Spread and Rest
const newArr = [...arr, 4, 5];
const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);

// Template Literals
console.log(`My name is ${myName} and I am ${age} years old.`);
"""

# Saving this JavaScript content to a .js file
file_path = '/mnt/data/JavaScript_Essentials.js'
with open(file_path, 'w') as file:
    file.write(js_content)
