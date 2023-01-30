const display = document.getElementById('display');
const container = document.getElementById('container');
let currentNumber = null;
let previousNumber = null;
let operator = null;

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    if (num2 != 0) {
        return Number(num1) / Number(num2);
    }
    else{
        return "Boom!";
    }
}

function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1,num2);
    }
    else if (operator == '-') {
        return subtract(num1,num2);
    }
    else if (operator == '*') {
        return multiply(num1,num2);
    }
    else if (operator == '/') {
        return divide(num1,num2);
    }
    else {
        return 'Invalid operator';
    }
}

function populateDisplay () {
    if (currentNumber && previousNumber == null) {
        if (currentNumber.length > 10) {
            currentNumber = currentNumber.substring(0,10);
        }
        else {
            display.textContent = currentNumber;
        }
    }
    else if (currentNumber == null) {
        if (previousNumber.length > 10) {
            previousNumber = previousNumber.substring(0,10);
        }
        else {
            display.textContent = previousNumber;
        }
    }
    else {
        if (currentNumber.length > 10) {
            currentNumber = currentNumber.substring(0,10);
        }
        else {
            display.textContent = currentNumber;
        }
    }
}    

function clearDisplay() {
    display.textContent = "";
}

document.getElementById('0-btn').addEventListener('click', function(){
    if (currentNumber != null) {
        currentNumber += '0';
        populateDisplay();
    }    
});

document.getElementById('1-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '1';
    }
    else {
        currentNumber += '1';
    }
    populateDisplay();
});

document.getElementById('2-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '2';
    }
    else {
        currentNumber += '2';
    }
    populateDisplay();
});

document.getElementById('3-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '3';
    }
    else {
        currentNumber += '3';
    }
    populateDisplay();
});

document.getElementById('4-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '4';
    }
    else {
        currentNumber += '4';
    }
    populateDisplay();
});

document.getElementById('5-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '5';
    }
    else {
        currentNumber += '5';
    }
    populateDisplay();
});

document.getElementById('6-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '6';
    }
    else {
        currentNumber += '6';
    }
    populateDisplay();
});

document.getElementById('7-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '7';
    }
    else {
        currentNumber += '7';
    }
    populateDisplay();
});

document.getElementById('8-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '8';
    }
    else {
        currentNumber += '8';
    }
    populateDisplay();
});

document.getElementById('9-btn').addEventListener('click', function(){
    if (currentNumber == null) {
        currentNumber = '9';
    }
    else {
        currentNumber += '9';
    }
    populateDisplay();
});

document.getElementById('clear-btn').addEventListener('click', function(){
    clearDisplay();
    previousNumber = null;
    currentNumber = null;
    operator = null;
});

document.getElementById('equal-btn').addEventListener('click', function(){  
    if (operator != null) {
        previousNumber = operate(operator,previousNumber,currentNumber).toString();
        currentNumber = null;
        populateDisplay();
    }
});

document.getElementById('addition-btn').addEventListener('click', function(){
    if (currentNumber != null){
        if (previousNumber != null) {
            previousNumber = operate(operator,previousNumber,currentNumber).toString();
        }
        else {
            previousNumber = currentNumber;
        }
        currentNumber = null;
        operator = '+';
        populateDisplay();
    }
});

document.getElementById('subtract-btn').addEventListener('click', function(){
    if (currentNumber != null){
        if (previousNumber != null) {
            previousNumber = operate(operator,previousNumber,currentNumber).toString();
        }
        else {
            previousNumber = currentNumber;
        }
        currentNumber = null;
        operator = '-';
        populateDisplay();
    }
});

document.getElementById('multiply-btn').addEventListener('click', function(){
    if (currentNumber != null){
        if (previousNumber != null) {
            previousNumber = operate(operator,previousNumber,currentNumber).toString();
        }
        else {
            previousNumber = currentNumber;
        }
        currentNumber = null;
        operator = '*';
        populateDisplay();
    }
});

document.getElementById('divide-btn').addEventListener('click', function(){
    if (currentNumber != null){
        if (previousNumber != null) {
            previousNumber = operate(operator,previousNumber,currentNumber).toString();
        }
        else {
            previousNumber = currentNumber;
        }
        currentNumber = null;
        operator = '/';
        populateDisplay();
    }
});