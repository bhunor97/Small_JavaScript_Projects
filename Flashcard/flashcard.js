const addQuestionButt = document.getElementById("addQuestButt");
const inputSection = document.getElementById("inputDiv");
const xButt = document.getElementById("xButt");
const emptyAlertDiv = document.getElementById("emptyAlertDiv");
const clearedAlertDiv = document.getElementById("listClearedDiv");
const form = document.getElementById("formSection");
const questInput = document.getElementById("questTxtArea");
const answInput = document.getElementById("answTxtArea");
const saveButt = document.getElementById("saveButt");
const clearAllButt = document.getElementById("clearAllButt");
const outputDiv = document.getElementById("outputDiv");

inputSection.style.display = "none";
emptyAlertDiv.style.display = "none";
clearedAlertDiv.style.display = "none";
outputDiv.style.display = "none";

// FLASHCARD CLASS
class Flashcard {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

// UI CONSTRUCTOR
function UI() {}

// CREATE CARD
UI.prototype.createCard = (flashcard) => {
  if (!questInput.value == "" || !answInput.value == "") {
    // new section
    const newSection = document.createElement("section");
    newSection.className = "newSection";
    outputDiv.appendChild(newSection);

    // new inner div
    let newInnerDiv = document.createElement("div");
    newInnerDiv.className = "newInnerDiv";
    newInnerDiv.innerHTML = `
    <li class="questionLi">${flashcard.question}</li>
    <a class="showHideLink" href="#">Show/Hide Answer</a>
    <li class="answerLi">${flashcard.answer}</li>
    `;
    newSection.appendChild(newInnerDiv);

    // delete button div
    let newButtDiv = document.createElement("div");
    newButtDiv.className = "newButtDiv";
    newButtDiv.innerHTML = `
  <button class="newEditButt">Edit</button>
  <button class="newDelButt">Delete</button>
  `;
    newInnerDiv.appendChild(newButtDiv);
    // clear fields
    questInput.value = "";
    answInput.value = "";
  } else {
    alertEmptyFunction();
  }
};

// FORM SUBMIT
form.addEventListener("submit", function (e) {
  outputDiv.style.display = "block";

  const question = questInput.value;
  const answer = answInput.value;

  const ui = new UI();
  const flashcard = new Flashcard(question, answer);
  ui.createCard(flashcard);

  console.log(outputDiv);
  e.preventDefault();
});

// ADD QUESTION BUTTON
addQuestionButt.onclick = () => {
  inputSection.style.display = "block";
};
// 'X' - BUTTON
xButt.onclick = () => {
  inputSection.style.display = "none";
  outputDiv.style.display = "none";
};
// CLEAR ALL BUTTON
clearAllButt.onclick = () => {
  outputDiv.innerHTML = "";
  alertClearedFunction();
};
// ALERT FUNCTION
alertEmptyFunction = () => {
  emptyAlertDiv.style.display = "flex";
  setTimeout(function () {
    emptyAlertDiv.style.display = "none";
  }, 2000);
};
// CLEAR ALERT FUNCTION
alertClearedFunction = () => {
  clearedAlertDiv.style.display = "flex";
  setTimeout(function () {
    clearedAlertDiv.style.display = "none";
  }, 2000);
};
