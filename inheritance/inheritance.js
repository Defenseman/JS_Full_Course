//inheritance = allows a new class to inherit properties and methods
//              from an existing class (parent - > child)
//              helps with code reusability

class Animals {
    alive= true;

    eat(){
        console.log(`This ${this.name} is eating now`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping now`)
    }
}
class Rabbit extends Animals {
    name = 'Rabbit'
    run() {
        console.log(`This ${this.name} is running`)
    }
}
class Cat extends Animals {
    name = 'Cat'
    catch() {
        console.log(`This ${this.name} is catching`)
    }
}
class Hawk extends Animals {
    name = 'Hawk'
    fly() {
        console.log(`This ${this.name} is flying`)
    }
}
const rabbit = new Rabbit();
const cat = new Cat()
const hawk = new Hawk()

rabbit.eat()
rabbit.sleep()
cat.eat()
cat.sleep()
rabbit.run()
hawk.fly()
cat.catch()
console.log(cat.alive)
console.log(rabbit.alive)