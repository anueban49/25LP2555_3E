//task1
const a = document.getElementById("num1");
const b = document.getElementById("num2");
// document.getElementById("sum").addEventListener("click", () => {
//     const result = document.getElementById("sum_result");
//     const a = document.getElementById("num1").value;
//     const b = document.getElementById("num2").value;
//     const sum = a + b;
//     result.innerText = sum;
// });
function add() {
    const a = document.getElementById("num1");
    const b = document.getElementById("num2");
    const result = document.getElementById("sum_result");
    const sum = a + b;
    result.innerText = sum;
}

//task 2
function check() {
    const age = document.getElementById("age");
    const answer = document.getElementById("answer");
    if (age >= 18) {
        answer.innerText = "You are 18 or older."
    } else {
        answer.innerText = "You are underage."
    }
};

//task 3
function checkMail () {
    const mail = document.getElementById("mail");
    const message = document.getElementById("message");
    if (mail.includes("@", ".com")) {
        message.innerText = "Succesful."
} else {
    message.innerText = "please enter your mail."
}
};




//task 4
const text = document.getElementById("text");