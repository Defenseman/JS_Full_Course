const display = document.getElementById("display");
/*function isOperator(char) {
    return ['+', '-', '*', '/', '%']
}*/

function append(input) {
    let currentValue = display.value;

    if(currentValue === "ERROR" || currentValue.length === 11) {
        return;
    }if(currentValue === '0' /*&& !isOperator(input)*/) {
        return display.value = input ;
    }/*if(isOperator(currentValue.slice(-1)) && isOperator(input)) {
        return display.value = currentValue.slice(0, -1) + input;
    }*/
    display.value += input

}
function clearDisplay() {
    let currentValue = display.value;
    display.value = '0';
}
function result() {
    let currentValue = display.value;
    if(currentValue.trim() === '') {
        return display.value = '';
    }
    try {
        display.value = eval(display.value)
    }catch (error) {
        display.value = 'ERROR'
    }
}
function change() {
    let currentValue = display.value
    if (currentValue !== '' && !isNaN(Number(currentValue))) {
        if (currentValue.startsWith('-')) {
            display.value = currentValue.slice(1);
        }else {
            display.value = '-' + currentValue;
        }
    }
}