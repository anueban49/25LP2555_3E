

function greetings() {
    const name = document.getElementById("hello_section").value;
    const output = document.getElementById("output");
    output.innerText = "Hello, " + name;
    hello_section.style.display = "none";
    output.style.display = "block";

}
//2
const a = document.getElementById("task2").value;
function zerotohundred() {
    if (a > 0 && a < 100) {
        return "included!"
    } else {
        return "Excluded!"
    }
}



// 4
const b = prompt("Enter a Year: ");
function checkOlympicYear(x) {
    if (x % 4 === 0 ) {
        console.log("It was a summer Olympic year. ");
    } else if (x % 4 === 2) {
        console.log("It was a Winter Olympic year.");
    } else {
        console.log("It was not an Olympic year.");
    }
}
console.log(checkOlympicYear(2000));
// 5 

const c = prompt.document.getElementById("task5").value;
function checkgrades(c) {
    if (c < 49 && c > 0 ) {
        return "F";
    } else if (c < 59 && c > 50 ) {
        return "D";
    } else if (c < 69 && c > 60 ) {
        return "C";
    } else if (c < 79 && c > 70 ) {
        return "B";
    } else if (c < 89 && c > 80 ) {
        return "A";
    }
}
//6 
const month = prompt.document.getElementById("task6").value;
function checkSeason(month) {
    if (month < 0) {
        return undefined;
    } else if (month <= 2 && month == 11) {
        return "Winter";
    } else if (month <= 5 && month >= 3) {
        return "Spring";
    } else if (month <= 9 && month >= 6) {
        return "Summer";
    } else if (month < 1 && month> 8) {
        return "Autumn"
    }
}
console.log(checkSeason(month));

//7
const time = prompt.document.getElementById("task7").value;
function daytime(time) {
    if (time > 0 && time > 24) {
        return null;
    } else if (time <= 12 && time >= 6) {
        return "Good Morning!";
    } else if (time > 12 && time <= 18) {
        return "Good Afternoon!";
    } else if (time > 18 && time <= 22) {
        return "Good Evening";
    } else {
        return "Hi there, Night owl!";
    }
}
console.log(daytime(time));

//8 
const weather = prompt.document.getElementById("task8").value;
function forecast(weather) {
    if (weather === "rainy") {
        return "Don't forget your umbrella.";
    } else if (weather === sunny) {
        return "Got your sun hat yet?"
    } else if (weather === windy) {
        return "You may need some wind-proof equipments."
    } else if (weather === snowing) {
        return "Time to wear some thick ass clothes, mate?"
    } else if (weather > "0 degree Celsius") {
        return "It's chilly outside"
    } else {return null;}};
console.log(forecast(weather));

//9
const age = prompt.documents.getElementById("task9").value;
const yearsleft = (age - 18);
function eligibility(age) {
    if (age <= 0) {
        return null;
    } else if (age >= 18) {
        return "You are eligible top drive.";
    } else if (age < 18) {
        return ("You need to wait for at least " + yearsleft + "to drive.");
    }
};
//10 
const sides = (a, b, c);
function triangleSides(a, b, c) {
    if (a === b === c) {
        return "triangle sides are equal"
    } else {
        return "triangle sides are not equal"
    }
};
console.log(triangleSides);
//11 
const letter = prompt.document.getElementById("task11").value;
function typeChecker(letter) {
    if (letter === "b"
        && letter === "c"
        && letter === "d"
        && letter === "f"
        && letter === "g"
        && letter === "h"
        && letter === "j"
        && letter === "k"
        && letter === "l"
        && letter === "m"
        &&letter === "n"
        &&letter === "p"
        &&letter === "q"
        && letter === "r"
        && letter === "s"
        && letter === "t"
        &&letter === "v"
        && letter === "w"
        &&letter === "x"
        &&letter === "z"
    ) {
        return "It is a consonant";
    } else if (
        letter === "a"
        && letter === "u"
        && letter === "i"
        && letter === "o"
        && letter === "e"
    ) {
        return "It is a vowel";
    }
}