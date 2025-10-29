const startBtn = document.getElementById("start");
const holes = document.querySelectorAll(".holes");
const moles = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("timeDisplay");
let time = 10000;
const seconds = time / 1000;
const min = 
console.log(seconds);
// console.log(moles.length);

// let stopGamePlay = false;

function gameplay() {
    setInterval (() => {
        const randomIndex = Math.floor(Math.random() * moles.length)
        const mole = moles[randomIndex]
        mole.classList.add("moleStyle");
        setTimeout(() => {
            mole.classList.remove("moleStyle");
        }, 900)
    }, 1200)
    
    moles.forEach(mole => (
        mole.addEventListener("click", () => {
            let score = 0;
            score += 1;
            console.log(score);
            scoreDisplay.textContent = score;
            mole.style.backgroundColor = "red";
            setTimeout(() => {
                mole.style.backgroundColor = "rgb(165, 149, 115)"
            }, 500)
        }
        
    ) 
    ))
    
}
// const timeGiven = setTimeout(() => {
//     break gameplay();
// }, 10000)






