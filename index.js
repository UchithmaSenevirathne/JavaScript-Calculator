const outPut = document.getElementById("output-value");
// const history = document.getElementById("history-value");
const operators = document.getElementsByClassName("operator"); 
const numbers = document.getElementsByClassName("number");

let currentValue = "";
// let historyValue = " ";

function updateOutput() {
  outPut.textContent = currentValue;
}

function clearDisplay() {
  currentValue = "";
  // historyValue = "";
}

function backspace() {
  currentValue = currentValue.substring(0, currentValue.length - 1);
  // currentValue = currentValue.slice(0, -1);
}

function evaluate() {
  currentValue = currentValue.toString().replace("x", "*");
  if (currentValue === "Error") {
    return "Error";
  }

  if (currentValue.includes("%")) {
    const parts = currentValue.split("%");
    let number = parseFloat(parts[0]) / 100;

    currentValue = number.toString();

  } else {

    try {
      currentValue = eval(currentValue);
    } catch (error) {
      currentValue = "Error";
    }
  
  }

  updateOutput();
}

Array.from(operators).forEach((operators) => {
  operators.addEventListener("click", () => {
    switch (operators.id) {
      case "clear":
        clearDisplay();
        break;
      case "negetive":
        console.log("negetive");
        break;
      case "%":
        currentValue += "%";
        break;
      case "/":
        currentValue += "/";
        break;
      case "*":
        currentValue += "x";
        break;
      case "-":
        currentValue += "-";
        break;
      case "+":
        currentValue += "+";
        break;
      case "backspace":
        backspace();
        break;
      case "equals":
        evaluate();
        break;
    }
    updateOutput();
  });
});

Array.from(numbers).forEach((numbers) => {
  numbers.addEventListener("click", () => {
    currentValue += numbers.id;
    updateOutput();
  });
});