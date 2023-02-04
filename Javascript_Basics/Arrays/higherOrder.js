
// a higher-order function is a function that takes one or more functions as arguments, and/or returns a function as its result.
function sum(a,b) {
    return a+b;
}

function higherOrder(fun,a,b) {
    return sum(a,b);
}

let ans = higherOrder(sum,10,20)
console.log(ans);
// important topic