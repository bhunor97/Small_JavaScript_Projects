const nameInput = document.getElementById("nameInput");
const courseInput = document.getElementById("courseInput");
const authorInput = document.getElementById("authorInput");
const submitButt = document.getElementById("submitButt");
const outputDiv = document.getElementById("outputDiv");
const form = document.getElementById("formSection");

// CONSTRUCTOR
class Data {
  constructor(name, course, author) {
    this.Name = name;
    this.course = course;
    this.author = author;
  }
}

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  const name = nameInput.value;
  const course = courseInput.value;
  const author = authorInput.value;
  const data = new Data(name, course, author);

  e.preventDefault();
  console.log(data);
});

// // CONSTRUCTOR
// function Data(name, course, author) {
//   this.Name = name;
//   this.Course = course;
//   this.Author = author;
// }

// // FORM SUBMIT
// form.addEventListener("submit", (e) => {
//   const name = nameInput.value;
//   const course = courseInput.value;
//   const author = authorInput.value;
//   //   constructor being used
//   const courseData = new Data(name, course, author);

//   console.log(courseData);
//   e.preventDefault();
// });
