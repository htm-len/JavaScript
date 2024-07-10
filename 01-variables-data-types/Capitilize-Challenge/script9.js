// Using CharAt() method
const myString1 = 'developer';
const myNewString1 = myString1.charAt(0).toUpperCase() + myString1.substring(1);

/* 
Solution 1: Uses charAt(0) to get the first character and toUpperCase() to capitalize it. substring(1) retrieves the rest of the string from the second character onward.
*/ 

// Using string() method and substring() method
const myString2 = 'developer';
const myNewString2 = myString2[0].toUpperCase() + myString2.substring(1);

/*
Solution 2: Similar to Solution 1 but uses myString[0] to access the first character directly.
*/

// Using template literals and slice() method
const myString3 = 'developer';
const myNewString3 = `${myString3[0].toUpperCase()}${myString3.slice(1)}`;


/*
Solution 3: Uses template literals for cleaner syntax. ${myString[0].toUpperCase()} capitalizes the first letter, and ${myString.slice(1)} retrieves the rest of the string.
*/

console.log(myNewString1); // 'Developer'
console.log(myNewString2); // 'Developer'
console.log(myNewString3); // 'Developer'
