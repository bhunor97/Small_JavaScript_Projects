const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// // RECTANGLES
// // fillRect()
// ctx.fillStyle = "green";
// ctx.fillRect(20, 20, 50, 50);

// // strokeRect()
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 15;
// ctx.strokeRect(100, 100, 50, 50);

// // clearRect()
// ctx.clearRect(15, 15, 25, 25);

// // fillText()
// ctx.fillText("ASDASD", 200, 100);
// ctx.strokeStyle = "red";
// ctx.lineWidth = 1;
// ctx.strokeText("LKJLKJLKJ", 100, 200);

// // PATHS
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fillStyle = "blue";
// ctx.fill();
// // ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 50);
// ctx.lineTo(250, 150);
// ctx.lineTo(150, 150);
// ctx.lineTo(150, 50);
// ctx.fillStyle = "red";
// ctx.fill();

// circle
ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
ctx.arc(canvas.width / 2, canvas.width / 2, 300, 0, Math.PI * 2);
ctx.stroke();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.moveTo(centerX, centerY);
ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
ctx.stroke();

ctx.font = "30px serif";
ctx.textAlign = "center";
ctx.fillText("12", centerX, centerY - 280);
ctx.fillText("6", centerX, centerY + 280);
ctx.fillText("3", centerX + 280, centerY);
ctx.fillText("9", centerX - 280, centerY);
