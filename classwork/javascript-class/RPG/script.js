
const input = document.getElementById("input");

if (input) {input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const username = input.value;
    localStorage.setItem("savedUsername", username);
    console.log(username);
  }
})}



const charSelect = () => {
  const selectArea = document.querySelector(".selectArea");
  if (selectArea) {console.log("selectArea found")}
  selectArea.addEventListener('click', (event) => {
    if (event.target.classList.contains("slime")) {
      console.log("slime selected")
    }
  })
}

function gameStart() {
  const screenOn = document.querySelector(".world");
 
  let gameOn = 
    `<div>Gameon</div>`;
   if (screenOn) { screenOn.innerHTML = gameOn}
}
//dblclick function not working
//console.log char response not working