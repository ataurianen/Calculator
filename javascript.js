function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    }
    else{
        return "error";
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

function populateDisplay (num) {
    let display = document.getElementById('display');
    currentText = display.textContent;
    display.textContent = num;
}

populateDisplay(1);