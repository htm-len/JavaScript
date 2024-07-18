// instantiate a new dat object

/**
 * Represents a variable for storing a date.
 * @type {Date}
 */

let d; 

d = new Date();

d = d.toString();

d = new Date(2024, 6, 15, 30, 0);

d = new Date('2024-06-15T30:00:00');
d = new Date('07/24/2024 30:00:00');

d = Date.now();

d = new Date('07-24-2024 30:00:00');
d = d.getTime();
d = d.valueOf();

d = Math.floor(Date.now() / 1000);

console.log(d, typeof d); // object