const keyboard = document.getElementById("keyboard");
const display = document.getElementById("display");
const previous = document.getElementById("previous");
let result = null;
const calcArr = [
  "c",
  "",
  "",
  "/",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "",
  "=",
];

const clearButton = () => {
  display.innerText = null;
  previous.innerText = null;
};

const calculate = () => {
  const calculation = display.innerText;
  try {
    result = eval(calculation);
    previous.innerText = calculation + " = " + result;
    display.innerText = result;
  } catch (error) {
    previous.innerText = "Error: " + error.message;
  }
};

const buttonPress = (id) => {
  if (id === "=") {
    calculate();
  } else if (id === "c") {
    clearButton();
  } else if (id === "+/-" || id === "%" || id === "<") {
    console.log("I don't know what this button does lol");
  } else {
    display.innerText += id;
  }
};

for (i = 0; i < 20; i++) {
  const newKey = document.createElement("button");
  newKey.innerText = calcArr[i];
  newKey.className = "key";
  if (calcArr[i] === "x") {
    newKey.id = "*";
  } else {
    newKey.id = calcArr[i];
  }
  if (typeof calcArr[i] === "number") {
    newKey.classList.add("bold");
  } else if (newKey.innerText === "") {
    newKey.classList.add("not-button");
  } else {
    newKey.classList.add("transparent");
  }
  newKey.addEventListener("click", () => buttonPress(newKey.id));
  keyboard.appendChild(newKey);
}
