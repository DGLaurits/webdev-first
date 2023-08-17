buttons = document.getElementsByClassName("calc-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => calculate(buttons[i].value))
}

const calcDisplay = document.querySelector(".calc-display");
function updateDisplay(text) {
    typeof text === 'number' ?
        calcDisplay.innerHTML = String(text).slice(0,15):
        calcDisplay.innerHTML = text.slice(0, 15)
}

const roundNumber = (num) => Math.round((num + Number.EPSILON) * 100000000000000) / 100000000000000

operations = {
    "÷": (a, b) => b === 0 ? "nice try" : a/b,
    "*": (a,b) => a*b,
    "-": (a, b) => a-b,
    "+": (a, b) => a+b
};

let calcFunc = operations['+'];
let calcLastValue = 0;
let calcToReset = false;

function calculate(value) {
    currentValue = calcDisplay.innerHTML
    // Checks if the value is numeric
    if ( !isNaN(value) ){
        currentValue === '0' || isNaN(currentValue) || calcToReset ? updateDisplay(value) : updateDisplay(currentValue+value);
        calcToReset = false;
        return;
    }
    switch (value) {
        case ".":
            if (!currentValue.includes('.')){
                isNaN(currentValue) ? updateDisplay('0.') : updateDisplay(currentValue + ".");
                calcToReset = false;
            }
            break;
        case "AC":
            calcDisplay.innerHTML = 0;
            calcLastValue = 0;
            break;
        case "C":
            calcDisplay.innerHTML = 0;
            break;
        case "+/-":
            currentValue = calcDisplay.innerHTML
            if (currentValue != 0) 
                updateDisplay(currentValue.charAt(0) == "-" ? currentValue.slice(1) : "-" + currentValue)
            break;
        default:
            if (isNaN(currentValue)){
                updateDisplay(0);
                break;
            }
            result = calcFunc(Number(calcLastValue), Number(currentValue));
            console.log(calcLastValue);
            console.log(calcFunc);
            console.log(currentValue);

            if (value !== '='){
                calcFunc = operations[value];
                calcLastValue = currentValue
             } else {
                calcLastValue = 0
            }
            console.log(`Updated calcLastValue: ${calcLastValue}`);
            updateDisplay(String(result));
            calcToReset = true;
            break;
    }
}