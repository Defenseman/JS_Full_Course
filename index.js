//Accept user input--------------------------

/*let username;

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

//Functions--------------------------

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(34));

function validEmail(email){
    return email.includes('@');
}
console.log(validEmail('Blablafake.com'));

function divide(x, y){
    return x / y;
}
console.log(divide(45, 13));

function multiply(x, y){
    return x * y;
}
console.log(multiply(97, 16))

//Variable scope--------------------------

let xy = 4;

function function1(){
    let xy = 3;
    console.log(xy);
}
function1();*/

//Temperature conversion program--------------------------
/*
const tempConvertInput = document.getElementById('tempConvertInput');
const radioBtn1 = document.getElementById('radioBtn1');
const radioBtn2 = document.getElementById('radioBtn2');
const resultOfTempConv = document.getElementById('resultOfTempConv');
let tempFnc;

function convert() {

    if (radioBtn1.checked) {
        tempFnc = Number(tempConvertInput.value);
        tempFnc = (tempFnc - 32) * (5 / 9);
        resultOfTempConv.textContent = tempFnc.toFixed(1) + '°C';
    } else if (radioBtn2.checked) {
        tempFnc = Number(tempConvertInput.value);
        tempFnc = tempFnc * 9 / 5 + 32;
        resultOfTempConv.textContent = tempFnc.toFixed(1) + '°F';
    } else {
        resultOfTempConv.textContent = 'Select a unit!'
    }
}

//Arrays--------------------------

let fruits = ['mango', 'apple', 'banana', 'melon'];

console.log(fruits.pop());

fruits.push('pineapple')
console.log(fruits);

fruits.unshift('coconut');
console.log(fruits);

fruits.shift();
console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits);

console.log(`Second element of Array: ` + fruits[1]);

for (let i = 0; i < fruits.length; i += 2) {
    console.log(fruits[i]);
}
for (let i = fruits.length - 1; i >= 0; i--) {  // .length -1;  it's because of length starting from 0 in Arrays
    console.log(fruits[i]);
}
console.log(fruits.indexOf('mango'))
for (let fruit of fruits) {
    console.log(fruit);
}
let indexOfFruits = fruits.indexOf('Fruit'); //it`s appeared -1, because this element doesn't exist.
console.log(indexOfFruits);

fruits.sort()  //in alphabetical order
console.log(fruits);

fruits.sort().reverse()
console.log(fruits);

//Spread operator--------------------------

let somevar = 'Full Name';
let somevar1 = [...somevar].join('/')
let somevar2 = Math.max(...somevar) // NaN
console.log(somevar2);

let arrOfNum = [1, 2, 3, 4, 5, 6, 7];
let arrOfNum1 = Math.max(...arrOfNum);
let arrOfNum2 = Math.min(...arrOfNum);
console.log(arrOfNum1);
console.log(arrOfNum2);

let newFruits = [...fruits].join(' & ');
console.log(newFruits);

let newFruits1 = [...fruits];  //that is identical
let vegetables = ['celery', 'carrot', 'potatoes'];

let food = [...fruits, ...vegetables, 'egs', 'milk'];
console.log(food);
*/

//Rest parameters-------------------------- Allow a function work with a variable number of arguments by bundling them into in an array

/*function spread(...string1) {
    console.log(string1);
}

//let string1 = spread('Mr', 'Mark', 'Andre', 'ψϡϠ')
spread('Mr', 'Mark', 'Andre', 'ψϡϠ');

function sumOfRest(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

let total = sumOfRest(1, 3, 60, 24);
console.log(`Your total: €${total}`);


function newSpreadFnc(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

let someVar_1 = newSpreadFnc(3, 43, 4, 324, 4, 22, 34)

console.log(`Averege value: ${someVar_1}`)

function openFrig(...foods){
    return foods;
}
const food1 = 'foodItem1';
const food2 = 'foodItem2';
const food3 = 'foodItem3';
const food4 = 'foodItem4';

let foodItems = openFrig(food1, food2, food3, food4);

console.log(...foodItems);*/

//Dice roller game--------------------------
function rollDiceGame() {

    const inputOfDiceRollGame = document.getElementById('inputOfDiceRollGame').value;
    const resultOfDiceNumber = document.getElementById('resultOfDiceNumber');
    const resultOfImage = document.getElementById('resultOfImage');
    let values = [];
    let images = [];


    for (let i = 0; i < inputOfDiceRollGame; i++) {
        const randomDiceNumber = Math.floor((Math.random() * 6) + 1);
        values.push(randomDiceNumber);
        images.push(`<img src="images/${randomDiceNumber}.svg" alt="Dice ${randomDiceNumber}">`);
    }
    resultOfDiceNumber.textContent = `Result: ${values.join(', ')}`
    resultOfImage.innerHTML = images.join(' ')
}

