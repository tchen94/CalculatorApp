const calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    operator: null,
};

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+': 
            return add(a, b);
        case '-': 
            return subtract(a, b);
        case '*': 
            return multiply(a, b);
        case '/': 
            return divide(a, b);
        case '%': 
            return remainder(a, b);
    }
}

function displayInput() {
    const display = document.querySelector('.calc-screen');
    display.value = calculator.displayValue;
}
