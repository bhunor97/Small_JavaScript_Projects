const addQuestionButt = document.getElementById("addQuestButt");
const inputSection = document.getElementById("inputDiv");
const xButt = document.getElementById("xButt");
const alertDiv = document.getElementById("alertDiv");
const form = document.getElementById("formSection");
const questInput = document.getElementById("questTxtArea");
const answInput = document.getElementById("answTxtArea");
const saveButt = document.getElementById("saveButt");
const outputDiv = document.getElementById("outputDiv");

inputSection.style.display = "none";
alertDiv.style.display = "none";
outputDiv.style.display = "none";

// FLASHCARD CLASS
class Flashcard {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// ADD QUESTION BUTTON
addQuestionButt.onclick = () => {
  inputSection.style.display = "block";
};
// 'X' - BUTTON
xButt.onclick = () => {
  inputSection.style.display = "none";
};
