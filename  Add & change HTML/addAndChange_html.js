// ------- EXAMPLE 1 <h1> -------

// STEP 1 CREATE THE ELEMENT

const myH1 = document.createElement('h1')

// STEP 2 ADD ATTRIBUTES/PROPERTIES

myH1.textContent = 'HELLO WORLD!'
myH1.id = 'helloWorld'
myH1.style.color = 'Tomato'
myH1.style.textAlign = 'center'
console.log(myH1)

// STEP 3 APPEND ELEMENT TO DOM

document.body.append(myH1)
document.body.prepend(myH1)
document.getElementById('box1').append(myH1)
document.getElementById('box2').prepend(myH1)

const box3 = document.getElementById('box3')
document.body.insertBefore(myH1, box3)

const boxes = document.getElementsByClassName('boxes')
document.body.insertBefore(myH1, boxes[3])

// REMOVE HTML ELEMENT

document.body.removeChild(myH1)
document.getElementById('box3').removeChild(myH1)

