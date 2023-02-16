// function x(){
//     let a = 5;
//     setTimeout(() => {
//         console.log(a)
//     }, 5000);
//     console.log("hello ")
// }

// x();

//here first hello will be printed and then a will be printed


// function example() {
//     var x = 1;
//     let y = 2;
//     const z = 3;

//     if (true) {
//       var x = 4; // var is global scope and function scope 
//       let y = 5;
//       const z = 6;
//       // let and const are block scope 
//       console.log(x, y, z); // output: 4 5 6
//     }

//     console.log(x, y, z); // output: 4 2 3
//   }

//   example();

// write a function to print 1 to 5  after 1 to 5 seconds

// function print() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000 * i)
//     }
// }
// print();
// it will print 6 6 6 6 6 since var is function scope 

// to solve the above problem , use closure 
function print3() {
    for (var i = 1; i <= 5; i++) {

        function closure(x) {
            setTimeout(() => {
                console.log(x)
            }, 1000 * x)
        }
        
        closure(i);

    }
}
print3();


// function print1(){
//     for(let i=1; i<=5; i++){
//         setTimeout(() => {
//             console.log(i)
//         },1000*i)
//     }
// }
// print1(); // 1 2 3 4 5