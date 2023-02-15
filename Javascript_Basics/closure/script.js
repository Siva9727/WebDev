//define closures in js?
// function along with the lexical scope bundled together is known as closure

// function x(){
//     var a = 5;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// x();

function x(){
    var a = 5;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
    //if we change a here 
    

}

var z = x();
console.log(z);
z();// 100 