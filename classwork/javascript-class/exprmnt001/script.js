
const a = Number(document.getElementById("num1").value);
const b = Number(document.getElementById("num2").value);
const c = Number(document.getElementById("num3").value);

function findTheHighestNum() {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  else return c;
}
function displayTheHighestNum() {
  const highest = findTheHighestNum();
  document.getElementById("highnum").textContent = highest;
}