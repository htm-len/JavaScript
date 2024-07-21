// Object Literals

let x;

const person = {  
    name: 'John',
    age: 30,
    isAdmin: true,  
    address: {
        street: '123 Main Street',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['reading', 'cooking', 'traveling']

};

x = person.name; // Access the name property of the object
x = person['age']; // Access the age property of the object
x = person.address.city; // Access the city property of the nested object
x = person.hobbies[1]; // Access the second element of the hobbies array

person.name = 'Jane'; // Update the name property of the object
person['isAdmin'] = false; // Update the isAdmin property of the object

delete person.age; // Delete the age property of the object

person.hasChildren = true; // Add a new property to the object

person.greet = function() {
    console.log(`Hello!, my name is ${this.name}`);
}; // Add a new method to the object

person.greet(); // Call the greet method

const person2 = {
    name: 'Jane',
    age: 25,
    isAdmin: false,
    address: {
        street: '456 Elm Street',
        city: 'Los Angeles',
        state: 'CA'
    },
    hobbies: ['painting', 'dancing', 'swimming']
};


x = person2['first name']; // Access the object

console.log(x); // Output: { name: 'John', isAdmin: true }
