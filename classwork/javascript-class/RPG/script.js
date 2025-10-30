const charSelect = document.querySelectorAll(".slime");
const input = document.getElementById("input");

if (input) {input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const username = input.value;
    localStorage.setItem("savedUsername", username);
    console.log(username);
  }
})}



charSelect.forEach((character) => {

character.addEventListener("click", () => {
  character.classList.add("select");
  let unSelect = document.querySelector(".select");
  if (unSelect) {
    unSelect.addEventListener("dblclick", () => {
      character.classList.remove("select");
    })
  }
})

const mobSlime = {
  hp : 100,
  atk : 5,
}
console.log(mobSlime.hp)
})

function gameStart() {
  const screenOn = document.querySelector(".world");
 
  let gameOn = 
    `<div>Gameon</div>`;
   if (screenOn) { screenOn.innerHTML = gameOn}
}
//dblclick function not working
//console.log char response not working