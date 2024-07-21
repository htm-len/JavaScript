// Array Methods

let x;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Create an array with 10 elements

// arr.push(100);      // Add 100 to the end of the array

// arr.pop();         // Remove the last element from the array

// arr.unshift(99);   // Add 99 to the beginning of the array

// arr.shift();       // Remove the first element from the array

// arr.reverse();     // Reverse the order of the elements in the array

x = arr.includes(300);  // Check if the array includes the number 5   

x = arr.indexOf(5);     // Find the index of the number 5 in the array

// x = arr.join(' - ');    // Convert the array to a string with '-' between the elements

// x = arr.slice(2, 5);    // Extract elements from the array

// Chain Methods 

x = arr.splice(1,4).reverse().toString().charAt(0);  // Remove elements from the array, reverse the order, convert to a string, and get the first character

console.log(x, arr);  // Print the modified array
