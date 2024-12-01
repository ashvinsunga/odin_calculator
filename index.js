buttons = document.querySelectorAll(".key")
screen = document.querySelector("#screen")
let screenValue = "";
let value = "";
let input1 = 0;
let input2 = 0;
let calcOperator = ""
let thereIsMessage = false;

buttons.forEach(element => {

    element.addEventListener("mouseover", function () {
        element.style.cursor = 'pointer';
        element.style.border = 'thick solid black'
    })

    element.addEventListener("mouseleave", function () {
        // element.style.cursor = 'pointer';
        element.style.border = '2px solid black'
    })

    element.addEventListener("click", function () {
        if (this.classList.contains("operator-key")){
            screen.textContent += this.innerHTML
            setOperator(this)
        } else if (this.id === "key-equal") {
            setSecondNum()
            operate(calcOperator, input1, input2)
        }           
        else if (this.classList.contains("clear-key")){
            clearValues()
        } else {
            populate(this)
        }
        
    })
});

function populate(element){

    if (thereIsMessage){
        screen.textContent = 0
        thereIsMessage = false;
    }

    if (screen.textContent == 0){
        screen.textContent = ""
        
    }
    value += element.dataset.calcValue
    screenValue = screen.textContent
    screenValue += element.dataset.calcValue
    // console.log(screenValue,calcOperator)
    screen.textContent = screenValue
}

function setFirstNum(){
    input1 = parseInt(value)
    value = 0;
    // console.log("setFirstNum was ran", input1)
}

function setSecondNum(){
    input2 = parseInt(value)
    value = 0;
    // console.log("setSecondNum was ran", input2)
}

function setOperator(element) {

    if (thereIsMessage){
        screen.textContent = 0
        thereIsMessage = false;
    }

    if (input1 === 0){
        setFirstNum()
    } else {
        setSecondNum()
    }


    if (element.textContent === "x"){
        calcOperator = "multiplication"
    }

    if (element.textContent === "÷"){
        calcOperator = "division"
    }

    if (element.textContent === "+"){
        calcOperator = "addition"
    }

    if (element.textContent === "-"){
        calcOperator = "subtraction"
    }

}


function clearValues() {
    input1 = 0;
    input2 = 0;
    value = 0;
    calcOperator = "";
    clearScreen()
}

function clearScreen() {
    screenValue = "0";
    screen.textContent = screenValue;
}


function operate(operator, num1, num2){

    if(!operator || !num1 || !num2) {
        // console.log("Lacking")
    }

// Operation functions

const add = (val1, val2) => val1 + val2
const subtract = (val1, val2) => val1 - val2
const divide = (val1, val2) => {
if (val1 === 0 || val2 === 0){
    thereIsMessage = true;
    return "Not so fast!"
}
    return  Math.round(val1 / val2)
} 
const multiply = (val1, val2) => val1 * val2


    if (operator === "multiplication"){
        value = multiply(num1, num2)
    }

    if (operator === "division"){
        value = divide(num1, num2)
    }

    if (operator === "addition"){
        value = add(num1, num2)
    }

    if (operator === "subtraction"){
        value = subtract(num1, num2)
    }
    
    screen.textContent = value
    input1 = value
    value = 0;

}