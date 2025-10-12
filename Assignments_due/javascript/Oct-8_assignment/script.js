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

// function count(arr, num) {
//     let count = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             count++;
//         }
//     }
// }

// 8. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол


// function compare(arr, num) {
//     let count = 0;
//     for (i = 0; i < arr.length; i ++) {
//         for (j = 0; j + 1 < arr.length; j ++) {
//             if (arr[i] + arr[j] === num) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(compare([9, 18, 11, -40, 13, 53, 44, 29, 8, 4, 32, 21], 27));

// // 9. Өгөгдсөн 2 массивийн огтлолцлыг ол
// function compare(a, b) {
//     return (a === b);
// }
// function intersectNum(arr1, arr2) {
//     let count = 0;
//     for (i = 0; i < arr1.length; i ++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (compare(arr1[i], arr2[j]));
//             count++;
//         }
//     }
//     return(count)
// }
// console.log(intersectNum(compare(
//     [91,3,24,0,89,6,3,4,8,6,2,30,8,6,4,8,1,27,6]
//     [23,87,4,87,4,8,7,2,647,62,7,83,74,10,9,34]
// )));

// 10. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// function sort(arr) {
//     let temp = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             temp.push(arr[i]);
//         }
//     }
//     const nonNegatives = arr.filter(num => num >=0);
//     const mergedArray = [...temp, ...nonNegatives];
//     return mergedArray;
// }
// console.log(sort([8, 31, -7, -2,6,-4,0,-8,27]));

// another simples way to do it
function sort(arr) {
    let nonNegatives = arr.filter(num => num >= 0);
    let negatives = arr.filter(num => num < 0);
    const mergedArray = [...negatives, ...nonNegatives];
    return mergedArray;
}
console.log(sort([8, 31, -7, -2,6,-4,0,-8,27]));

// 11. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол

function fillMissingNum (arr){
    if (sequence.false) {
        findNum();
        arr.push(findNum());
    }
    return arr;
}