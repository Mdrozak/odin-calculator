
const firstOperand = 0
const secondOperand = 0
const operator = "+"



// Create function that adds numbers
function add (number1, number2) {
    return number1 + number2
}

// Create function that subtract numbers
function subtract (number1, number2) {
    return number1 - number2
}

// Create function that multiply numbers
function multiply (number1, number2) {
    return number1 * number2
}

// Create function that divide numbers
function divide (number1, number2) {
    return number1 / number2
}

function operate (operator, firstNumber, secondNumber) {
    operator === "+" ? add(firstNumber, secondNumber) :
    operator === "-" ? subtract(firstNumber, secondNumber) :
    operator === "*" ? multiply(firstNumber, secondNumber) :
    operator === "/" ? divide(firstNumber, secondNumber) : ""
}