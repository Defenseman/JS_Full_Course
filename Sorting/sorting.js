//sort( ) = method used to sort elements of ап array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) аs strings

const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Mango']

fruits.sort();
console.log(fruits);

const numbers = [1, 10, 5, 7, 2, 3, 6, 4, 8, 9];

numbers.sort();    // lexicographic
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

const chars = [{name: 'Jan', age: 32, gpa: 3.5},
                                         {name: 'Feb', age: 42, gpa: 2.5},
                                         {name: 'Mar', age: 29, gpa: 4.0},
                                         {name: 'Apr', age: 60, gpa: 2.5},
                                         {name: 'May', age: 24, gpa: 4.5},
                                         {name: 'Jun', age: 31, gpa: 3.0}]
chars.sort((a, b) => a.age - b.age);
console.log(chars);
chars.sort((a, b) => a.name.localeCompare(b.name));
console.log(chars);
