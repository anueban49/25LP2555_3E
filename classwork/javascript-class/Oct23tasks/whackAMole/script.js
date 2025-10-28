const startBtn = document.getElementById("start");
const holes = document.querySelectorAll(".holes");
const moles = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");

// console.log(moles.length);
const gameplay = () => {
    setInterval (() => {
        const randomIndex = Math.floor(Math.random() * moles.length)
        const mole = moles[randomIndex]
        mole.style.scale = 1;
        setTimeout(() => {
            mole.style.scale = "0";
        }, 900)
    }, 1200)
    
    moles.forEach(mole => (
        mole.addEventListener("click", () => {
            let score = 0;
            score += 1;
            return score;
        }
    ) 
    ))
    scoreDisplay.textContent = score;
}






