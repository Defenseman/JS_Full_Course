const display = document.getElementById("display");

function append(input) {
    display.value += input
}
function clear() {
    display.value = "";
}
function result() {
    try {
        display.value = eval(display.value)
    }catch (error) {
        display.value = 'ERROR'
    }
}