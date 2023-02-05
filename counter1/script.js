
let number = document.getElementById('number');
let add = document.getElementById('add')
let decrease = document.getElementById('decrease')


let num = Number(number.innerHTML); // it will give us the number

add.addEventListener('click', numAdd)
// this function is for the + button
function numAdd(){
    num++;
    number.innerHTML = num;
}


// for decrease 
decrease.addEventListener('click',decreaseNum)

function decreaseNum(){
    num--;
    number.innerHTML = num;
}

// console.log(a)

// let a = 10;

// function sum(a, ...b){
//     console.log(a,b)
// }

// sum(10,20,30,40)

// let a = (a,b) => {
//     console.log(a,b)
// }

// function accioJob() {
//     console.log("AccioJob");
//   }

//   function paramExec(callback, x) {
//     // complete the function
//     setTimeout(callback(),1000*x)

//   paramExec(accioJob, 5);