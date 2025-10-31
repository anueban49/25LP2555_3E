const box = document.querySelectorAll(".box");

let currentPlayer = "X";
const board = document.querySelector("#board");
const boxFill = board.forEach((box) => {
  box.addEventListener("click", () => {
    box.textContent = currentPlayer;
  })
})



const option = ["", "", "", "", "", "", "", "", "",]

const wincondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkWinner() {
  let roundWon = false;
  for(i = 0; i < wincondition.length; i++) {
    const condition = wincondition[i];
    const cellA = 
  }
}



