const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".calcButton");

let buttonValues = Object.values(buttons);

let number = 0;
display.innerHTML = "";
let operator;

function pushButton() {
  // DISPLAY
  for (let i = 5; i < 15; i++) {
    const newValues = buttonValues[i];
    const valuesText = buttonValues[i].innerHTML;
    newValues.onclick = () => {
      if (display.innerHTML == "") {
        display.innerHTML = valuesText;
      } else {
        display.innerHTML = parseInt(display.innerHTML) + valuesText;
      }
      // console.log(display.innerHTML);
    };
  }

  // CLEAR BUTTON
  const clearButton = buttonValues[16];
  clearButton.onclick = () => {
    display.innerHTML = "";
  };

  // MULTIPLY
  const asterisk = buttonValues[0];
  asterisk.onclick = () => {
    number = parseInt(display.innerHTML);
    display.innerHTML = "";
    operator = 1;
  };

  // DIVIDE
  const divide = buttonValues[1];
  divide.onclick = () => {
    number = parseInt(display.innerHTML);
    display.innerHTML = "";
    operator = 2;
  };

  // EQUAL
  const equal = buttonValues[15];
  equal.onclick = () => {
    // multiplication
    if (operator == 1) {
      display.innerHTML = display.innerHTML * number;
    }
    // division
    else if (operator == 2) {
      display.innerHTML = number / display.innerHTML;
      console.log(display.innerHTML);
    }
  };
}

pushButton();