//Generate Random Password--------------------------

function randomPassword(length, lowerCase, upperCase, symbols, numbers) {
    const includesLowerCase = 'qwertyuiopasdfghjklzxcvbnm';
    const includesUpperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const includesSymbols = '!@#$%^&*()_+-='
    const includesNumbers = '0123456789';

    let allowedChars = '';
    let password = '';

    allowedChars += lowerCase ? includesLowerCase : '';
    allowedChars += upperCase ? includesUpperCase : '';
    allowedChars += symbols ? includesSymbols : '';
    allowedChars += numbers ? includesNumbers : '';

    if (length <= 0) {
        return `Your password must be contain at least 1 character`
    }
    if (allowedChars.length === 0) {
        return `Your password must be contain at least 1 set of characters`
    }
    for (let i = 0; i < length; i++) {
        const someIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[someIndex];
    }
    return password
}

const passwordLength = 8;
const includesLowerCase = true;
const includesUpperCase = true;
const includesSymbols = true;
const includesNumbers = true;

let generatedPassword = randomPassword(passwordLength, includesLowerCase, includesUpperCase, includesSymbols, includesNumbers);

console.log(`Your generatedPassword: ${generatedPassword}`);

//Callbacks--------------------------
hello(wait);

function hello(callback) {
    console.log('Hello!');
    callback();
}

function morning() {
    console.log('Morning!');
}

function wait() {
    console.log('Wait!');
}

function bye() {
    console.log('Bye!')
}

//---
sumNumbers(displayDOM, 3, 4)

function sumNumbers(q, x, y) {
    let result = x + y;
    q(result);
}

function resultFunction(result) {
    console.log(result);
}

function displayDOM(result) {
    document.getElementById('myH2').textContent = result;
}

//forEach()--------------------------
let someArr = [1, 2, 3, 4, 5];

someArr.forEach(cube)
//someArr.forEach(double)
someArr.forEach(equation)

function equation(arr) {
    console.log(arr);
}

function double(element, index, array) {
    array[index] = element * 2
}

function triple(element, index, array) {
    array[index] = element * 3
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2)
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3)
}

//---
const fruit = ['apple', 'banana', 'orange', 'melon'];

fruit.forEach(firstLetterUpperCase)
fruit.forEach(showArray)


function showArray(element) {
    console.log(element)
}

function toUpperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function firstLetterUpperCase(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

//map()--------------------------
const students = ['spongebob', 'patrik', 'squidward', 'sandy']

function upperCase(str) {
    return str.toUpperCase()
}

function firstLatterUp(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const newStudents = students.map(upperCase)
console.log(newStudents)

const newSt = students.map(firstLatterUp)
console.log(newSt)
//---
const datesArr = ['2000-01-24', '2007-09-1', '2024-05-24'];

function formedData(arr){
    const newArr = arr.split('-')
    return `${newArr[2]}_${newArr[1]}_${newArr[0]}`
}

const formed = datesArr.map(formedData);
console.log(formed);

//Filter()--------------------------
const isOddOrEven = [1, 2, 3, 4, 5, 6, 7];
const isOddVar = isOddOrEven.filter(isOdd)
const isEvenVar = isOddOrEven.filter(isEven)

console.log(isOddVar)
console.log(isEvenVar)

function isOdd(el) {
    return el % 2 !== 0;
}
function isEven(el) {
    return el % 2 === 0;
}

const peoplesAge = [13, 14, 15, 16, 18, 19, 20, 12, 27];
const adultsAge = peoplesAge.filter(isAdult)
const minorAge = peoplesAge.filter(isMinor)

console.log(adultsAge)
console.log(minorAge)

function isAdult(age){
    return age >= 18;
}
function isMinor(age){
    return age < 18;
}

const basketOFFruit = ['apple', 'banana', 'orange', 'melon', 'watermelon'];
const shortFruits = basketOFFruit.filter(short)
const longFruits = basketOFFruit.filter(long)

console.log(shortFruits)
console.log(longFruits)

function short(el){
    return el.length <= 6;
}
function long(el){
    return el.length >= 6;
}

//reduce()--------------------------


