// Constructor = special method for defining the
// properties and methods of objects

function Car(mark, model, year, color) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.color = color
    this.drive = function () {console.log(`You driving a ${this.color} ${this.model} ${this.year}!.`)};
}

const car1 =new Car('Ford', 'Challenger', 1987, 'black');
const car2 = new Car('Lada', 'Vesta', '2024', 'borneo');
const car3 = new Car('Chevrolet', 'Camaro', 2025, 'yellow');

console.log(car1.mark);
car1.drive()
car3.drive()