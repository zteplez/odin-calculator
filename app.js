let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("test")
        if(screen.innerText == "0"){
            screen.innerText = "";
        }
        screen.innerText += btn.innerText;
    });
});  

let firstNum;
let secondNum;
let result;

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
function clear(){
     screen.innerText = "0";
     firstNum = 0;
     secondNum = 0;
     answer = 0;
}
document.querySelector("#clear").addEventListener("click", clear);
