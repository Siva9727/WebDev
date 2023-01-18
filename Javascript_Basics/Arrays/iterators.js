

let arr = [10, 20, 30, 40]
//normal for loop

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);

// }

// for-of loop
// here i go for each value in array
for (const i of arr) {
    console.log(i);
}

let arr1 = [
    {name:"siva", age:20},
    {name:"sakthi", age:25},
    {name:"sra", age:27},
    {name:"aravind", age:17}
]

for (let i of arr1) {
    if (i.age>18) {
        console.log(i)
    }
}