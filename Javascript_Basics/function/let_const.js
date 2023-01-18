// let - re assign but cannot re declare 


// const cannot reassign and redeclare 
// just like final keyword in JAVA

let a = [1,2,3,4,5,6]
a=[];
// to clear the elemets you can reassign in let array 

console.log(a);

const arr = [1,2,3,4];
console.log(arr)
// for clear or remove the elements you can use .length array method 
arr.length = 1;
console.log(arr)