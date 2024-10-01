let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let firstNum  = null;
let secondNum  = null;
let operator = null;
let isOperatorPressed = false;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (screen.innerText == "0") screen.textContent = "";

        if (isNaN(value)) {
            switch (value) {
                case "DELETE":
                    deleteChar();
                    break;
                case "CLEAR":
                    clear();
                    break;
                case "=":
                    isOperatorPressed = false;
                    parseCalculation();
                    break;
                default:
                    if (!isOperatorPressed) {
                        operator = value;
                        screen.innerText += value;
                        isOperatorPressed = true;
                    } else {
                        parseCalculation();
                        screen.innerText += value;
                    }

                    break;
            }

        } else {
            screen.innerText += btn.innerText;
        }

    });
});

function parseCalculation() {
    let str = screen.textContent;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[×/+÷-]/)) {
            operator = str.charAt(i);
            firstNum = str.substr(0, i);
            secondNum = str.substr(i + 1);
            
            if(firstNum && secondNum){
                let result = operate(Number(firstNum), Number(secondNum), operator);
                if(result % 1 == 0){
                    screen.innerText = result;
                }else{
                    screen.innerText = parseFloat(result).toFixed(2);
                }
            }else{
                screen.innerText = "0";
            }
            break;
        }
    }
}
function operate(x, y, operator) {
    if (firstNum == "" || secondNum == "" || operator == null) {
        alert("Invalid input!");
        return 0;
    }

    isOperatorPressed = false;
    switch (operator) {
        case "+":
            return add(x, y);
            break;
        case "-":
            return sub(x, y);
            break;
        case "×":
            return multiply(x, y);
            break;
        case "÷":
            return y === 0 ? "Error" : divide(x, y);
            break;
        default:
            return "0";
            break;
    }
}
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }
function clear() {
    screen.innerText = "0";
    firstNum = null;
    secondNum = null;
    operator = null;
    isOperatorPressed = false;
}
function deleteChar() {
    screen.innerText = screen.innerText.slice(0, -1);
    if (screen.innerText === "") screen.innerText = "0";
}

document.querySelector("#clear").addEventListener("click", clear);