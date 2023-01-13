let arr = [10,20,30,40,50]

// to copy the arr to arr1
// let arr1=[];

// for (let index = 0; index < arr.length; index++) {
//     arr1[index] = arr[index];
// }
// console.log(arr1);


// or Use spread Operator 

// let arr1 = [...arr];
let arr1 = [1,2,...arr,5];

console.log(arr1);