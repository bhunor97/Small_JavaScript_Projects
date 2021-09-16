const image = document.getElementById("image_div");
const listUl = document.getElementById("name_list");
const generateButton = document.getElementById("generate_person_button");

generateButton.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      listUl.innerHTML = `
        <li>Name: ${data.name}</li>
        <li>Last Name: ${data.name}</li>
        <li>Location: ${data.name}</li>
        <li>Phone: ${data.name}</li>
        <li>Email: ${data.name}</li>
        `;
    });
});

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => console.log(data.results));
