// eventListener - Listen for specific events to create interactive web pages
//                 events: keydown keyup
//                 document.addEventListener(event, callback);

/*document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);
})
document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key}`);
})*/

const box = document.getElementById("box");
let x = 0;
let y = 0;
let moveAmount = 10;

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    switch (event.key) {
        case 'ArrowUp':
            y -= moveAmount
            break;
        case 'ArrowDown':
            y += moveAmount
            break;
        case 'ArrowLeft':
            x -= moveAmount
            break;
        case 'ArrowRight':
            x += moveAmount
            break;
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
})

document.addEventListener('keydown', (event) => {
    if (event.key.startsWith('Arrow')) {      // If statement is redundant
        box.style.backgroundColor = 'tomato'
        box.textContent = '🤪'
    }
})
document.addEventListener("keyup", (event) => {
    box.style.backgroundColor = 'lightblue'
    box.textContent = '🙂'
})


/*
const moveStep = 20;
let y = 0;
let x = 0;

document.addEventListener('keydown', (event) => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();
        switch (event.key) {
            case 'ArrowUp':
                y -= moveStep;
                break;
            case 'ArrowDown':
                y += moveStep;
                break;
            case 'ArrowLeft':
                x -= moveStep;
                break;
            case 'ArrowRight':
                x+= moveStep;
                break
        }
        box.style.top = y + 'px';
        box.style.left = x + 'px'
    }
})
document.addEventListener('keydown', (event) => {
    box.textContent = '😨'
    box.style.backgroundColor = 'tomato'
})
document.addEventListener('keyup', (event) => {
    box.textContent = '🙂'
    box.style.backgroundColor = 'lightblue'
})*/
