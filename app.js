const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);
var inputReady = true;
var joinReady = false;
var operatorAdded = false;

//switch declarations to a loop
const button0 = document.getElementById("0");
button0.addEventListener("click", function() { numPress(0); });
const button1 = document.getElementById("1");
button1.addEventListener("click", function() { numPress(1); });
const button2 = document.getElementById("2");
button2.addEventListener("click", function() { numPress(2); });
const button3 = document.getElementById("3");
button3.addEventListener("click", function() { numPress(3); });
const button4 = document.getElementById("4");
button4.addEventListener("click", function() { numPress(4); });
const button5 = document.getElementById("5");
button5.addEventListener("click", function() { numPress(5); });
const button6 = document.getElementById("6");
button6.addEventListener("click", function() { numPress(6); });
const button7 = document.getElementById("7");
button7.addEventListener("click", function() { numPress(7); });
const button8 = document.getElementById("8");
button8.addEventListener("click", function() { numPress(8); });
const button9 = document.getElementById("9");
button9.addEventListener("click", function() { numPress(9); });
const buttonPlus = document.getElementById("+");
buttonPlus.addEventListener("click", function() { operatorPress("+"); });
const buttonMinus = document.getElementById("-");
buttonMinus.addEventListener("click", function() { operatorPress("-"); });
const buttonMultiply = document.getElementById("*");
buttonMultiply.addEventListener("click", function() { operatorPress("*"); });
const buttonDivide = document.getElementById("/");
buttonDivide.addEventListener("click", function() { operatorPress("/"); });
const buttonEquals = document.getElementById("solve");
buttonEquals.addEventListener("click", solve);

function clearDisplay() {
    updateDisplay("");
    inputJoinSwitch();
}

function inputJoinSwitch(){
    if(inputReady) {
        inputReady = false;
        joinReady = true;
    } else if(joinReady) {
        inputReady = true;
        joinReady = false;
    }
}

function numPress(num){
    let currentNum = document.getElementById("lcd").innerHTML;
    //console.log("currentNum is " + currentNum);
    if(inputReady){
        updateDisplay(num);
        inputJoinSwitch();
    }
    if(joinReady){
        //console.log("num is " + num + ". currentNum is " + currentNum);
        num = currentNum.toString() + num.toString();
        //console.log("Combined, num is " + num);
        updateDisplay(num);
    }  
}

function operatorPress(operator) {
    let currentNum = document.getElementById("lcd").innerHTML;
    operatorAdded = true;
    //console.log("currentNum is " + currentNum);
    if(inputReady){
        return;
    }
    if(joinReady){
        //console.log("operator is " + operator + ". currentNum is " + currentNum);
        operator = currentNum.toString() + " " + operator.toString() + " ";
        updateDisplay(operator);
    }  
}

function solve() {
    let currentNum = document.getElementById("lcd").innerHTML;
    currentNum = currentNum.toString().trim();
    let numArray = currentNum.split(" ");
    for(let i = 0; i < numArray.length; i++) {
        //console.log("numArray[" + i + "] is " + numArray[i]);
    }

    if(numArray.length !== 3) {
        return updateDisplay("Error: Invalid input. I'm a simple calculator and can only handle one operation at a time.");
    }
    switch(numArray[1]){
        case "+":
            var solution = parseFloat(numArray[0]) + parseFloat(numArray[2]);
            break;
        case "-":
            var solution = parseFloat(numArray[0]) - parseFloat(numArray[2]);
            break;
        case "*":
            var solution = parseFloat(numArray[0]) * parseFloat(numArray[2]);
            break;
        case "/":
            if (parseFloat(numArray[2]) === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            var solution = parseFloat(numArray[0]) / parseFloat(numArray[2]);
            break;
        default:
            alert("Invalid operator.");
            return;
    }
    updateDisplay(solution);
}

function updateDisplay(num) {
   let element = document.getElementById("lcd");
   element.innerHTML = num;
}