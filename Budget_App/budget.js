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

// let budgetValue = budgetDisp.innerHTML;
let budgetValue = 0;
// let balanceValue = balanceDisp.innerHTML;
let balanceValue = 0;
// let expenseValue = expDisp.innerHTML;
let expenseValue = 0;

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
    newThTitle.className = "newThTitle";
    newThValue.className = "newThValue";
    newThValue.style.color = "red";
    // delete
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
  } else {
    alertFunc(alertEmpty);
    expDisp.innerHTML = `$ 0`;
    balanceDisp.innerHTML = `$ 0`;
  }
};

// CALCULATE BUTTON
calcButt.onclick = () => {
  if (!budgetInp.value == "") {
    // budget calc static
    budgetValue = budgetInp.value;
    budgetDisp.innerHTML = `$ ${budgetValue}`;
    // balance calc static
    balanceValue = budgetInp.value;
    balanceDisp.innerHTML = `$ ${balanceValue}`;

    budgetInp.value = "";
  } else {
    alertFunc(alertEmpty);
  }
};

// ADD EXPENSE BUTTON
addExpButt.onclick = () => {
  let title = expNameInp.value;
  let value = expAmountInp.value;
  // expense
  expenseValue = parseInt(expenseValue) + parseInt(value);
  expDisp.innerHTML = `$ ${expenseValue}`;
  // balance
  balanceDisp.innerHTML = `$ ${balanceValue - expenseValue}`;
  // class / prototype
  const expenses = new Expenses(title, value);
  const ui = new UI();
  ui.addExpToTable(expenses);
  // clear fields
  expNameInp.value = "";
  expAmountInp.value = "";

  const extraValue = expenses.value;
  console.log(typeof expDisp.innerHTML);
  console.log(typeof balanceDisp.innerHTML);

  // delete onclick
  outputTBody.onclick = (event) => {
    if (event.target.className == "delButt") {
      outputTBody.removeChild(event.target.parentElement);
      let addedValue = removeDella(event.target.previousSibling.innerHTML);
      // add deleted values
      console.log(typeof expDisp.innerHTML);
      console.log(typeof addedValue);
      expDisp.innerHTML =
        removeDella(expDisp.innerHTML) - removeDella(addedValue);
      balanceDisp.innerHTML =
        removeDella(balanceDisp.innerHTML) + removeDella(addedValue);
      // adding $
      expDisp.innerHTML = `$ ${expDisp.innerHTML}`;
      balanceDisp.innerHTML = `$ ${balanceDisp.innerHTML}`;
    }
  };
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
  budgetValue = 0;
  expenseValue = 0;
  alertFunc(alertClear);
};

// ALERT
alertFunc = (alert) => {
  alert.style.display = "flex";
  setTimeout(function () {
    alert.style.display = "none";
  }, 2000);
};

// REMOVE $ FUNCTION
removeDella = (x) => {
  if (typeof x === "string") {
    return parseInt(x.replace("$ ", ""));
  } else {
    return x;
  }
};
