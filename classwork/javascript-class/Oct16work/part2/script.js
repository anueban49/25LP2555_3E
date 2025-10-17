let num = document.getElementById("num_indicator");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let count = 0;

plus.addEventListener("click", () => {
  count++;
  num.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  num.textContent = count;
});
