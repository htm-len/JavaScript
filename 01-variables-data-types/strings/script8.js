let x; 

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String properties and methods
const s = new String('Hello World');

x = typeof s; // string

//Access value by key 
x = s[0]; // H

x = s.__proto__;

//Case change
x = s.toUpperCase(); // HELLO WORLD
x = s.toLowerCase(); // hello world

//charAt()
x = s.charAt(0); // H

x = s.indexOf('e'); // 4

x = s.length; // 11

//substring()
x = s.substring(0, 5); // Hello
x = s.substring(7); // World

//slice()
x = s.slice(-11, -6); // Hello 

//Trim()
x = '   Hello World   ';
x = x.trim(); // Hello World

//Replace()
x = s.replace('World', 'John'); // Hello There

//Includes()
x = s.includes('Hello'); // true

//ValueOf()
x = s.valueOf(); // Hello World

//Split()
x = s.split(' '); // ["Hello", "World"]

console.log(x, typeof x);