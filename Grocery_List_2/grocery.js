const submitButt = document.getElementById("submitButt");
const clearButt = document.getElementById("clearButt");
const inputBar = document.getElementById("addItemsInput");
const itemsDiv = document.getElementById("itemsDiv");
const alertsDiv = document.getElementById("alertsDiv");

const alertAdded = document.createElement("div");
alertAdded.className = "alertAdded";
alertAdded.innerHTML = "Item Added To The List";
alertAdded.style.backgroundColor = "green";
alertAdded.style.color = "white";

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
  }
};

// CLEAR BUTTON
clearButt.onclick = () => {
  inputBar.value = "";
  itemsDiv.innerHTML = "";
};

// ALERT ITEM ADDED
alertAddFunc = () => {
  alertsDiv.appendChild(alertAdded);
  setTimeout(function () {
    alertsDiv.removeChild(alertAdded);
  }, 2000);
};
