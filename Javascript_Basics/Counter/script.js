function increment() {
    //read the document
    let a = document.getElementsByTagName('span')[0];
    //read the number
    let value = a.innerHTML;
    //increment the value 
    ++value;
    //update the value 
    a.innerHTML = value;
}
//for input tag 
function add() {
    let count = document.getElementsByTagName('input')[0];
    let v = count.value;
    ++v;
    count.value = v;
}
let a = document.createElement('div');
a.innerHTML='created div using js create element method';
document.body.append(a);