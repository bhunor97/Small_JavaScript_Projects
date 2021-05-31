const submitButt = document.getElementById("submitButt");
const clearButt = document.getElementById("clearButt");
const inputBar = document.getElementById("addItemsInput");
const itemsDiv = document.getElementById("itemsDiv");
const alertsDiv = document.getElementById("alertsDiv");
const outputAlertDiv = document.getElementById("outputAlertDiv");

const alertAdded = document.createElement("div");
alertAdded.className = "alertAdded";
alertAdded.innerHTML = inputBar.innerHTML + "Item Added To The List";
alertAdded.style.backgroundColor = "green";
alertAdded.style.color = "white";

const alertEmpty = document.createElement("div");
alertEmpty.className = "alertEmpty";
alertEmpty.innerHTML = "Add Something To The List!";
alertEmpty.style.backgroundColor = "red";
alertEmpty.style.color = "white";

const alertCleared = document.createElement("div");
alertCleared.className = "alertCleared";
alertCleared.innerHTML = "List Cleared";
alertCleared.style.backgroundColor = "green";
alertCleared.style.color = "white";

// SUBMIT BUTTON
submitButt.onclick = () => {
  if (!inputBar.value == "") {
    // newLi
    let newLi = document.createElement("li");
    newLi.className = "newLi";
    newLi.innerHTML = inputBar.value;
    itemsDiv.appendChild(newLi);
    inputBar.value = "";

    alertAddFunc();
    console.log(itemsDiv);
  } else {
    alertEmptyFunc();
  }
};

// CLEAR BUTTON
clearButt.onclick = () => {
  inputBar.value = "";
  itemsDiv.innerHTML = "";
  alertClearedFunc();
};

// ALERT FUNCTIONS
alertAddFunc = () => {
  alertsDiv.appendChild(alertAdded);
  setTimeout(function () {
    alertsDiv.removeChild(alertAdded);
  }, 2000);
};

alertEmptyFunc = () => {
  alertsDiv.appendChild(alertEmpty);
  setTimeout(function () {
    alertsDiv.removeChild(alertEmpty);
  }, 2000);
};

alertClearedFunc = () => {
  outputAlertDiv.appendChild(alertCleared);
  setTimeout(function () {
    outputAlertDiv.removeChild(alertCleared);
  }, 2000);
};
