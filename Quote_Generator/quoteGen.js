// VARIABLES
const button = document.getElementById("button");
const quoteDiv = document.getElementById("quoteDiv");
const authorDiv = document.getElementById("authorDiv");

// QUOTES
const quoteArray = [
  (quoteObj0 = {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  }),
  (quoteObj1 = {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: " Martin Luther King Jr.",
  }),
  (quoteObj2 = {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  }),
  (quoteObj3 = {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  }),
  (quoteObj4 = {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  }),
  (quoteObj5 = {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  }),
  // console.log(quoteArray[0].quote);
];

// BUTTON CLICK FUNCTION
button.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * quoteArray.length);
  quoteDiv.innerHTML = quoteArray[random1].quote;
  authorDiv.innerHTML = quoteArray[random1].author;
});
