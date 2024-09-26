const display = document.getElementById("display");

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char)
}

function append(input) {
    let currentValue = display.value;

    if (currentValue === "ERROR" || currentValue.length === 11) {
        return;
    }
    if (currentValue === '0' && !isOperator(input)) {
        return display.value = input;
    }
    if (isOperator(currentValue.slice(-1)) && isOperator(input)) {
        return display.value = currentValue.slice(0, -1) + input;
    }
    display.value += input
}

function clearDisplay() {
    display.value = '0';
}

function result() {
    let currentValue = display.value;
    if (currentValue.trim() === '' || !/[0-9]/.test(currentValue) || currentValue.slice(-1) === '-' || currentValue.slice(-1) === '+' || currentValue.slice(-1) === '%' || currentValue.slice(-1) === '*' || currentValue.slice(-1) === '/') {
        return;
    }
    if (!currentValue.includes('+') && !currentValue.includes('-') && !currentValue.includes('*') && !currentValue.includes('/') && !currentValue.includes('%')) {
        display.value = display.value * 2
    }
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'ERROR'
    }
}

function change() {
    let currentValue = display.value
    if (currentValue !== '' && !isNaN(Number(currentValue))) {
        if (currentValue.startsWith('-')) {
            display.value = currentValue.slice(1);
        } else {
            display.value = '-' + currentValue;
        }
    }
}

function dotDisplay(input) {
    let currentValue = display.value;
    let part = currentValue.split(/[+\-*\/%]/);
    let lastPart = part[part.length - 1];

    if (lastPart.includes('.') || currentValue === '' || isOperator(currentValue.slice(-1)) || currentValue === 'ERROR') {
        return;
    }
    display.value += input
}