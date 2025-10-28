const clickArea = document.getElementById("area");
const startBtn = document.getElementById("startBtn");

let startTime;

function start() {
  clickArea.style.backgroundColor = "rgb(81, 81, 81)";
  clickArea.innerHTML = `<h1>Wait for color to change...</h1>`;

  let intermission = 2000;
  // let intermission = (Math.random() * (3000 - 2000 + 1) + 2000).toFixed(0);
  console.log("wait time: " + intermission + "ms");
  setTimeout(() => {
    const colorChange = () => {
      clickArea.style.backgroundColor = "rgba(107, 164, 106, 1)";
      startTime = new Date();
      clickArea.innerHTML = `<h1 id="gameplayScreen" onclick="getTime()">Click anywehere!</h1>`;
      console.log(startTime)
    };
    colorChange();
  }, intermission);
}

const getTime = () => {

    const clickedTime = new Date();
    const result = startTime - clickedTime;
    console.log(clickedTime)
    console.log(result);
    if (result) {
  clickArea.innerHTML = `<h1>Your reaction time is: ${result * -1}ms!</h1>`
}
};


// if (clickArea.style.backgroundColor = "rgb(255, 73, 73)") {
//   clickArea.classList.add("clicked");

//   clickArea.addEventListener("click", () => {

//   })
// }

// clickArea.addEventListener("click", () => {
//   clickArea.style.backgroundColor = "rgba(112, 255, 73, 1)"
//   startTime = new Date()

// })
