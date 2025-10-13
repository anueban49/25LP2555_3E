// 1–100 хүртэлх бүх 3 болон 5-д хуваагддаг тоог хэвлэх

function isDivisibleby3and5() {
    let idealNum = [];
    let num = 0;
    while (num <= 100) {
        if (num % 3 === 0 && num % 5 === 0) {
            return num;
            // idealNum.push(num);
        }
        num++;
    } 
    return idealNum;
}
console.log(isDivisibleby3and5());




// Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол
function findSumOfDigits(num) {
    return num  //this shit being done here is called method chaining. fuck js.
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0); //and ends the 'thought' here with semicolon like david j malan said.
}      

// .reduce() function is made to reducing an array to a single value by applying a function.

console.log(findSumOfDigits(56));

// Өгөгдсөн цагийг 24 цагийн форматаас 12 цагийн AM/PM форматаар хөрвүүлэх функц бич 


function timeFormat(h) {
    while (h <= 24) {
        if (h < 12) {
            return (h + " am");
        } else if (h <= 24 ){
            h = h - 12;
            return (h + " pm");
        } else {
            return "the value is not acceptable.";
        }
    }
    return h;
}

console.log(timeFormat(0));





// Өгөгдсөн өдрийг шалгаж, зөвхөн амралтын өдөр эсвэл ажлын өдөр болохыг хэвлэнэ үү.

function identifyDay(day) {
    switch(day) {
        case 1: 
         console.log("Monday");
         break;
        case 2: 
        console.log("Tuesday");
        break;
        case 3: 
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
            return "Invalid value";
    }
}
console.log(identifyDay(6));




