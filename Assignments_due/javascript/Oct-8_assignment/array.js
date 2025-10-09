// sort in order
// const arr = [8,2,7,1,3,5,4];
// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }
//     return arr;
// }

function reverse(e) {
  let a = 0;
  let b = e.length - 1;
  while (a < b) {
    let temp = e[a];
    e[a] = e[b];
    e[b] = temp;
    a++;
    b--;
  }
  return e;
}
console.log(reverse([22, 34, 78, 60, 2, 8,38, 726,39,4,7, 8]));
