buttons = document.querySelectorAll(".key")
screen = document.querySelector("#screen")
let screenValue = "";
let input1 = 0;
let input2 = 0;

buttons.forEach(element => {
    element.addEventListener("click", function () {
        if (this.classList.contains("operator-key")){
            setNum()
            screen.textContent += this.innerHTML
        } else if (this.classList.contains("clear-key")){
            clearScreen()
        } else {
            populate(this)
        }
    })
});

function populate(element){
    screenValue += element.dataset.calcValue
    screen.textContent = screenValue
}

function anOperator() {
    console.log("I am an operator!")
}


function clearScreen() {
    screenValue = ""
    screen.textContent = screenValue
}

function add(){

}

function subtract(){
    
}

function multiply(){
    
}

function divide(){
    
}

function setNum(){
    screenValue = parseInt(screenValue)
    console.log(typeof(screenValue))
}

function operate(operator, num1, num2){

}