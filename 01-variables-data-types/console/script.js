console.log(100); // Print the number 100 to the console

console.log('Hello World!'); // Print the string 'Hello World!' to the console

console.log(20, 'hello', true); // Print multiple values (number, string, boolean) to the console

const x = 100;
console.log(x); // Print the value of variable x to the console

console.error('Alert!'); // Print an error message to the console

console.warn('Warning!'); // Print a warning message to the console

console.table({name: 'len', email: 'gmail'}); // Print an object as a table to the console

console.group('simple'); // Start a new console group
console.error('Alert!'); // Print an error message within the group
console.warn('Warning!'); // Print a warning message within the group
console.table({name: 'len', email: 'gmail'}); // Print an object as a table within the group
console.groupEnd('simple'); // End the console group

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World!', styles); // Print a styled message to the console
