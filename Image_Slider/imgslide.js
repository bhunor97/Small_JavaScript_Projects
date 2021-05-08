const buttonLeft = document.getElementById("buttonLeft")
const buttonRight = document.getElementById("buttonRight")
const imgContainer = document.getElementById("imgContainer")
const message = document.getElementById("message");

const imageURL = [
    "0",
    "url(https://www.ways2gogreenblog.com/wp-content/uploads/2018/10/care-of-environment.jpg)",
    "url(https://wallpaperaccess.com/full/156340.jpg)",
    "url(https://wallpapercave.com/wp/wp2782408.jpg)",
    "url(http://www.4kwallpaperhd.com/wp-content/uploads/2018/03/High-Quality-Vietnam-Waterfalls-Wallpaper-3840x2160.jpg)",
    "url(https://img5.goodfon.com/wallpaper/nbig/2/cf/gory-les-vetnam-vodopad.jpg)",
    "url(https://img.itinari.com/pages/images/original/3f3c7cfe-9426-417a-adf7-0b42d8d6df10-istock-611174546.jpg?ch=DPR&dpr=1&w=1200&h=800&s=4cfd521162e5872dfb3a441e0d43a84c)",
    "6"
];

let i = 2;

buttonRight.onclick = () => {
    i = i + 1;
    if (i == 6) {
        i = 0;
    } 
    imgContainer.style.backgroundImage = imageURL[i]
    message.style.display = "none";
};

buttonLeft.onclick = () => {
    i = i - 1;
    if (i == 0) {
        i = 6;
    } 
    imgContainer.style.backgroundImage = imageURL[i]
    message.style.display = "none";
};
