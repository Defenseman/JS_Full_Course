//this = reference to the object where THIS is used
//       (the object depends on the immediate context)
//       person.nаmе = this.namе (❗dosen`t use with arrow () => function)

const person1 = {
    name: 'Spongebob',
    favFood: 'Hamburgers',
    sayHello: function(){
        console.log(`Hi i'm ${this.name}`)
    },
    eat: function() {
        console.log(`${this.name} is like ${this.favFood}`)
    }
}
person1.sayHello()
person1.eat()


const person2 = {
    name: 'Patrik',
    favFood: 'Kebab',
    sayHello: function() {
        console.log(`Hi i'm ${this.name}`)
    },
    eat: function() {
        console.log(`${this.name} is like ${this.favFood}`)
    }
}
person2.sayHello()
person2.eat()