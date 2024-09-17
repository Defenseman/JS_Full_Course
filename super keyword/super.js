// super = keyword is used in classes to са11 the constructor• ог
//         access the properties and methods 0f а parent (supecclass)
//         this = this object
//         super = the parent

class Animal {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    move(speed) {
        console.log(`This ${this.name} moves with ${speed}mph speed!`)
    }
}

class Snake extends Animal {
    constructor(name, age, scrollSpeed) {
        super(name, age);
        this.scrollSpeed = scrollSpeed
    }
    scroll() {
        console.log(`This ${this.name} can scroll!`)
        super.move(this.scrollSpeed)
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run!`)
        super.move(this.runSpeed)
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`This ${this.name} can fly!`)
        super.move(this.flySpeed)
    }
}

const snake = new Snake('Snake', 10, 5);
const rabbit = new Rabbit('Rabbit', 2, 25);
const hawk = new Hawk('Hawk', 7, 60);

console.log(snake.name);
console.log(snake.age);
console.log (snake.scrollSpeed);
snake.scroll();