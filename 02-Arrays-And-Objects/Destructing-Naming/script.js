// Destructing-Naming   
const firstName = 'John';
const lastName = 'Doe';
const age = 50;

const person = {
    firstName, 
    lastName,
    age,
};

console.log(person.age);

// Destructing
const todo = {
    id: 1,
    title: 'Pick up groceries',
    user: {
        name: 'John',
    },
};

const {
    id: todoId,
    user: { name },
} = todo;

//Destructing Arrays 
const numbers = [22, 33, 44, 55, 66];

const [first, second, ...rest] = numbers; // Rest Operator

console.log(first, second, rest);