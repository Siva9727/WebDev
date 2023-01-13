
// console.log(a);

// var a = 10;

let x = 10; // global variable

// if(true){
//     let y = 20;  // local variable
// }
// console.log(x);
// console.log(y);

// Normally you can access global variable anywhere except in local scope the same variable is reinitialized
for (let i = 0; i < 1; i++) {
    // console.log(x);    this statement throws an error and proves our above statement 
    let x = 50
    console.log( "inside",x);
}
console.log("outside",x);

/*         <---------------------- for VAR  -------------------------> "HOISTING"                    */

// function hello() {
//     console.log("hello");
// }
// console.log(a);

// var a = 10; // automatically the the var declaration goes to the top part or global scope
// console.log(a);

console.log(a);
if (true) {
    // still var declaration moves to the global scope 
    var a = 10;
}
console.log(a);