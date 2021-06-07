const budgetInp = document.getElementById("budgetInput");
const calcButt = document.getElementById("budgetInputButt");
const alertEmpty = document.getElementById("alertDiv_1");
const alertClear = document.getElementById("alertDiv_2");
const expNameInp = document.getElementById("expInpName");
const expAmountInp = document.getElementById("expAmount");
const addExpButt = document.getElementById("addExpButt");
const clearAllButt = document.getElementById("clearButt");
const budgetDisp = document.getElementById("budgetDisplay");
const expDisp = document.getElementById("expensesDisplay");
const balanceDisp = document.getElementById("balanceDisplay");
const outputDiv = document.getElementById("outputDiv");
const outputTBody = document.getElementById("outputTBody");

alertEmpty.style.display = "none";
alertClear.style.display = "none";

// EXPENSES CLASS
class Expenses {
  constructor(title, value) {
    this.title = title;
    this.value = value;
  }
}

// UI FUNCTION
function UI() {}

UI.prototype.addExpToTable = function (expenses) {
  if (!expNameInp.value == "" || !expAmountInp.value == "") {
    // new Th
    let newThTitle = document.createElement("th");
    let newThValue = document.createElement("th");
    newThValue.style.color = "red";
    const newThDel = document.createElement("th");
    newThDel.className = "delButt";
    newThDel.id = "delButt";
    newThDel.style.backgroundColor = "red";
    newThDel.style.color = "white";

    // Th value
    newThTitle.innerHTML = expNameInp.value;
    newThValue.innerHTML = `$ ${expAmountInp.value}`;
    newThDel.innerHTML = `Delete`;

    // new Tr
    let newTr = document.createElement("tr");
    newTr.appendChild(newThTitle);
    newTr.appendChild(newThValue);
    newTr.appendChild(newThDel);

    outputTBody.appendChild(newTr);

    // dynamic delete
    outputTBody.onclick = (event) => {
      if (event.target.className == "delButt") {
        outputTBody.removeChild(event.target.parentElement);
      }
    };
  } else {
    alertFunc(alertEmpty);
  }
};

// ADD EXPENSE BUTTON
addExpButt.onclick = () => {
  expDisp.innerHTML = `$ ${expAmountInp.value}`;
  expDisp.style.color = "red";

  let title = expNameInp.value;
  let value = expAmountInp.value;

  let expenses = new Expenses(title, value);
  let ui = new UI();
  ui.addExpToTable(expenses);

  expNameInp.value = "";
  expAmountInp.value = "";
};

// CALCULATE BUTTON
calcButt.onclick = () => {
  if (!budgetInp.value == "") {
    budgetDisp.innerHTML = `$ ${budgetInp.value}`;
    balanceDisp.innerHTML = `$ ${budgetInp.value}`;
    budgetDisp.style.color = "green";
    balanceDisp.style.color = "green";
    budgetInp.value = "";
  } else {
    alertFunc();
  }
};

// CLEAR ALL BUTTON
clearAllButt.onclick = () => {
  budgetInp.value = "";
  expNameInp.value = "";
  expAmountInp.value = "";
  budgetDisp.innerHTML = `$ 0`;
  expDisp.innerHTML = `$ 0`;
  balanceDisp.innerHTML = `$ 0`;
  outputTBody.innerHTML = "";
  alertFunc(alertClear);
};

// ALERT
alertFunc = (alert) => {
  alert.style.display = "flex";
  setTimeout(function () {
    alert.style.display = "none";
  }, 2000);
};
