
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const numDisplay = document.getElementById("num_indicator")
let count = 0;
plus.addEventListener("click", () => {
    count++;
    numDisplay.textContent = count;
})
minus.addEventListener("click", () => {
    count--;
    numDisplay.textContent = count;
})