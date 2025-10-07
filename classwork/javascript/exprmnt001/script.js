const max = findTheHighestNum();
function findTheHighestNum() {
  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;
  const c = document.getElementById("num3").value;
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  if (c >= a && c >= b) {
    return c;
  }

  console.log(max);
}
const highnum = document.getElementById("result");
