const nameInput = document.getElementById("nameInput");
const courseInput = document.getElementById("courseInput");
const authorInput = document.getElementById("authorInput");
const allInput = document.getElementsByTagName("input");
const submitButt = document.getElementById("submitButt");
const clearButt = document.getElementById("clearButt");
const outputDiv = document.getElementById("outputDiv");
const form = document.getElementById("formSection");

// ARRAY OF PICTURES
const picArr = [
  "url(https://assets.entrepreneur.com/content/3x2/2000/20150327221922-success-winning-inspirational.jpeg)",
  "url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_495142964_198701.jpg)",
  "url(https://cranium-one.com/wp-content/uploads/2016/09/success.jpg)",
  "url(https://base.imgix.net/files/base/ebm/ehstoday/image/2019/12/success.5df78d1970ca4.png?auto=format&fit=max&w=1200)",
];

const random = Math.floor(Math.random() * 3);

// DATA CONSTRUCTOR
class Data {
  constructor(name, course, author) {
    this.Name = name;
    this.Course = course;
    this.Author = author;
  }
}

// UI CONSTRUCTOR
function UI() {}

// createOutput
UI.prototype.createOutput = function (data) {
  // new ul with li
  let newUl = document.createElement("ul");
  newUl.className = "newUl";
  newUl.innerHTML = `
  <li>Name: ${data.Name}</li>
  <li>Course: ${data.Course}</li>
  <li>Author: ${data.Author}</li>
  `;
  // new section
  let newSection = document.createElement("section");
  newSection.className = "newSection";
  // new picture div
  let newPicDiv = document.createElement("div");
  newPicDiv.className = "newPicDiv";
  newPicDiv.style.backgroundImage = picArr[random];
  // append
  newSection.appendChild(newPicDiv);
  newSection.appendChild(newUl);
  outputDiv.appendChild(newSection);
  // clear input fields
  nameInput.value = "";
  courseInput.value = "";
  authorInput.value = "";
};

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  const name = nameInput.value;
  const course = courseInput.value;
  const author = authorInput.value;
  const data = new Data(name, course, author);

  const ui = new UI();
  ui.createOutput(data);
  console.log(outputDiv);
  e.preventDefault();
});

// CLEAR BUTTON
clearButt.onclick = () => {
  nameInput.value = "";
  courseInput.value = "";
  authorInput.value = "";
  outputDiv.innerHTML = "";
};
