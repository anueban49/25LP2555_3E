const clickArea = document.getElementById("area");
const startBtn = document.getElementById("startBtn");

function start() {
  clickArea.style.backgroundColor = "rgb(81, 81, 81)";
  clickArea.innerHTML = `<h1>Wait for color to change...</h1>`;
}
let intermission = (Math.random() * (3000 - 2000 + 1) + 2000).toFixed(0);
console.log(intermission);;
setTimeout(() => {
  const colorChange = () => {
      clickArea.style.backgroundColor = "rgb(255, 73, 73)";
  clickArea.innerHTML = `<h1>Click Now!</h1>`;
  };
  colorChange();
}, intermission);

if (clickArea.style.backgroundColor = "rgb(255, 73, 73)") {
  clickArea.classList.add("clicked");
  clickArea.addEventListener("click", () => {
    setInterval(() => {
      let reactTime = 0;
      reactTime += 1;
      console.log(reactTime);
      document.getElementsByClassName("clicked").addEventListener("click", () => {
        
      })
      
    }, 1);
    

  })
}
setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);
