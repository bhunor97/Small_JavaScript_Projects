const submitButt = document.getElementById("submitButt");
const clearButt = document.getElementById("clearButt");
const inputBar = document.getElementById("addItemsInput");
const itemsDiv = document.getElementById("itemsDiv");
const alertsDiv = document.getElementById("alertsDiv");
const outputAlertDiv = document.getElementById("outputAlertDiv");

// alert elements
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

let localStorageArray = [];

// SUBMIT BUTTON
submitButt.onclick = () => {
  if (!inputBar.value == "") {
    // single item secton
    const itemSection = document.createElement("section");
    itemSection.className = "itemSection";
    itemsDiv.appendChild(itemSection);

    // newLi
    let newLi = document.createElement("li");
    newLi.className = "newLi";
    newLi.innerHTML = inputBar.value;
    itemSection.appendChild(newLi);

    // delete
    const deleteDiv = document.createElement("div");
    deleteDiv.innerHTML = "Delete";
    deleteDiv.className = "deleteDiv";
    itemSection.appendChild(deleteDiv);

    // local storage
    localStorageArray.push(inputBar.value);
    localStorage.setItem(
      "Grocery Item Saved",
      JSON.stringify(localStorageArray)
    );
    inputBar.value = "";
    alertAddedFunc();

    console.log(itemsDiv);
  } else {
    alertEmptyFunc();
  }
};

// DELETE BUTTONS
itemsDiv.addEventListener("click", (event) => {
  if (event.target.className === "deleteDiv") {
    localFunc(event.target.previousSibling.innerHTML);
    itemsDiv.removeChild(event.target.parentNode);
  }
});

// LOCAL STORAGE FUNCTION - finished with some help
localFunc = (value) => {
  let localGet = localStorage.getItem("Grocery Item Saved");
  let jsoned = JSON.parse(localGet);
  for (let i = 0; i < jsoned.length; i++) {
    if (jsoned[i] == value) {
      jsoned.splice(i, 1);
      localStorageArray = jsoned;
      localStorage.setItem("Grocery Item Saved", JSON.stringify(jsoned));
      return;
    }
  }
};

// CLEAR BUTTON
clearButt.onclick = () => {
  inputBar.value = "";
  itemsDiv.innerHTML = "";
  alertClearedFunc();
  localStorage.clear();
};

// ALERT FUNCTIONS
alertAddedFunc = () => {
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
