const body = document.querySelector("body");
const displayDiv = document.getElementById("display");
const button = document.getElementById("button");

const hexSingle = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const hexDouble = [
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1A",
  "1B",
  "1C",
  "1D",
  "1E",
  "1F",
  "20",
];

button.innerHTML = "Generate Hex";

button.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * hexSingle.length);
  const random2 = Math.floor(Math.random() * hexSingle.length);
  const random3 = Math.floor(Math.random() * hexSingle.length);
  const random4 = Math.floor(Math.random() * hexSingle.length);
  const random5 = Math.floor(Math.random() * hexSingle.length);
  const random6 = Math.floor(Math.random() * hexSingle.length);

  const hexCombo1 =
    "#" +
    hexSingle[random1] +
    hexSingle[random2] +
    hexSingle[random3] +
    hexSingle[random4] +
    hexSingle[random5] +
    hexSingle[random6];
  // TODO: ADD HEX COMBO_2
  //   const hexCombo2 =
  //     "#" + hexDouble[random1] + hexDouble[random2] + hexDouble[random3];

  //   const bothCombo = [hexCombo1, hexCombo2];

  body.style.backgroundColor = hexCombo1;
  displayDiv.innerText = hexCombo1;
});
