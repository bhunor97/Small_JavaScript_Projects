let numDisplay = document.getElementById("numDisplay");
const buttonLower = document.getElementById("lowerCount");
const buttonAdd = document.getElementById("addCount");

let numbers = 0;

buttonAdd.onclick = () => {
  numbers = numbers + 1;
  numDisplay.innerHTML = numbers;
  if (parseInt(numDisplay.innerHTML) > 0) {
    numDisplay.style.color = "green";
  } else if (parseInt(numDisplay.innerHTML) < 0) {
    numDisplay.style.color = "red";
  } else {
    numDisplay.style.color = "black";
  }
};

buttonLower.onclick = () => {
  numbers = numbers - 1;
  numDisplay.innerHTML = numbers;
  if (parseInt(numDisplay.innerHTML) < 0) {
    numDisplay.style.color = "red";
  } else if (parseInt(numDisplay.innerHTML) > 0) {
    numDisplay.style.color = "green";
  } else {
    numDisplay.style.color = "black";
  }
};

// if (parseInt(numDisplay.innerHTML) < 0) {
//   numDisplay.style.color = "red";
// } else {
//   numDisplay.style.color = "black";
// }

// FOR EACH:
// (ITEM, INDEX, ARRAY)
// numbers.forEach(function (aaa, bbb) {
//   if (bbb < 10) {
//     aaa = "Less then ten: ";
//   } else {
//     aaa = "Greater then ten: ";
//   }
//   console.log(aaa, bbb);
// });
