let x; // Declare a variable called 'x'

const todo = new Object(); // Create an empty object called 'todo'

todo.id = 1; // Add a property 'id' to the 'todo' object and assign it a value of 1
todo.name = 'Pick up groceries';
todo.completed = false;

x = todo; // Assign the 'todo' object to the variable 'x'

// Nested object
const person = {
    address: {
        coords: {
            lat: 42.3601,
            lng: -71.0589,
        },
    },
};

x = person.address.coords.lat; // Assign the nested object to the variable 'x'

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge the two objects into a new object called 'obj3'
const obj3 = { ...obj1, ...obj2 };

// Merge the two objects into a new object called 'obj4'
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Pick up groceries' },
    { id: 2, name: 'Do laundry' },
];

// Assign the merged object to the variable 'x'
x = todos[0].name;

x = Object.keys(todo); // Convert the object to an array of key-value pairs

x = Object.keys(todo).length; // Get the number of key-value pairs in the object

x = Object.values(todo); // Get the values of the key-value pairs in the object

x = Object.entries(todo); // Convert the object to an array of key-value pairs

x = todo.hasOwnProperty('name');

console.log(x); // Output the value of 'x' to the console
