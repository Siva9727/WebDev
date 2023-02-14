// function cMap(nums,fun) {
//     let newArr = []
//     for(let i=0; i<nums.length; i++){
//         newArr[i] = fun(nums[i])
//     }
//     return newArr;
// }
let a = [1,2,3,4]

console.log(a,typeof a)

// let double = x => x*2;
// let ans = cMap(a,double)
// console.log(ans)

//there is an inbuilt function for this in javascript , ie map

let ans =  a.map((value,index)=> {
    console.log(value,index);
    return value*2;
})
console.log(ans, typeof ans);

let ans1 = a.map((value,index) => {
    console.log(index, value)
    return value *3;
})

console.log(ans1);

// map is also a higher order function
// it acts like a for loop{replacement for for-loop}