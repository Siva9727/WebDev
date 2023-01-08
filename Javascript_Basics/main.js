// console.log("hello world")
// console.log("hello to web dev")
// //single line comment in js
// /* multi line 
// comments in js */
// console.log(5+6)
// // declare variables in js
// var fname ="siva";
// console.log(fname);
// var first_name = prompt('enter your name?')
// console.log(first_name);
// var age = prompt('enter your age?');
// var result = age > 18;
// if (result) {
//     alert('eligible')
// } else {
//     alert('not eligible')
// }
// var i = 0;
// while (i<4) {
//     console.log(i);
//     i++;
// }

function print() {
    console.log("hello, world!");
}
print();
//parameterized function
function x(number) {
    console.log(number);
}
x(88);
function multi(a,b) {
    return a*b;
}
var result = multi(5,4);
console.log(result);

//function expression
var showMessage = function() {
    console.log("hi");
}
showMessage();
console.log(showMessage);
console.log(typeof showMessage);

//type conversion and cohersion 
//cohersion : js automatically converts the data type
//conversion: if it is done manually (like typecast in JAVA)
let xx = 10;
let y = '20';
console.log(xx+y); // xx is automatically converted as string 
console.log(y-xx); // automatically converted to integer 

console.log(xx+y);
Number(y);// conversion 
console.log(typeof Number(y));

//Arrays in js
let arr=[1,23,4,5];
console.log(arr);
// arr.push("siva");
// console.log(arr);

//objects in js(Just like class in JAVA)
let obj = {
    //properties
    name:"abc",
    age:26,
    //methods 
    study: function(){
        console.log("hi");
    }
}

console.log(obj.age);
obj.study();
