function add(a, b) {
    console.log(a + b);
};

function subtract(a, b) {
    console.log (a - b);
};

function multiply(a, b) {
    console.log(a * b);
};

function divide(a, b) {
    console.log(a / b);
};

let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

function operator(operator, a, b) {
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