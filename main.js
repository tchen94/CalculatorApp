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
    const displayValue = calculator.displayValue;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

const buttons = document.querySelector('.calc-buttons');
buttons.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('clrbutton')) {
        console.log('clear', target.value);
        return;
    }

    digitInputs(target.value);
    displayInput();
})