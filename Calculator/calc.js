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
        display.innerHTML = display.innerHTML + valuesText;
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
    if (display.innerHTML.includes(".")) {
      number = parseFloat(display.innerHTML);
      display.innerHTML = "";
    } else {
      number = parseInt(display.innerHTML);
      display.innerHTML = "";
    }
    operator = 1;
  };

  // DIVIDE
  const divide = buttonValues[1];
  divide.onclick = () => {
    if (display.innerHTML.includes(".")) {
      number = parseFloat(display.innerHTML);
      display.innerHTML = "";
    } else {
      number = parseInt(display.innerHTML);
      display.innerHTML = "";
    }
    operator = 2;
  };

  // SUBTRACT
  const subtract = buttonValues[2];
  subtract.onclick = () => {
    if (display.innerHTML.includes(".")) {
      number = parseFloat(display.innerHTML);
      display.innerHTML = "";
    } else {
      number = parseInt(display.innerHTML);
      display.innerHTML = "";
    }
    operator = 3;
  };

  // ADD
  const add = buttonValues[3];
  add.onclick = () => {
    if (display.innerHTML.includes(".")) {
      number = parseFloat(display.innerHTML);
      display.innerHTML = "";
    } else {
      number = parseInt(display.innerHTML);
      display.innerHTML = "";
    }
    operator = 4;
  };

  // DECIMAL POINT
  const decimalPoint = buttonValues[4];
  decimalPoint.onclick = () => {
    if (display.innerHTML.includes(".")) {
      display.innerHTML;
    } else if (display.innerHTML == "") {
      display.innerHTML;
    } else {
      display.innerHTML = `${display.innerHTML}.`;
    }
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
    }

    // subtraction
    else if (operator == 3) {
      display.innerHTML = number - display.innerHTML;
    }

    // addition
    else if (operator == 4) {
      display.innerHTML = number + parseFloat(display.innerHTML);
    }
  };
}

pushButton();
