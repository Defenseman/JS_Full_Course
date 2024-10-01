// classList = Element property in JavaScript used to interact
//             with an element`s list of classes (CSS classes)
//             Allows you to make reusable classes for many element
//             across your webpage.

// add()
// remove()
// toggle(Remove If present, Add if not)
// replace(oldClass, newClass)
// contains()

const myBtn = document.getElementById("myBtn");

myBtn.classList.add("enabled");
myBtn.classList.remove("enabled");

myBtn.addEventListener('mouseover', (event) => {
    event.target.classList.toggle("hover");   // event.target.classList.add("hover");
})
myBtn.addEventListener('mouseout', (event) => {
    event.target.classList.toggle("hover");   // event.target.classList.remove("hover");
})

myBtn.addEventListener()