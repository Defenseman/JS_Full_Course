//destructuring = extract values from arrays and objects,
//               then assign them to variables in a convenient way
//               [ ] = to perform array destructuring
//               { } = to perform object destructuring
//               5 examples

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const array = [ 'red', 'green', 'blue', 'purple', 'white' ];


[array[0], array[4]] = [array[4], array[0]];
[array[1], array[2]] = [array[2], array[1]];

console.log(array);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ['red', 'green', 'blue', 'black', 'white'];

[firstColor, secondColor, thirdColor, ... extraColors] = colors

console.log(extraColors)

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: 'Spongebob',
    lastName: 'SquarePants',
    age: 25,
    job: 'Chef'
}
const person2 = {
    firstName: 'Patrik',
    lastName: 'Star',
    age: 28,
}

const {firstName, lastName, age, job="Unemployed"} = person2
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job)

// ---------- EXAMPLE 3 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayCustomers({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const customer1 = {
    firstName: 'Spongebob',
    lastName: 'SquarePants',
    age: 25,
    job: 'Chef'
}
const customer2 = {
    firstName: 'Patrik',
    lastName: 'Star',
    age: 28,
}

displayCustomers(customer1)