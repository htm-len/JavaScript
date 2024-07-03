// Ways to declare variables in JavaScript
// var, let, const
// var is function scoped
// let is block scoped
// const is block scoped and cannot be reassigned

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming conventions
// 1. Cannot start with a number, letters, underscore or dollar sign
// 2. Cannot start with a number

// multi word formatting
// firstName - camel case
// first_name - underscore
// FirstName - Pascal case
// firstname - lowercase

// reassigning variables
age = 40;
console.log(age);

let score;
score = 10;
console.log(score);

if (true) {
    score = score + 10;
}
console.log(score);

const x = 10;

const arr = [1, 2, 3, 4, 5];

arr.push(5);
console.log(arr);

const person = {
    name: 'Len',
};

person.name = 'John';
person.email = 'gmail.com';

console.log(person);

//declare multiple variables at once 

let a, b, c;

const d = 10, e = 20, f = 30;