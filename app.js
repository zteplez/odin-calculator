let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let firstNum;
let secondNum;
let operator = null;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => { 
        if (screen.innerText == "0") screen.textContent = "";

        if(isNaN(btn.textContent)){
            console.log(btn.textContent)
            if(operator == null){
                operator = btn.textContent;
            }else{
                alert( "You cant do that!");
                return
            }
        }else{

        }

        screen.innerText += btn.textContent;
        displayValue = screen.textContent;
    });
});


function operate(x, y, operator) {
    switch (operator) {
        case "+":
            return add(x, y);
            break;
        case "-":
            return sub(x, y);
            break;
        case "*":
            return multiply(x, y);
            break;
        case "%":
            return divide(x, y);
            break;
        default:
            break;
    }
}
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }
function clear() {
    console.log("clear func called")
    screen.innerText = "0";
    firstNum = 0;
    secondNum = 0;
    operator = null;
}

document.querySelector("#clear").addEventListener("click", clear);