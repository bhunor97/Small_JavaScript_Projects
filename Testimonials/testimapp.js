const profilePic = document.getElementById("pictureDiv");
const nameDiv = document.getElementById("nameDiv");
const testimDiv = document.getElementById("testimDiv");
const buttonRight = document.getElementById("buttonRight");
const buttonLeft = document.getElementById("buttonLeft");

let peopleObject = {
  person1: {
    picture:
      "url(https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.862581661.1615161600)",
    name: "John Doe",
    testimony: "This is my testimony right here (John)",
  },
  person2: {
    picture:
      "url(https://img.freepik.com/free-photo/front-view-elegant-businesswoman-holding-clipboard-with-copy-space_23-2148788842.jpg?size=626&ext=jpg&ga=GA1.2.147262535.1614816000)",
    name: "Jane Doe",
    testimony: "This is my testimony right here (Jane)",
  },
  person3: {
    picture:
      "url(https://img.freepik.com/free-photo/business-concept-portrait-handsome-business-man-holding-hand-with-confident-face-white-background-copy-space_1258-381.jpg?size=626&ext=jpg)",
    name: "Bill Doe",
    testimony: "This is my testimony right here (Bill)",
  },
  person4: {
    picture: "url(https://vlv.coach/wp-content/uploads/2021/03/vlv-person.jpg)",
    name: "Anna Doe",
    testimony: "This is my testimony right here (Anna)",
  },
  person5: {
    picture:
      "url(https://media.istockphoto.com/photos/happy-satisfied-mature-businessman-looking-at-camera-isolated-on-picture-id1075455058?k=6&m=1075455058&s=612x612&w=0&h=1dNd5aczDqz8A-70DAPIC1RU-JYxsR0YLKTZo5M0uKo=)",
    name: "George Doe",
    testimony: "This is my testimony right here (George)",
  },
};

const keys = Object.keys(peopleObject);
const values = Object.values(peopleObject);
const entries = Object.entries(peopleObject);

// console.log(keys);
// console.log(values);
// console.log(entries);

let i = 0;

buttonRight.onclick = () => {
  if (i == 5) {
    i = 0;
  } else {
    i = i + 1;
  }
  nameDiv.innerHTML = values[i].name;
  profilePic.style.backgroundImage = values[i].picture;
  testimDiv.innerHTML = values[i].testimony;
};
