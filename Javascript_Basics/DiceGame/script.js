// Access all the names
let playerName = document.getElementsByTagName("input");
//its the faster way using getElement method

//second way is using query selector. It's one of the powerful tool but a bit slower
let name = document.querySelector("input");
// select the first input tag-- return the element 
let nameAll = document.querySelectorAll("input");
// select all iput tag --  return answer in form an array 

// innerText, innerHTML
/*
InnerHTML --> returns the content in between the opening and closing tag.eg{h1}
*/
let btns = document.getElementsByClassName("players");
let score = document.getElementsByTagName("span");

//event--> any action on the website
//addEventListener  --> method to check whether an action is occured

let player1 = nameAll[0];
let btns1 = btns[0];
let score1 = score[0];

//addEventListener
btns1.addEventListener("click", () => { rollDice("hi") }) //rollDice is a callback, that means somewhere there is a function called rollDice.

// function rollDice() {
//     console.log("button clicked");
// }

function rollDice(x) {
    console.log(x);
    console.log("button clicked");
}
// two ways you can pass the fuction, one by passing the function name only{ here , rollDice not like rollDice}, 
//2. in order to provide the argument use the anonymous function