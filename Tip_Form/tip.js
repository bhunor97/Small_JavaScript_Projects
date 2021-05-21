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
const amountDisp = document.getElementById("tipAmountDiv");
const totalDisp = document.getElementById("totalAmountDiv");
const eachOwesDisp = document.getElementById("eachOwesDiv");
resultsDiv.style.display = "block";

calcButton.onclick = () => {
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
  // if (selectList.options[selectList.selectedIndex].text == "Choose...") {
  //   errorDisp.style.display = "block";
  // } else {
  //   errorDisp.style.display = "none";
  // }
};

// selectList.addEventListener("change", () => {
//   if (selectList.options[selectList.selectedIndex].text == "Choose...") {
//     console.log("yey");
//   } else {
//     console.log(selectList.options[selectList.selectedIndex].text);
//   }
// });

// $10 --> price
// 2ppl --> people
// good-10perc --> option

// Tip Amount $ 1.00 -->  Math.round((price/ option.value) * 100)
// Total Amount $ 11.00 --> price + tip
// Each Person Owes $ 5.50 --> (price + tip) / people
