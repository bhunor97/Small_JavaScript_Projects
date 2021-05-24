const inputText = document.getElementById("inputText");
const outputDiv = document.getElementById("outputDiv");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

const errorDiv = document.getElementById("errorDiv");
errorDiv.style.display = "none";

const listCleared = document.getElementById("clearDiv");
listCleared.style.display = "none";

addButton.onclick = () => {
  if (!inputText.value == "") {
    // SECTION CONTAINER
    let outputContainer = document.createElement("section");
    outputContainer.className = "outputContainer";
    outputDiv.appendChild(outputContainer);
    // ADD TEXT
    let newDiv = document.createElement("div");
    newDiv.innerHTML = inputText.value;
    newDiv.className = "newOutputDiv";
    outputContainer.appendChild(newDiv);
    // DELETE BUTTON
    let newDelButton = document.createElement("button");
    newDelButton.className = "newDelButt";
    newDelButton.innerHTML = "Delete";
    outputContainer.appendChild(newDelButton);
    // EDIT BUTTON
    let newEditButton = document.createElement("button");
    newEditButton.innerHTML = "Edit";
    newEditButton.className = "newEditButt";
    outputContainer.appendChild(newEditButton);

    inputText.value = "";
    // console.log(outputDiv);
    // console.log(outputContainer);
  } else {
    errorDiv.style.display = "flex";
    setTimeout(() => {
      errorDiv.style.display = "none";
    }, 2000);
  }
};

// DELETE
outputDiv.addEventListener("click", (event) => {
  if (event.target.className === "newDelButt") {
    outputDiv.removeChild(event.target.parentNode);
    console.log(event.target);
  }
});

// CLEAR
clearButton.onclick = () => {
  outputDiv.innerHTML = "";
  listCleared.style.display = "flex";
  setTimeout(() => {
    listCleared.style.display = "none";
  }, 2000);
};
