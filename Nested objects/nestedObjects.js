// Nested objects = Objects inside other objects.
//                  Allows уоu to represent more complex data structures
//                  Child Object is enclosed Ьу а Parent Object.

//                  Person{Address{}, contactInfo{}}
//                  ShoppingCart{Mouse{}, Keyboard{}, Mouse{}}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Sherlock Holmes", 34, '221b Baker street', 'London', 'Great Britain');

console.log(person1.address.street)

//------------------------
const user1 = {
    name: 'Spongebob',
    surname: 'SquarePants',
    age: 25,
    isStudent: true,
    hobbies: ['karate', 'Jellyfishing', 'Cooking'],
    address: {
        street: '124 Conch street',
        city: 'Bikini Bottom',
        country: 'Pacific Ocean'
    }
}

console.log(user1.age);
console.log(user1.hobbies[1]);
console.log(user1.address.city);

for (const prop in user1.address){
    console.log(user1.address[prop]);
}