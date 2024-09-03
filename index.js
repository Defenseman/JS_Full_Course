//Accept user input--------------------------

let username;

document.getElementById('buttonSubmit').onclick = function (){
    username = document.getElementById('usernameInput').value;
    document.getElementById('myH3').textContent = `Hello dear ${username}`;
}

//Type conversion--------------------------

let x = "";
let y = "";
let z = "";

x = Boolean(x);
y = Boolean(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//constance in JS--------------------------

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("buttonSubmit_1").onclick = function (){
    radius = document.getElementById("inputRadius").value;
    radius = Number(radius);
    circumference = pi * 2 * radius;
    document.getElementById("my_H3").textContent = `Radius:  ${circumference} cm`;
}

//Counter program--------------------------

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const mainText = document.getElementById("mainText");
let count = 0;

document.getElementById("increaseBtn").onclick = function (){
    count ++;
    document.getElementById("mainText").textContent = count;
}
document.getElementById("decreaseBtn").onclick = function (){
    count -= 1;
    document.getElementById("mainText").textContent = count;
}
document.getElementById("resetBtn").onclick = function (){
    count = 0;
    document.getElementById("mainText").textContent = count;
}

//Math.objects--------------------------

let g = -3.49;
let v = 99;
let b = 3.01;

//g = Math.round(g)
//v = Math.floor(v)
//b = Math.ceil(b)
//g = Math.trunc(g)

//v = Math.sqrt(v);
//b = Math.pow(g, b);

//b = Math.log(b)
//g = Math.tan(g);
//v = Math.sin(v);
//b = Math.cos(b);

//g = Math.abs(g);
//v = Math.sign(v)

//g = Math.min(g, v, b)
//g = Math.max(g, v, b)
//let min = Math.min(g, v, b)
//let max = Math.max(g, v, b)

//console.log(min, max, min, max);

//Random number generator--------------------------

const randomLabel1 = document.getElementById('randomLabel1')
const randomLabel2 = document.getElementById('randomLabel2')
const randomLabel3 = document.getElementById('randomLabel3')
const randomBtn = document.getElementById('randomBtn')
const min1 = 1;
const max1 = 6;
let randomNum1;
let randomNum2;
let randomNum3;

randomBtn.onclick = function () {
    randomNum1 =  Math.floor(Math.random() * max1) + min1;
    randomNum2 = Math.floor(Math.random() * max1) + min1;
    randomNum3 = Math.floor(Math.random() * max1) + min1;
    randomLabel1.textContent = randomNum1;
    randomLabel2.textContent = randomNum2;
    randomLabel3.textContent = randomNum3;
}

//If statement--------------------------

const inputOld = document.getElementById('inputOld');
const btnOld = document.getElementById('btnOld');
const resultMsg = document.getElementById('resultMsg');

let age;


btnOld.onclick = function () {
    age = inputOld.value;
    age = Number(age);
    if(age >= 100){
        resultMsg.textContent = `You are TOO OLD to enter this website`;
    }else if(age < 0){
        resultMsg.textContent = `You can't be below 0`;
    }else if(age >= 18){
        resultMsg.textContent = `You are old enough to enter this website`;
    }else if(age === 0){
        resultMsg.textContent = `You can't enter this website. You were just born`;
    }else {
        resultMsg.textContent = `You must be 18+ years old`;
    }
}

//Checked property--------------------------
    const checkboxInput = document.getElementById('checkboxInput');
    const idVisa = document.getElementById('idVisa');
    const idMastercard = document.getElementById('idMastercard');
    const idPaypal = document.getElementById('idPaypal');
    const submitCardsBtn = document.getElementById('submitCardsBtn');
    let resultOfCheckboxInput = document.getElementById('resultOfCheckboxInput');
    let resultOfRadioButtons = document.getElementById('resultOfRadioButtons');

    submitCardsBtn.onclick = function(){
        if(checkboxInput.checked) {
            resultOfCheckboxInput.textContent = `You are Subscribed!`;
        } else{
            resultOfCheckboxInput.textContent = `You are NOT Subscribed!`;
        }
        if(idVisa.checked) {
            resultOfRadioButtons.textContent = `Your paying method is VISA!`;
        }else if (idMastercard.checked) {
            resultOfRadioButtons.textContent = `Your paying method is MASTERCARD!`;
        }else if (idPaypal.checked) {
            resultOfRadioButtons.textContent = `Your paying method is PAYPAL!`;
        }else {
            resultOfRadioButtons.textContent = `You must select a payment type!`
        }
    }

//Ternary operator--------------------------
let age_1 = 17;
let access = age_1 >= 18 ? `You are entered` : `You are NOT old enough`;
console.log(access);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 23 : 0;
console.log(`Your total prise including discount: $${purchaseAmount - purchaseAmount * (discount / 100)}`);

//Switches--------------------------
let testScore = 50;
let grade;
    switch(true){
        case testScore >= 90:
            grade = "A";
            break
        case testScore >= 80:
            grade = "B";
            break
        case testScore >= 70:
            grade = "C";
            break
        case testScore >= 60:
            grade = "D";
            break
        default:
            grade = "F";
    }
console.log(`Your grade is ${grade}`);

//String methods--------------------------
const name_0 = "Example---Name"

console.log(name_0.charAt(0) )
console.log(name_0.toLowerCase());
console.log(name_0.toUpperCase());
console.log(name_0.repeat(3));
console.log(name_0.padStart(15, "0"))
console.log(name_0.padEnd(15, "0"));
console.log(name_0.replaceAll('-', '/'));
console.log(name_0.indexOf('a'));
console.log(name_0.lastIndexOf('a'));
console.log(name_0.trim());
console.log(name_0.length);

let exam_name_0 = name_0.startsWith(' ');
if(exam_name_0){
    console.log('Your name can`t start with " "');
}else {
    console.log(name_0);
}

let exam_name_1 = name_0.endsWith(' ');
if(exam_name_1){
    console.log('Your name can`t end with " "');
}else {
    console.log(name_0);
}

let exam_name_2 = name_0.includes(' ');
if(exam_name_2){
    console.log('Your name can`t include " "');
}else {
    console.log(name_0);
}


//String slicing--------------------------
const full_name = 'Hockey player';

let first_name = full_name.slice(0, full_name.indexOf(' ') + 1);
let last_name = full_name.slice(-6);

console.log(first_name);
console.log(last_name);

//Method chaining--------------------------

//No method ----

let userName_0 = window.prompt('Enter your username: ');
userName_0 = userName_0.trim();
let letter = userName_0.charAt(0);
letter = letter.toUpperCase();

let extraChar = userName_0.slice(1);
extraChar = extraChar.toLowerCase();
userName_0 = letter + extraChar;
console.log(userName_0);

//Method chaining ----

let greetingMessage0 = window.prompt("Please enter your name")

console.log(greetingMessage0.trim().charAt(0).toUpperCase() + greetingMessage0.trim().slice(1).toLowerCase());

// Logical operators--------------------------
// && - and
// || - or
// ! - not

let temp = 20;
if (temp > 10 && temp <= 25 && temp !== 20) {
    console.log('The weather is GOOD!')
}else {
    console.log('The weather is NOT GOOD!')
}

let isRainy = false;
if(!isRainy){
    console.log('The weather is NOT Rainy!')
}else {
    console.log('The weather is Rainy!')
}

//Strict equality--------------------------
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values && datatype are equal)
// != inequality operator
// !== strict inequality operator

