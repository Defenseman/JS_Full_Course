const liElement = document.createElement('li');
liElement.textContent = 'Cherry'
liElement.style.backgroundColor = 'lightGreen'
liElement.style.fontWeight = 'bold';
liElement.id = 'liElement';

document.getElementById('fruits').prepend(liElement)
const orange = document.getElementById('orange')
document.getElementById('fruits').insertBefore(liElement, orange)

const fruits = document.querySelectorAll('li')
document.getElementById('fruits').insertBefore(liElement, fruits[3])

document.getElementById('fruits').removeChild(liElement)