// Values are stored on the stack 
const name = 'John'
const age = 30;

// Reference types are stored on the heap
const person = {
    name: 'len', 
    age: 40 
}               

let newName = name;
newName = 'Jane';

let newPerson = person;
newPerson.name = 'Sara';

console.log(name, newName);
console.log(person, newPerson);