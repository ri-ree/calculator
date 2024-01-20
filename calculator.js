const display = document.querySelector('#display');
const content = document.createElement('div');

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    content.textContent = button.id;
    });
});

display.appendChild(content);

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
    return a / b;
};

let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

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