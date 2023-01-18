// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// no name function, we can call this function by immediately invoking this function
// with arguments
(function (a,b) {
    console.log(a+b);
})(20,30);

// without arguments 
(function(){
    console.log("hello");
})();

// return 
let ans = (function(a,b){
    return a*b;
})(5,4);

console.log(ans)