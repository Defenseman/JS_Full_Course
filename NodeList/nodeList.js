// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won`t update to automatically reflect changes

let buttons = document.querySelectorAll('.buttons')

// ADD HTML/CSS PROPERTIES
// CLICK event listener

buttons.forEach(button => {
    button.addEventListener('click', (e) => {  //we can skip e :Event if we don`t need it

        if (button.hasAttribute('data-checked')) {
            button.style.backgroundColor = ''
            button.textContent = button.textContent.replace('✅', '')
            button.removeAttribute('data-checked')
        }else {
            button.style.backgroundColor = 'lightGreen'
            button.textContent += '✅'
            button.setAttribute('data-checked', 'true')
        }
    })
})

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(btn => {
    btn.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'hsla(194, 100%, 65%, 80%)'
    })
})
buttons.forEach(btn => {
    btn.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = ''
    })
})

// ADD AN ELEMENT

const newBtn = document.createElement('button')
const newBtn2 = document.createElement('button')

newBtn.classList.add('buttons')
newBtn.textContent = 'Button 5'
newBtn2.classList.add('buttons')
newBtn2.textContent = 'Button 6'

document.body.append(newBtn, newBtn2)  //appendChild able to add only 1 element unlike append

console.log(buttons) // shows us NodeList(4) [buttons]

buttons = document.querySelectorAll('.buttons')
console.log(buttons) // NOW shows us NodeList(6) [buttons]

// REMOVE ELEMENT

document.body.removeChild(newBtn)
buttons = document.querySelectorAll('.buttons')
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        button.remove()
        buttons = document.querySelectorAll('.buttons')
        console.log(buttons)
    })
})





