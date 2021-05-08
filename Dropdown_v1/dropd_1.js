const clickHere = document.getElementById("clickHere");
const button = document.getElementById("button");

// CLICKHERE
clickHere.addEventListener("mouseover", () => {
  const linksDiv = document.getElementById("linkDiv");
  linksDiv.classList.add("link_div_visible");
});

clickHere.addEventListener("mouseout", () => {
  const linksDiv = document.getElementById("linkDiv");
  linksDiv.classList.remove("link_div_visible");
});
// LINKS
button.addEventListener("mouseover", () => {
  const linksDiv = document.getElementById("linkDiv");
  linksDiv.classList.add("link_div_visible");
});
