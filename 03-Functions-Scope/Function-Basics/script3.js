// Functions can be defined in a few different ways. Here is a simple example of a function declaration:

function sayHello() {
    console.log('Hello!');
};

sayHello(); // Hello!

// Parameters can be passed to functions. Here is an example of a function that takes a parameter:

// Function declaration for the `subtract` function
function subtract(num1, num2) {
    return num1 - num2; // Subtract `num2` from `num1` and return the result

    console.log('After the return statement'); // This line will not be executed
}

const result = subtract(5, 3); // Call the `subtract` function with arguments 5 and 3 and assign the result to `result`
console.log(result, subtract(20, 4)); // Output the value of `result` and the result of subtracting 4 from 20, which is 16

console.log(result, subtract(20, 4)); // 2