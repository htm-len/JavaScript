// Date Object Methods 
let x; 

let d = new Date(); // Instantiates a new date object
x = d.toString(); // Converts the date object to a string

x = d.getTime(); // Returns the number of milliseconds since January 1, 1970
x = d.valueOf(); // Returns the primitive value of the date object

x = d.getFullYear(); // Returns the year (4 digits) of the date

x = d.getMonth(); // Returns the month (0-11) of the date
x = d.getMonth() + 1; // Returns the month (1-12) of the date

x = d.getDate(); // Returns the day of the month (1-31) of the date

x = d.getDay(); // Returns the day of the week (0-6) of the date

x = d.getHours(); // Returns the hour (0-23) of the date

x = d.getMinutes(); // Returns the minutes (0-59) of the date

x = d.getSeconds(); // Returns the seconds (0-59) of the date

x = d.getMilliseconds(); // Returns the milliseconds (0-999) of the date

x = `#{d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // Returns the date in the format "YYYY-MM-DD"

x = Intl.DateTimeFormat('en-US').format(d); 
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d); // Returns the date in the format "DD Month YYYY"

x = d.toLocaleString('default', {
    weekday: 'long', 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',  
}); // Returns the date in the format "Weekday, Month DD, YYYY HH:MM:SS Timezone"






console.log(x); // Outputs the value of x to the console
