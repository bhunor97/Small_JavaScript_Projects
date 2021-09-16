const jokeText = document.getElementById("joke-div");
const jokeButton = document.getElementById("get-joke-button");

jokeButton.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      jokeText.innerHTML = data.value;
    });
});
