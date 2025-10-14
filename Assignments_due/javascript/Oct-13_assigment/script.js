// 1. Count Occurrences
// Problem: Count how many times a number appears in an array
function count(arr, num) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}
console.log(count([3, 4, 5, 5, 5, 4, 0, 2, 2, 3, 4, 1, 6, 3], 2));

// 2. Check if Number Exists
// Problem: Return true if a number exists in the array

function check(arr, num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return "The number exists."
        } else {
            return "The number doesn't exist."
        }
    }
}
console.log(check(
    [1, 8, 3, 2, 7, 4, 6, 8, 1, 7, 2, 6, 3, 9, 4, 8, 7], 5
));
// 3. Find Second Largest
// Problem: Find the second largest number in an array

const arr = [19, 8, 3, 62, 4, 89, 12, 6, 34, 8, 126];
// console.log(secondLargest(num));
const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr[arr.length - 1 - 1]);

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