const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");

let operation;

function appendNumber(number) {
  if (number == "." && currDisplay.innerText.includes(".")) return;
  currDisplay.innerText += number;
}

function chooseOperation(operand) {
  if (currDisplay.innerText == "") return;
  compute(operand);
  operation = operand;
  currDisplay.innerText += operand;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
}

function clearDsiplay() {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
}

function compute(operand) {
  let result;
  const prevValue = parseFloat(prevDisplay.innerText);
  const currValue = parseFloat(currDisplay.innerText);

  if (isNaN(prevValue) || isNaN(currValue)) return;

  switch (operation) {
    case "+":
      result = prevValue + currValue;
      break;
    case "-":
      result = prevValue - currValue;
      break;
    case "*":
      result = prevValue * currValue;
      break;
    case "/":
      result = prevValue / currValue;
      break;
    default:
      return;
  }
  if(result.toString().length >= 7){
    result =  parseFloat(result.toFixed(1))
  }
  currDisplay.innerText = result;
}

numbers.forEach((number) =>{
    number.addEventListener("click", () =>{
        appendNumber(number.innerText)
    })
})

operands.forEach((operand) =>{
    operand.addEventListener("click", () =>{
        chooseOperation(operand.innerText)
    })
})

clearBtn.addEventListener("click", () =>{
    clearDsiplay();
})

equalBtn.addEventListener("click", ()=>{
    compute();
    prevDisplay.innerText = "";
})

delBtn.addEventListener("click", ()=>{
    currDisplay.innerHTML = currDisplay.innerText.slice(0, -1)
})