let x;

const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'blackberry'];

//  fruits.push(berries); // Add the berries array to the fruits array 

// x = fruits[3][1]; // Access the blackberry element in the nested array

const allFruits = [fruits, berries]; // Create a nested array with the fruits and berries arrays 
   
x = allFruits[1][0]; // Access the b element in the nested array

x = fruits.concat(berries); // Concatenate the fruits and berries arrays

// Spread Operator (...)
x = [...fruits, ...berries]; // Spread the elements of the fruits and berries arrays
 
// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8]; // Create an array with nested arrays
x = arr.flat(); // Flatten the array

// Static Method on Array Object
x = Array.isArray(fruits); // Check if the arr variable is an array

x = Array.from('12345'); // Convert a string to an array

/**
 * Represents the value of variable a.
 * @type {number}
 */

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // Create an array from the arguments

console.log(x); // Output: ['apple', 'banana', 'orange', ['strawberry', 'blueberry', 'blackberry']]