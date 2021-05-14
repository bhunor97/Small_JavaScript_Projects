const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".calcButton");

let keys = Object.keys(buttons);
let values = Object.values(buttons);
let entries = Object.entries(buttons);

function pushButton() {
  for (let i = 0; i < values.length; i++) {
    const newValues = values[i];
    const valuesText = values[i].innerHTML;
    newValues.onclick = () => {
      display.innerHTML = valuesText;
    };
  }
}

console.log(pushButton());
