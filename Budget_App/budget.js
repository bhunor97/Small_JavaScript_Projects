const budgetInp = document.getElementById("budgetInput");
const calcButt = document.getElementById("budgetInputButt");
const expNameInp = document.getElementById("expInpName");
const expAmountInp = document.getElementById("expAmount");
const addExpButt = document.getElementById("addExpButt");
const clearAllButt = document.getElementById("clearButt");
const budgetDisp = document.getElementById("budgetDisplay");
const expDisp = document.getElementById("expensesDisplay");
const balanceDisp = document.getElementById("balanceDisplay");
const outputDiv = document.getElementById("outputDiv");
const outputTBody = document.getElementById("outputTBody");

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
  // new Th
  let newThTitle = document.createElement("th");
  let newThValue = document.createElement("th");
  let newThDel = document.createElement("th");
  newThDel.style.backgroundColor = "red";
  newThDel.style.color = "white";

  // Th value
  newThTitle.innerHTML = expNameInp.value;
  newThValue.innerHTML = expAmountInp.value;
  newThDel.innerHTML = `Delete`;

  // new Tr
  let newTr = document.createElement("tr");
  newTr.appendChild(newThTitle);
  newTr.appendChild(newThValue);
  newTr.appendChild(newThDel);

  outputTBody.appendChild(newTr);
};

// ADD EXPENSE BUTTON
addExpButt.onclick = () => {
  expDisp.innerHTML = `$ ${expAmountInp.value}`;

  let title = expNameInp.value;
  let value = expAmountInp.value;

  let expenses = new Expenses(title, value);
  let ui = new UI();

  console.log(ui);

  ui.addExpToTable(expenses);

  expNameInp.value = "";
  expAmountInp.value = "";
};

// CALCULATE BUTTON
calcButt.onclick = () => {
  budgetDisp.innerHTML = `$ ${budgetInp.value}`;
  balanceDisp.innerHTML = `$ ${budgetInp.value}`;
  budgetInp.value = "";
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
};
