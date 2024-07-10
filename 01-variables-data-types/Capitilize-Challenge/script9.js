// Using CharAt() method
const myString = 'developer';
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

/* 
Solution 1: Uses charAt(0) to get the first character and toUpperCase() to capitalize it. substring(1) retrieves the rest of the string from the second character onward.
*/ 

// Using string() method and substring() method
const myString = 'developer';
const myNewString = myString[0].toUpperCase() + myString.substring(1);

/*
Solution 2: Similar to Solution 1 but uses myString[0] to access the first character directly.
*/

// Using template literals and slice() method
const myString = 'developer';
const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;


/*
Solution 3: Uses template literals for cleaner syntax. ${myString[0].toUpperCase()} capitalizes the first letter, and ${myString.slice(1)} retrieves the rest of the string.
*/
console.log(myNewString); // 'Developer'
