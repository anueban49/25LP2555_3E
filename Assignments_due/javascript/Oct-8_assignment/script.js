// 1. Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// function sum(arr) {
//     let total = 0;
//     for (let k = 0; k < arr.length; k++) {
//         total += arr[k]}
//     console.log (total);
// }
// const arr = [3, 6, 7, 12, 89, 100];
// sum(arr);

// // 2. Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.
// function sumExclude0(arr) {
//     let total = 0;
//     for (let k = 0; k < arr.length; k++) {
//         total += arr[k + 1]
//     } console.log (total);
// }

// // 3. Өгөгдсөн массивын хамгийн бага элементийг ол.
// const numbers = [3, 6, 7, 12, 89, 100];
// const lowest = Math.min(...numbers);
// console.log(lowest);

// const elements = [23, 8, 746, 10, 56, 29];
// const highest = Math.max(... elements)
// console.log(highest);

// // 4. Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.
// const highestNumIndex = elements.indexOf(highest);
// console.log(highestNumIndex);

// 5. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// function reverse(e) {
//     let a = 0; //index of first element
//     let b = e.length - 1; //index of last element
//     while (a < b) {
//         let temp = e[a];
//         e[a] = e[b];
//         e[b] = temp;
//         a++;
//         b--;
//     }
//     return e;
// }
// console.log(reverse([12, 76, 3, 45, 58]));

// 6. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа


// const allScores = [59.5, 73, 87.6, 63, 90, 89];
// let highScores = [];

// function filter(array) {
//     for (n = 0; n < array.length; n++) {
//         if (array[n] > 70) {
//             highScores.push(array[n]);
//         }
//     } 
//     return highScores;
// }


// console.log(filter(allScores))

// 7. Өгөгдсөн массивийн бүх хосыг хэвлэ
// const Num = [1, 2, 3, 4, 5]; //pair possibility total 10
// let twoDigitNum = [];

// function createTwoDigitNum() {
//     for (let n = 0; n < Num.length; n++) {
//         for (let m = 0; m <Num.length; m++) {
//             let twoDigits = Num[n] * 10 + Num[m];
//             twoDigitNum.push(twoDigits);
//         }
//     }
//     return twoDigitNum;
// }

// console.log(twoDigitNum.length);



// 8. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
const idealSum = 49;
const numbers = [ 22, 39, 26, 48, 1, 30, 9, 11, 28, 21 ];
let idealNumbers =[];
function shuffleAdd(Array) {
    for (let x = 0; x < Array.length; x++) {
        for (let y = 0; y < Array.length; y++) {
            let sum = numbers[x] + numbers[y];
        }
    } idealNumbers.push(sum);
}

console.log


// 9. Өгөгдсөн 2 массивийн огтлолцлыг ол
// 10. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// 11. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол

// sorting
// const e = [];
// let temp;
// for (i = 0; i < e.length; e++) {
//     if (e[i] < e[i + 1],
//         e[i] = temp
//     )
// }