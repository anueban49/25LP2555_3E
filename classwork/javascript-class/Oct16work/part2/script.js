let count = 0;
const plus = dopcument.getElemetById("plus");
const minus = document.getElementById("minus");
const numDisplay = document.getElementById("num_indicator");
// function subtract () {
//     let count = 0;
//     count++;
//     if (numDisplay === 0) {
//         document.getElementById("num_indicator").innerText = count;
//     }
// };
// function add () {
//     let count = 0;
//     count--;
//     if (numDisplay === 0) {
//         document.getElementById("num_indicator").innerText = count;
//     }
// }

plus.addEventListener("click", () => {
    count++;
    numDisplay.textContent = count;
})
minus.addEventListener("click", () => {
    count--;
    numDisplay.textContent = count;
})