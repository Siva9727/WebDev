let paragraph = document.getElementById("para");
console.log(paragraph);
//to get text 
console.log(paragraph.textContent);

document.querySelector("h1")// second method using query selector

// third method 
document.querySelectorAll("h1")
let element = document.getElementsByTagName('h1');
console.log(paragraph.innerHTML);
paragraph.innerHTML='changed using innerHTML';
paragraph.innerText='changed using innerText';
