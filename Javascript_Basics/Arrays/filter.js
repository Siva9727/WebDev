// created a function to filter even numbers in an integer array 

// function customFilter(arr,fun) {
//     let newArr = [];
//     for(let i=0; i<arr.length; i++){
//         if (fun(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

let a = [10,20,30,40,60]
// let isEven = (x) => x % 2 === 0;

// let ans = customFilter(a,isEven)
// console.log(ans)


//use inbuilt filter fuction

// let newArray = a.filter((value,index) => {
//     console.log(value,index);
//     return value%2 === 0
// })
// console.log(newArray);


// reduce method

let ans = a.reduce((sum,value)=>{
    console.log(sum,value);
    return sum+value;
},0)

console.log(ans);