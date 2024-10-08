// classList = Element property in JavaScript used to interact
//             with an element`s list of classes (CSS classes)
//             Allows you to make reusable classes for many element
//             across your webpage.

// add()
// remove()
// toggle(Remove If present, Add if not)
// replace(oldClass, newClass)
// contains()

let myBtn = document.querySelectorAll(".buttons");

myBtn.forEach(button => {
    button.classList.add("enabled");
})

myBtn.forEach(button => {
    button.addEventListener('mouseover', (event) => {
        event.target.classList.add("hover");   // event.target.classList.add("hover");
    })
})
myBtn.forEach(button => {
    button.addEventListener('mouseout', (event) => {
        event.target.classList.remove("hover");
    })
})

myBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.classList.contains('disabled')) {
            event.target.textContent += '👀'
        }else {
            event.target.classList.replace('enabled', 'disabled')
        }
    })
})