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
    // each owes
    let people = parseInt(howMany.value);
    eachOwesDisp.innerHTML = "Each Person Owes $ " + total20Sum / people;
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
    // each owes
    let people = parseInt(howMany.value);
    eachOwesDisp.innerHTML = "Each Person Owes $ " + total10Sum / people;
    // 2% ---
  } else if (selectList.options[selectList.selectedIndex].text == "Bad - 2%") {
    // tip display
    let tip2 = ((2 / parseInt(howMuch.value)) * 100).toFixed(2);
    tipDisp.innerHTML = "Tip Amount $ " + tip2;
    // total display
    let total2Sum = parseInt(tip2) + parseInt(howMuch.value);
    totalDisp.innerHTML = "Total Amount $ " + total2Sum;
    // each owes
    let people = parseInt(howMany.value);
    eachOwesDisp.innerHTML = "Each Person Owes $ " + total2Sum / people;
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

// $100 --> price
// 5ppl --> people
// great-20perc --> percent

// Tip  $ 20.00 --> (Tip / price) * 100
// Total  $ 120.00 --> Tip + price
// Each Person Owes $ 24.00 --> total / people
