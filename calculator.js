const display = document.querySelector('#display');
const content = document.createElement('div');

const buttons = document.querySelectorAll('.btn');

const equalSign = document.querySelector('#equal');

let firstNum = 0;
let secondNum = 0;
let theOperator;
let numberOfClicks = 0;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (secondNum == 0) {
        return "Hey there! We don't divide by 0!";
    } else {
        return a / b;
    };
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    content.textContent = button.id;
        if (numberOfClicks % 2 == 0) {
            firstNum += button.id;
        } else {
            secondNum += button.id;
        };
    });
});

display.appendChild(content);

const operators = document.querySelectorAll('.operator');
operators.forEach((op) => {
    op.addEventListener('click', () => {
        theOperator = op.id;
        numberOfClicks++;
        console.log(firstNum);
        console.log(secondNum);
        console.log(theOperator);
        console.log(numberOfClicks);
    });
});

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    };
};

equalSign.addEventListener('click', () => {
    content.textContent = operate(Number(firstNum), theOperator, Number(secondNum));
});


