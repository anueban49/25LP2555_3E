<<<<<<< HEAD
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



=======
>>>>>>> 64aba145fbc21310d7f558ce42943b96d20108b3
let num = document.getElementById("num_indicator");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let count = 0;

<<<<<<< HEAD
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
=======
plus.addEventListener("click", () => {
  count++;
  num.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  num.textContent = count;
});
>>>>>>> 64aba145fbc21310d7f558ce42943b96d20108b3
