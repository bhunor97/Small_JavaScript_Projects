// input
const howMuch = document.getElementById("howMuch");
const howMany = document.getElementById("howMany");
// dropdown
const selectList = document.getElementById("serviceList");

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
resultsDiv.style.display = "block";

calcButton.onclick = () => {
  // TIP AMOUNT
  if (selectList.options[selectList.selectedIndex].text == "Great - 20%") {
    tipDisp.innerHTML =
      "Tip Amount $ " + ((20 / parseInt(howMuch.value)) * 100).toFixed(2);
  }
  if (
    howMuch.value == "" ||
    howMany.value == "" ||
    selectList.options[selectList.selectedIndex].text == "Choose..."
  ) {
    // ERROR DISPLAY
    errorDisp.style.display = "block";
    setTimeout(() => {
      errorDisp.style.display = "none";
    }, 3000);
  }
};

// $10 --> price
// 2ppl --> people
// good-10perc --> option

// Tip Amount $ 1.00 -->  Math.round((price/ option.value) * 100)
// Total Amount $ 11.00 --> price + tip
// Each Person Owes $ 5.50 --> (price + tip) / people