const PI = '3.14';
if(PI !== 3.14){
    console.log('It`s NOT PI')
}else {
    console.log('It`s PI!')
}

//While loops, Do while loops--------------------------

let hey= prompt("How are you?");

while (hey === "" || hey === null){
    hey = window.prompt('Enter correct VALUE');
}
console.log(`${hey}, cool me too`);

const loggedIn = true;
let email;
let password;
do {
    password = prompt('Enter your Password');
    email = prompt('Enter your Email');
    if(password === 'MyPass' && email === 'MyMail'){
        console.log('You are logged in!')
    }else {
        alert('Invalid credentials');
        console.log('Invalid credentials');
    }
} while (!loggedIn);

//For loops--------------------------

for(i = 0; i < 10; i++ ){
    if(i === 7){
        continue
        //break
    }
    console.log(i)
}

//Number guessing game--------------------------
let min_num = 1;
let max_num = 100;
let rdmNum = Math.floor(Math.random() * (max_num + 1)) + min_num;
let attempts = 0;
let guessing;
let running = true;

while(running){
    guessing = window.prompt(`Try to guess a number between ${min_num} - ${max_num}`);
    guessing = Number(guessing)
    if(isNaN(guessing)){
        window.alert(`Please enter a VALID number`)
    }else if(guessing < min_num || guessing > max_num){
        window.alert(`Enter enter a VALID number`)
    }
    else {
        attempts++;
        if (guessing < rdmNum) {
            window.alert(`Too LOW try agan`)
        } else if (guessing > rdmNum) {
            window.alert(`Too HIGH try agan`)
        } else {
            window.alert(`You are Correct! The answer is ${rdmNum}. It took you a ${attempts} attempts!`);
            running = false;
        }
    }
}



