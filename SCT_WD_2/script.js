const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.dataset.value);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" || key === "-" ||
    key === "*" || key === "/" ||
    key === "." || key === "%"
  ) {
    handleInput(key);
  } 
  else if (key === "Enter") {
    handleInput("=");
  } 
  else if (key === "Backspace") {
    handleInput("DEL");
  } 
  else if (key === "Escape") {
    handleInput("C");
  }
});

function handleInput(value) {
  if (value === "C") {
    currentInput = "";
  } 
  else if (value === "DEL") {
    currentInput = currentInput.slice(0, -1);
  } 
  else if (value === "=") {
    calculateResult();
    return;
  } 
  else {
    currentInput += value;
  }

  display.value = currentInput;
}

function calculateResult() {
  try {
    if (currentInput.trim() === "") return;

    const result = eval(currentInput);

    if (!isFinite(result)) {
      throw new Error("Math Error");
    }

    currentInput = result.toString();
    display.value = currentInput;

  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}
