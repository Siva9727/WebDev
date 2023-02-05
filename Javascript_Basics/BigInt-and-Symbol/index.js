// let a  = 100n;  // this is bigInt representationn

// console.log(a, typeof a)

// // to convert big int to number
// let b = Number(a)
// console.log(b, typeof b)
// let x  = 150;
// let y = BigInt(x);

// console.log(y, typeof y)
let sports  = "cricket";
let obj = {
    a:"siva",
    b:15,
    [sports]:"I love playing"

}
let a  = "siva"
obj[a] = 27;
delete obj['a']
console.log(obj)

// symbol --->  unique value and you cannot access the value 
let first = Symbol();
let second = Symbol()
console.log(first)
console.log(first == second)
