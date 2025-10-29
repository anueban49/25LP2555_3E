const startBtn = document.getElementById("start");
const holes = document.querySelectorAll(".holes");
const moles = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");
const screen = document.getElementById("screen");

function gameplay() {
    const screen = document.getElementById("screen");
    screen.style.display = "none"
    let score = 0;
    const scoreDisplay = document.getElementById("score");
    
  const gameOn = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    mole.classList.add("moleStyle");
    setTimeout(() => {
      mole.classList.remove("moleStyle");
    }, 500);
  }, 1000);

  startBtn.classList.add("gameStarted");
//   let score = 0;

  moles.forEach((mole) =>
    mole.addEventListener("click", () => {
      score += 1;

      scoreDisplay.textContent = score;
      mole.style.backgroundColor = "red";
      setTimeout(() => {
        mole.style.backgroundColor = "rgb(165, 149, 115)";
      }, 300);
    })
  );
  let time = 15;
  const timerDisplay = document.getElementById("timer");
  const countDown = setInterval(() => {
    time -= 1;
    timerDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(countDown);
      timerDisplay.textContent = "Time's Up!";
      clearInterval(gameOn);
      const screen = document.getElementById("screen");
      setTimeout(() => {
        screen.style.display = "flex";
        const finalScore = score;
        document.getElementById("scoreFinal").textContent = finalScore;

      }, 600);

    }
  }, 1000);
}

//project finished: 2025.10.29