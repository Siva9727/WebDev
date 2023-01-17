function sum() {
    let a = 10 
    // let is block scope 
    var b = 20;
    // var is global scope except in function
    c=30 //its global variable, js will declare the variable automatically.
}

sum();
// console.log(d);
// console.log(a);
console.log(c);
d=50; // outside the function scope, it act as let 
console.log(d);

// hositing happens to var, functions with normal syntax, class

