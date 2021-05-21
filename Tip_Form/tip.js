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
  // 20% ---
  if (selectList.options[selectList.selectedIndex].text == "Great - 20%") {
    let tip20 = ((20 / parseInt(howMuch.value)) * 100).toFixed(2);
    // tip display
    tipDisp.innerHTML = "Tip Amount $ " + tip20;
    // total display
    let total20Sum = parseInt(tip20) + parseInt(howMuch.value);
    totalDisp.innerHTML = "Total Amount $ " + total20Sum;
    // 10% ---
  } else if (
    selectList.options[selectList.selectedIndex].text == "Good - 10%"
  ) {
    // tip display
    let tip10 = ((10 / parseInt(howMuch.value)) * 100).toFixed(2);
    tipDisp.innerHTML = "Tip Amount $ " + tip10;
    // total display
    let total10Sum = parseInt(tip10) + parseInt(howMuch.value);
    totalDisp.innerHTML = "Total Amount $ " + total10Sum;
    // 2% ---
  } else if (selectList.options[selectList.selectedIndex].text == "Bad - 2%") {
    // tip display
    let tip2 = ((2 / parseInt(howMuch.value)) * 100).toFixed(2);
    tipDisp.innerHTML = "Tip Amount $ " + tip2;
    // total display
    let total2Sum = parseInt(tip2) + parseInt(howMuch.value);
    totalDisp.innerHTML = "Total Amount $ " + total2Sum;
  }

  // ERROR DISPLAY
  if (
    howMuch.value == "" ||
    howMany.value == "" ||
    selectList.options[selectList.selectedIndex].text == "Choose..."
  ) {
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
