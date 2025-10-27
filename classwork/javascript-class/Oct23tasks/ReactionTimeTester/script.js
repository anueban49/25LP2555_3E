const clickArea = document.getElementById("area");
const startBtn = document.getElementById("startBtn");

function start() {
  clickArea.style.backgroundColor = "rgb(81, 81, 81)";
  clickArea.innerHTML = `<h1>Wait for color to change...</h1>`;
  colorChange();
}

const colorChange = () => {
  setTimeout(colorChange, intermission);
};
  let intermissionTime = (Math.random() * (3000 - 2000 + 1) + 2000).toFixed(0);
  console.log(intermissionTime);
  const intermission = intermissionTime;
  clickArea.style.backgroundColor = "rgb(255, 73, 73)";
  clickArea.innerHTML = `<h1>Click Now!</h1>`;
  clickArea.addEventListener("click", () => {
    console.log("clicked!");
  });

// setTimeout(() => {
//     math
// })
// const start = () => {
//     clickArea.style.backgroundColor = "black";
// }

// function randomWholeNum() {
//     const num = Math.random;
// }
// console.log(getRandom());
