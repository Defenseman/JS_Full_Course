// eventListener - Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const box = document.getElementById("box");
const button = document.getElementById("button");

function changeColor(event) {
    event.target.style.backgroundColor = 'tomato'
    event.target.textContent = 'You did it!🤞🏼'
}

box.addEventListener('click', changeColor)                                          // callback

box.addEventListener('mouseover', event => {                     // arrow fnc
    event.target.style.backgroundColor = 'yellow'
    event.target.textContent = 'Don`t do it!😨'
})

box.addEventListener('mouseout', function (event) {        // anonymous fnc
    event.target.style.backgroundColor = 'lightgreen'
    event.target.textContent = 'Click me🤪'
})