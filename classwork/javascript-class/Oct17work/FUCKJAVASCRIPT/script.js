//task1
// const result = document.getElementById("sum_result");
function add(a, b) {
  return a + b;
}
document.getElementById("sumUp").addEventListener("click", () => {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const result = document.getElementById("sum_result");
  const sum = add(a, b);
  result.innerText = sum;
});

//task 2
function check() {
  const age = document.getElementById("age").value;
  const answer = document.getElementById("answer");
  if (age >= 18) {
    answer.innerText = "You are legal age.";
  } else {
    answer.innerText = "You are underage.";
  }
}

//task 3
const mail = document.getElementById("mail").value;
const message = document.getElementById("message");

document.getElementById("submitMail").addEventListener("click", () => {
  if (mail.includes("@") && mail.includes("mail.com")) {
    message.innerText = "Succesful.";
  } else {
    message.innerText = "Please enter your goddamn mail for fucks sake.";
  }
});

//task 4
const text = document.getElementById("text");
const charCountText = document.getElementById("charCount");
text.addEventListener("input", () => {
  charCountText.innerText = text.value.length;
});
