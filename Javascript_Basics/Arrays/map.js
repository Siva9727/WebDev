// function cMap(nums,fun) {
//     let newArr = []
//     for(let i=0; i<nums.length; i++){
//         newArr[i] = fun(nums[i])
//     }
//     return newArr;
// }
let a = [1,2,3,4]

// let double = x => x*2;
// let ans = cMap(a,double)
// console.log(ans)

//there is an inbuilt function for this in javascript , ie map

let ans =  a.map((value)=> value*2)
console.log(ans);