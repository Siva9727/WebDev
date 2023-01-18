// array destructuring 


// let arr = [10, 20, 30, 40]

// let a = arr[0]
// let b = arr[1];
// let c  = arr[2]


//you can simplify the above code using array destructuring 

// let [a, b, c] = arr;


// console.log(a, b, c)

//Object destructing

// let obj = {
//     name: "siva",
//     age: 27,
//     place: "kerala"

// }

// let name = obj.name;
// let age = obj.age;

// let { name, age, place } = obj;

// let { name:x, age:y, place:z } = obj;
// console.log(x,y,z);

let arr = [
    {name:"siva", age:20},
    {name:"sakthi", age:25},
    {name:"sra", age:27}
]

// let [a,b,c] = arr
let [{name:a1, age:a2},b,c] = arr
console.log(a1,a2,b,c);