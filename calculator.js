const display = document.querySelector('#display');
const content = document.createElement('div');

const buttons = document.querySelectorAll('.btn');

const equalSign = document.querySelector('#equal');

const clearButton = document.querySelector('#clear');

let firstNum = 0;
let secondNum = 0;
let theOperator;
let nextOperator;
let numberOfClicks = 0;
let equalClicked = 1;
let equalSecondClicked = 0;

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
        if (numberOfClicks > 0 && numberOfClicks % 2 == 0) {
            firstNum = 0;
            secondNum = 0;
            numberOfClicks = 0;
        };

        if (numberOfClicks % 2 == 0) {
            firstNum += button.id;
            content.textContent = Number(firstNum);
        } else {
            secondNum += button.id;
            content.textContent = Number(secondNum);
            equalSecondClicked = equalClicked;
        };
    });
});

display.appendChild(content);

const operators = document.querySelectorAll('.operator');
operators.forEach((op) => {
    op.addEventListener('click', () => {
        if (numberOfClicks % 2 == 0) {
            theOperator = op.id;
            numberOfClicks++;
        } else {
            firstNum = operate(Number(firstNum), theOperator, Number(secondNum));
            nextOperator = op.id;
            theOperator = nextOperator;
            secondNum = 0;
            content.textContent = firstNum;
        };
    });
});

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        numberOfClicks = 0;
        return "";
    };
};

equalSign.addEventListener('click', () => {
    if (firstNum !== 0 && numberOfClicks !== 0 && equalSecondClicked == equalClicked) {
        numberOfClicks++;
        equalClicked++;
        if (operate(Number(firstNum), theOperator, Number(secondNum)) % 1 == 0) {
            content.textContent = operate(Number(firstNum), theOperator, Number(secondNum));
        } else {
            content.textContent = operate(Number(firstNum), theOperator, Number(secondNum)).toFixed(2);
        };
        firstNum = operate(Number(firstNum), theOperator, Number(secondNum));
        secondNum = 0;
    };
});

clearButton.addEventListener('click', () => {
    content.textContent = "";
    firstNum = 0;
    secondNum = 0;
    numberOfClicks = 0;
    equalClicked = 1;
    equalSecondClicked = 0;
});
