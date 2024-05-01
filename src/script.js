
const calcDivPanel = document.querySelector(".panel")
const calcDivDisplay = document.querySelector(".inp")
let firstOperand = 0
let secondOperand = 0
let operator = ""
let displayValue = ""
let clickedOperator = ""
let calculatedValue = 0


// Create function that adds numbers
function add (number1, number2) {
    return parseInt(number1) + parseInt(number2)
}

// Create function that subtract numbers
function subtract (number1, number2) {
    return parseInt(number1) - parseInt(number2)
}

// Create function that multiply numbers
function multiply (number1, number2) {
    return parseInt(number1) * parseInt(number2)
}

// Create function that divide numbers
function divide (number1, number2) {
    return parseInt(number1) / parseInt(number2)
}

function operate (operator, firstNumber, secondNumber) {
    if (operator === "/" && firstNumber === secondNumber) {
       console.log("damn, don't divide by zero! Clearing all state")
        clearAll()
    }
    else {
        operator === "+" ? calculatedValue = add(firstNumber, secondNumber) :
        operator === "-" ? calculatedValue = subtract(firstNumber, secondNumber) :
        operator === "*" ? calculatedValue = multiply(firstNumber, secondNumber) :
        operator === "/" ? calculatedValue = divide(firstNumber, secondNumber) : ""
        
        return calculatedValue.toFixed(0)
    }

}

function onClickChangeBackground (element, state) {
    return state === "on" ? element.style.background = "green" : element.style.background = ""
}

function clearAll () {
    clickedOperator ? onClickChangeBackground(clickedOperator, "off") : clickedOperator = ""
    firstOperand = 0
    secondOperand = 0
    operator = ""
    displayValue = ""
    calculatedValue = 0
    calcDivDisplay.textContent = "_"
    
}

calcDivPanel.addEventListener("click", function(element){
    if (element.target.className === "btn number" && displayValue.length <= 10 && clickedOperator === "") {
        displayValue += element.target.textContent
        calcDivDisplay.textContent = displayValue

    }
    else if (element.target.className === "btn operator" && displayValue.length > 0 && operator === "") {
        firstOperand = displayValue
        operator = element.target.textContent
        clickedOperator = element.target
        displayValue = ""
        calcDivDisplay.textContent = displayValue
        onClickChangeBackground(clickedOperator, "on")
    }
    else if (element.target.className === "btn number" && operator !== "") {
        displayValue += element.target.textContent
        calcDivDisplay.textContent = displayValue
        secondOperand = displayValue
        
    }
    else if (element.target.className === "btn equals" || element.target.className === "btn operator") {
        if (element.target.className === "btn equals" && operator === "" && firstOperand === 0 && secondOperand === 0) {
            return false
        }
        else if (element.target.className === "btn operator" && operator !== "" && clickedOperator === "" ) {
            return false
        }
        else if (element.target.className === "btn operator" && displayValue === "") {
            return false
        }
        else {
            displayValue = operate(operator, firstOperand, secondOperand).toString() ?? ""
            onClickChangeBackground(clickedOperator, "off")
            firstOperand = displayValue
            operator = ""
            calcDivDisplay.textContent = displayValue
            clickedOperator = ""
        }
    }

    if (element.target.className === "btn clear") {
        clearAll()
    }
})