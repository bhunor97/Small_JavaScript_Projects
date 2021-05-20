// input
const price = document.getElementById("howMuch");
const people = document.getElementById("howMany");
// dropdown
const selectList = document.getElementById("select");
const choose = document.getElementById("choose");
const option20perc = document.getElementById("great_20");
const option10perc = document.getElementById("good_10");
const option2perc = document.getElementById("bad_2");
// button
const calcButton = document.getElementById("calcButton");
// error display
const errorDisp = document.getElementById("errorDisplay");
errorDisp.style.display = "none";
// result display
const resultsDiv = document.getElementById("resultsDisplayDiv");
const tipDisp = document.getElementById("tipAmountDiv");
const totalDisp = document.getElementById("totalAmountDiv");
const eachOwesDisp = document.getElementById("eachOwesDiv");
resultsDiv.style.display = "none";

calcButton.onclick = () => {
  // ERROR DISPLAY
  if (price.value == "" || people.value == "" || choose) {
    errorDisp.style.display = "block";
    setTimeout(() => {
      errorDisp.style.display = "none";
    }, 3000);
  }
};
