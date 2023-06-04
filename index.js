/* Primitive Types */

let name = 'Alain'; // String Literal
let age = 19; // Number Literal
let inCollege = true // Boolean Literal
let firstJob = undefined;
let lastname = null;
console.log(name);

/* Objects */

// This is a person object
// it has two 'keys', name and age
let person = {
    name: 'Alain',
    age: 19
};

console.log('This is the original name: ' + person.name);
// How do we access the key: value pairs of an object?

// Dot Notation!
person.name = 'John';
console.log('This is with dot notation: ' + person.name);

// Bracket Notation!
person['name'] = 'Alex';
console.log('This is with bracket notation: ' + person.name);

/* Arrays */

let emptyArray = [];
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);

console.log('This is the first element of the color array: ' + selectedColors[0]);
console.log('This is the last element of the color array: ' + selectedColors[2]);
console.log('This is the length of the color array: ' + selectedColors.length);

/* Functions */

function greet(){
    console.log('Hello World!');
}

greet();