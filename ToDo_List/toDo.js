const inputText = document.getElementById("inputText");
const outputDiv = document.getElementById("outputDiv");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

const errorDiv = document.getElementById("errorDiv");
errorDiv.style.display = "none";

addButton.onclick = () => {
  if (!inputText.value == "") {
    let newDiv = document.createElement("div");
    let textNode = document.createTextNode(inputText.value);
    newDiv.appendChild(textNode);
    outputDiv.appendChild(newDiv);

    newDiv.insertAdjacentHTML("afterend", "EDIT");
    newDiv.insertAdjacentHTML("afterend", "DELETE ");
    inputText.value = "";
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
