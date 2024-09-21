const fruits = [{name: 'Apple', color: 'Green', calories: 95},
                                        {name: 'Orange', color: 'Orange', calories: 85},
                                        {name: 'Mango', color: 'Green', calories: 105},
                                        {name: 'Banana', color: 'Yellow', calories: 115},
                                        {name: 'Grape', color: 'Purple', calories: 110}]

fruits.push({name: 'Pineapple', color: 'Green', calories: 90})
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.forEach(fruit => {
    console.log(fruit.calories);
})

const fruitsName = fruits.map(fruit => fruit.name)
console.log(fruitsName)
const fruitsColor = fruits.map(fruit => fruit.color)
console.log(fruitsColor)

const greenFruits = fruits.filter(fruit => fruit.color === 'Green');
console.log(greenFruits)
const lowCalories = fruits.filter(fruit => fruit.calories < 100)
console.log(lowCalories)
const highCalories = fruits.filter(fruit => fruit.calories >= 100)
console.log(highCalories)

const maxFruit= fruits.reduce( (max, fruit)  => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min)
console.log(maxFruit);
console.log(minFruit);

fruits.splice(1,2)
console.log(fruits)