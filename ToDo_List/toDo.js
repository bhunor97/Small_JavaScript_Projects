const inputText = document.getElementById("inputText");
const outputDiv = document.getElementById("outputDiv");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

const errorDiv = document.getElementById("errorDiv");
errorDiv.style.display = "none";

// addButton.onclick = () => {
//   if (!inputText.value == "") {
//     let newDiv = document.createElement("div");
//     let textNode = document.createTextNode(inputText.value);
//     newDiv.appendChild(textNode);
//     outputDiv.appendChild(newDiv);

//     newDiv.insertAdjacentHTML("afterend", "EDIT");
//     newDiv.insertAdjacentHTML("afterend", "DELETE ");
//     inputText.value = "";
//     console.log(outputDiv);
//   } else {
//     errorDiv.style.display = "flex";
//     setTimeout(() => {
//       errorDiv.style.display = "none";
//     }, 2000);
//   }
// };

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
    console.log(outputDiv);
  } else {
    errorDiv.style.display = "flex";
    setTimeout(() => {
      errorDiv.style.display = "none";
    }, 2000);
  }
};

clearButton.onclick = () => {
  outputDiv.innerHTML = "";
};
