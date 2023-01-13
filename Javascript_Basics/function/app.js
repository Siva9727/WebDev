/* 
Types of function
1--> normal function
2--> function expression
3--> arrow function
*/

function sum(a, b) {
    console.log(a + b);
}

//function expression

// let sum1 = function (a, b) {
//     console.log(a + b);
// }

// //arrow function

// let sum2 = (a, b) => {
//     console.log(a, b);
// } 

// let x = sum2;
// console.log(x);


// everything except "",false,undefined and 0 is true in javascript

// if (undefined) {
//     console.log("a")
// } else {
//     console.log("b");
// }

// default values 
sum(10,20,40);  // here the 40 won't be considered 

//if arguments
// sum(20)
// it will be passed as sum(20, undefined)

//there are methods to solve this using default values 

// function sum1(a=0, b=0) {
//     console.log(a + b);
// }

function sum1(a, b) {
    // if (b==undefined) {
    //     b=0
    // } 
    b = b || 0;
    console.log(a+b);
}
sum1(20)