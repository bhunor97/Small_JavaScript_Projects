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
    // dispaly output
    outputDiv.style.display = "block";

    // new section
    const newSection = document.createElement("section");
    newSection.className = "newSection";
    outputDiv.appendChild(newSection);

    // new question
    let newQuestLi = document.createElement("li");
    newQuestLi.className = "newQuestLi";
    newQuestLi.id = "newQuestLi";
    newQuestLi.innerHTML = `${flashcard.question}`;
    newSection.appendChild(newQuestLi);

    // new Show / Hide
    let newLinkLi = document.createElement("li");
    newLinkLi.className = "newLinkLi";
    newLinkLi.id = "newLinkId";
    newLinkLi.innerHTML = `Show / Hide Answer`;
    newSection.appendChild(newLinkLi);

    // new answer
    let newAnswLi = document.createElement("li");
    newAnswLi.className = "newAnswLi";
    newAnswLi.id = "newAnswLi";
    newAnswLi.innerHTML = `${flashcard.answer}`;
    newSection.appendChild(newAnswLi);

    // new buttons DIV
    let newButtDiv = document.createElement("div");
    newButtDiv.className = "newButtDiv";
    newButtDiv.id = "newButtDiv";
    newSection.appendChild(newButtDiv);

    // new edit button
    let newEditButt = document.createElement("button");
    newEditButt.innerHTML = "Edit";
    newEditButt.className = "newEditButt";
    newEditButt.id = "newEditButt";
    newButtDiv.appendChild(newEditButt);

    // new delete button
    let newDelButt = document.createElement("button");
    newDelButt.innerHTML = "Delete";
    newDelButt.className = "newDelButt";
    newDelButt.id = "newDelButt";
    newButtDiv.appendChild(newDelButt);

    // LINK CLICK -> ANSWER
    newAnswLi.style.visibility = "hidden";
    newLinkLi.onclick = function () {
      if (newAnswLi.style.visibility == "hidden") {
        newAnswLi.style.visibility = "visible";
      } else {
        newAnswLi.style.visibility = "hidden";
      }
    };

    // DELETE CLICK FUNCTION - unfinished
    let deleteButt = document.getElementById("newDelButt");
    newSection.addEventListener("click", (event) => {
      if (event.target.className === "newDelButt") {
        outputDiv.removeChild(event.target.parentElement.parentElement);
      }
    });

    // clear fields
    questInput.value = "";
    answInput.value = "";
    console.log(outputDiv);
  } else {
    alertEmptyFunction();
  }
};

// FORM SUBMIT
form.addEventListener("submit", function (e) {
  const question = questInput.value;
  const answer = answInput.value;

  const ui = new UI();
  const flashcard = new Flashcard(question, answer);
  ui.createCard(flashcard);

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
  outputDiv.textContent = "";
  outputDiv.style.display = "none";
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
