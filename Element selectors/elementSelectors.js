// Element selectors = Methods used to target and manipulate HTML elements
//                     they allow you to select one or multiple HTML elements
//                     from the Dom (Document Object Model)

//1. document.getElementById()                 // ELEMENT OR NULL
//2. document.getElementsByClassName()         // HTML COLLECTION
//3. document.getElementsByTagName()           // HTML COLLECTION
//4. document.querySelector()                  // ELEMENT OR NULL
//5. document.querySelectorAll()               // NODELIST
//                           ⬇️⬇️⬇️

//1. document.getElementById()
const myH1 = document.getElementById('myH1');
myH1.style.backgroundColor = 'yellow';           //❗Notice on CamelCase. NOT the same as in the CSS document
myH1.style.textAlign = 'center'
console.log(myH1)

//2. document.getElementsByClassName()
const fruits = document.getElementsByClassName('fruits')

fruits[2].textContent += '✅';
console.log(fruits);

for (let fruit of fruits) {
    fruit.style.backgroundColor = 'yellow'
}
Array.from(fruits).forEach(fruit => {  //fruits.forEach() not able to use
    fruit.style.fontSize = '2em'
})

//3. document.getElementsByTagName()
const myH4 = document.getElementsByTagName("h4")
myH4[0].style.backgroundColor = 'red'
for (let h4 of myH4) {
    h4.style.backgroundColor = 'orange'
}
Array.from(myH4).forEach(h1 => {
    h1.style.backgroundColor = 'green'
})

//4. document.querySelector()
const element = document.querySelector('.rootVegetables')
element.style.backgroundColor = 'blue'

const elements = document.querySelector('h4')
elements.style.backgroundColor = 'blue'

//5. document.querySelectorAll()
const non_roots = document.querySelectorAll('.non-rootVegetables')

non_roots[1].style.backgroundColor = 'red'
non_roots.forEach(non_root => {
    non_root.style.backgroundColor = 'yellow'
})

console.log(non_roots)

const liElements = document.querySelectorAll('li')
liElements.forEach(liElement => {
    liElement.style.backgroundColor = 'lightGreen'
})