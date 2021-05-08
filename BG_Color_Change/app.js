const body = document.getElementById("body");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let colors = [
    [
      "Red",
      "Gren",
      "Blue",
      "BlueViolet",
      "Brown",
      "CadetBlue",
      "Crimson",
      "DarkGreen",
    ],
    [
      "Aqua",
      "Aquamarine",
      "Chartreuse",
      "Cyan",
      "DarkGoldenRod",
      "DarkTurquoise",
      "DodgerBlue",
      "Gold",
    ],
  ];

  let dark = colors[0];
  let bright = colors[1];

  let randomFirst = Math.floor(Math.random() * 2);
  let randomSecond = Math.floor(Math.random() * 9);
  let randomSecond2 = Math.floor(Math.random() * 9);

  body.style.backgroundColor = colors[randomFirst][randomSecond];
  button.style.backgroundColor = colors[randomFirst][randomSecond2];
  // COLOR DODGE TEST BELOW:
  if (dark.includes(button.style.backgroundColor)) {
    button.style.color = "White";
  } else if (bright.includes(button.style.backgroundColor)) {
    button.style.color = "Black";
  }
});
