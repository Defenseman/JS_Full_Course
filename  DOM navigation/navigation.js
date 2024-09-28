//DOM navigation = The process of navigation through the structure
//                 of HTML element in JavaScript


//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

const food = document.getElementById("fruits");
const firstElement = food.firstElementChild
firstElement.style.backgroundColor = 'yellow'

//---------.lastElementChild---------
const food2 = document.getElementById('vegetables')
const lastElement = food2.lastElementChild
lastElement.style.backgroundColor = 'lightGreen'

const ulElements = document.querySelectorAll('ul');
ulElements.forEach(element => {
    const lastElement = element.lastElementChild;
    lastElement.style.backgroundColor = 'blue'
})

//---------.nextElementSibling---------
const element = document.getElementById('apple')
const nextElement = element.nextElementSibling
nextElement.style.backgroundColor = 'red'

//---------.previousElementSibling---------
const el = document.getElementById('beet')
const prevEl = el.previousElementSibling
prevEl.style.backgroundColor = 'purple'

//---------.parentElement---------
const parentEl = document.getElementById('waffle')
const parent = parentEl.parentElement
parent.style.backgroundColor = 'brown'

//---------.children---------
const childrenElements = document.getElementById('vegetables')
const children = childrenElements.children
Array.from(children).forEach(child => {
    child.style.backgroundColor = 'green'
})
children[1].style.backgroundColor = 'blue'