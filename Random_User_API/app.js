const image = document.getElementById("image_div");
const listUl = document.getElementById("name_list");
const generateButton = document.getElementById("generate_person_button");
const title = document.getElementById("title");

generateButton.addEventListener("click", () => {
  title.style.display = "none";
  fetch("https://randomuser.me/api/?results=100")
    .then((res) => res.json())
    .then((data) => {
      listUl.innerHTML = `
      <li><b>Name:</b> ${
        data.results[1].name.first + " " + data.results[1].name.last
      }</li>
      <li><b>Location:</b> ${data.results[1].location.city}
      </li>
      <li>
      <b>Email:</b> ${data.results[1].email}
      </li>
      <li>
      <b>Phone:</b> ${data.results[1].phone}
      </li>
      `;
      image.innerHTML = `
      <img class="img-generated" src="${data.results[1].picture.large}">
      `;
    });
});
