const textInput = document.getElementById("textInputBar");
const textOutputUl = document.getElementById("textOutput");
const submit = document.getElementById("button");
const resetButton = document.getElementById("resetButton");
const hiddenMsg = document.getElementById("h2Delivered");
hiddenMsg.style.visibility = "hidden";

submit.addEventListener("click", () => {
  hiddenMsg.style.visibility = "visible";
  const newLi = document.createElement("li");
  newLi.innerHTML = textInput.value;
  textOutputUl.appendChild(newLi);
  textInput.value = "";
  // newLi STYLE
  newLi.style.color = "red";
  newLi.style.padding = "10px";
  newLi.style.fontSize = "1.2rem";
  newLi.style.listStyle = "none";
});

resetButton.addEventListener("click", () => {
  hiddenMsg.style.visibility = "hidden";
  textOutputUl.replaceChildren();
});
