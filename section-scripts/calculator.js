const calcDisplay = document.querySelector(".calc-display");

operations = {
    "÷": (a, b) => b === 0 ? "nice try" : a/b,
    "*": (a,b) => a*b,
    "-": (a, b) => a-b,
    "+": (a, b) => a+b
};

const updateDisplay = (text) => String(text.length) > 15 ? calcDisplay.innerHTML = "Limit reached" : calcDisplay.innerHTML = text

buttons = document.getElementsByClassName("calc-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => calculate(buttons[i].value))
}

let calcFunc = operations[3];
let calcFirstValue = 0;
let calcToReset = false;

function calculate(value) {
    currentValue = calcDisplay.innerHTML
    // Checks if the value is numeric
    if ( !isNaN(value) ){
        console.log(value)
        currentValue == 0 || isNaN(currentValue) || calcToReset ? updateDisplay(value) : updateDisplay(currentValue+value);
        return;
    }
    switch (value) {
        case ".":
            console.log(value);
            isNaN(currentValue) ? updateDisplay('0.') : updateDisplay(currentValue + ".");
            break;
        case "AC":
            calcDisplay.innerHTML = 0;
            firstValue = 0;
            break;
        case "C":
            calcDisplay.innerHTML = 0;
            break;
        case "+/-":
            currentValue = calcDisplay.innerHTML
            if (currentValue != 0) 
                calcDisplay.innerHTML = currentValue.charAt(0) == "-" ? currentValue.slice(1) : "-" + currentValue;
            break;
        case "=":
            if (isNaN(currentValue)){
                updateDisplay(0);
                break;
            }
            result = calcFunc(Number(calcFirstValue), Number(currentValue));
            calcFirstValue = currentValue
            updateDisplay(result);
            calcToReset = true;
            break;
        default:
            calcFunc = operations[value];
            console.log(calcFunc)
            calcFirstValue = currentValue
            updateDisplay(0)
            break;
    }
}