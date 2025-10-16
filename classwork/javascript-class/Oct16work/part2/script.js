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
// plus.addEventListener("click", () => {
//     num++;
//     num.textContent = num;
// });
// minus.addEventListener("click", () => {
//     num--;
//     num.textContent = num;
// });


let count = document.getElementById("num_indicator");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

    plus.addEventListener("click", () => {
      count++;
      count.textContent = count;
    });

    minus.addEventListener("click", () => {
      count--;
      count.textContent = count;
    });