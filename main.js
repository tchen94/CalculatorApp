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

function digitInputs(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function addDecimal(period) {
    if (!calculator.displayValue.includes(period)) {
        calculator.displayValue += period;
    }
}

function operators(nextOperation) {
    const { firstOperand, displayValue, operator } = calculator;
    const input = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(input)) {
        calculator.firstOperand = input;
    }

    calculator.secondOperand = true;
    calculator.operator = nextOperation;
}

const buttons = document.querySelector('.calc-buttons');
buttons.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        operators(target.value);
        displayInput();
        return;
    }

    if (target.classList.contains('decimal')) {
        addDecimal(target.value);
        displayInput();
        return;
    }

    if (target.classList.contains('clrbutton')) {
        console.log('clear', target.value);
        return;
    }

    digitInputs(target.value);
    displayInput();
})