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
//         for (let m = 0; m < Num.length; m++) {
//             let twoDigits = Num[n] * 10 + Num[m];
//             twoDigitNum.push(twoDigits);
//         }
//     }
//     return twoDigitNum;
// }

// console.log(twoDigitNum.length);

// 8. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол

// const arr = [1, 2, 3, 4, 5]; //pair possibility total 10
// let sum = [];

// function createIdealSum(arr) {
//     for (let n = 0; n < arr.length; n++) {
//         for (let m = 0; m < arr.length; m++) {
//             let sum = arr[n]  + arr[m];
//         }
//     }
//     if (sum === 6) {
//         return (arr[n, arr[m]])
//     }

// }

// console.log(sum);

// const arr = [4, 6, 78, 34, 45, 23, 99];

// let sum;
// function add(arr) {
//   let sums = [];

//   for (let n = 0; n <= arr.length; n++) {
//     for (let m = 0; m <= arr.length; m++) {
//       let sum = arr[n] + arr[m];
//       if (sum === 40) {
//         sums.push([arr[n], arr[m]]);
//       }
//     }
//   }

//   return sums;
// }
// console.log(add(arr));

// 9. Өгөгдсөн 2 массивийн огтлолцлыг ол
// function compare(a, b) {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const arr1 = [17, 83, 460, 8, 8, 7, 12, 63, 4, 78, 2];
// const arr2 = [8, 27 ,36 ,49, 78 ,6 ,34, 7, 863, 2];
// function findSameValue(arr1, arr2) {

//     let sameValues = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j] && !sameValues.includes(arr1[i])) {
//             sameValues.push(arr1[i]);
//         }
//     }
// }
//     return sameValues;
// }
// console.log(findSameValue(arr1, arr2));

// 10. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
const numbers = [10, 21, -6, 45, -2, 0, 3, 47, -19, 28];
function sortnegativesLeft(arr) {
  const negatives = arr.filter((num) => num <= 0);
  const nonNegatives = arr.filter((num) => num >= 0);
  return [...negatives, ...nonNegatives];
}

const sorted = sortnegativesLeft(numbers);
console.log(sorted);

// 11. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
const N = [1, 2, 4, 5, 6];
function findMissingValue(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}

// 1. Count Occurrences
// Problem: Count how many times a number appears in an array
function count(arr) {
    const temp =
    let number
    if (arr[i] === arr[j]) {
    const temp === arr[i]}
}
// 2. Check if Number Exists
// Problem: Return true if a number exists in the array

// 3. Find Second Largest
// Problem: Find the second largest number in an array

// 4. Rotate Array
// Problem: Rotate array right by k positions

// 5. Remove Duplicates (preserve order)
// Problem: Remove duplicate numbers while keeping first occurrence

// 6. Factorial Sum
// Problem: Return sum of factorials of each number in array

// 7. Array Rotation Check
// Problem: Check if arr2 is rotation of arr1

// 8. Merge Two Sorted Arrays
// Problem: Merge two sorted arrays into one sorted array

// 9. Diagonal Sum of Matrix
// Problem: Calculate sum of main diagonal in a square matrix
