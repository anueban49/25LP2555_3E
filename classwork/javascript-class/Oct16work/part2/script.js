// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const num = document.getElementById("num_indicator");
// function increment(num) {
//     num++;
// }
// function substraction(num) {
//     num--;
//     return num;
// }



let num = document.getElementById("num_indicator");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

// function subtract() {
//   num--;
//   return num;
// }
// function add() {
//   num++;
//   return num;
// }
plus.addEventListener("click", () => {
    num++;
    num.textContent = num;
});
minus.addEventListener("click", () => {
    num--;
    num.textContent = num;
});