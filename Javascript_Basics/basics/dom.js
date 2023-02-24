// let paragraph = document.getElementById("para");

// console.log(paragraph);
// //to get text 
// console.log(paragraph.textContent);

// document.querySelector("h1")// second method using query selector

// // third method 
// document.querySelectorAll("h1")
// let element = document.getElementsByTagName('h1');
// console.log(paragraph.innerHTML);
// paragraph.innerHTML='changed using innerHTML';
// paragraph.innerText='changed using innerText';

//ternary operator 
// let age = 19;
// let a  = age>18 ? "You can drive" : "You cannot drive" 
// console.log(a)


let n = Number(document.getElementById('number').textContent);


let add = document.getElementById('add')
let one = document.getElementById('dec')

let sum = n;

add.addEventListener('click', addNum)

function addNum(){
    sum++;
    document.getElementById('number').innerHTML = sum;
}

one.addEventListener('click', () => {
    sum--;
    document.getElementById('number').innerHTML = sum;
})

