// const birthdate = new Date("1990-01-01");
// const ms = birthdate.getTime();
// const second = ms / 1000;
// const minute = second / 60;
// const hour = minute / 60;
// const day = hour / 24;
// const year = day / 365;


// console.log(year);

const userInput = document.getElementById("user_input").innerHTML;
function cleanName(userInput) {
    userInput.toUpperCase().trim(" ");
}