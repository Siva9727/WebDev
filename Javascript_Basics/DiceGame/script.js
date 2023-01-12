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


//addEventListener
// btns1.addEventListener("click", () => { rollDice("hi") }) 
//rollDice is a callback, that means somewhere there is a function called rollDice.

// function rollDice() {
//     console.log("button clicked");
// }

// function rollDice(x) {
//     console.log(x);
//     console.log("button clicked");
// }
// two ways you can pass the fuction, one by passing the function name only{ here , rollDice not like rollDice}, 
//2. in order to provide the argument use the anonymous function

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => { rollDice(btns[i].id) })

}
/* We are only assigning the addEventListener using the for loop to all the buttons. But the addEventListner will only activate when the disred event is happened*/


function rollDice(btn_id) {
//to disable the multiple clicking
btns[btn_id].disabled = true;



    // console.log(btn_id);
    //for random string
    // let a= ["dice1","dice2","dice3","dice4","dice5","dice6"]
    // let randomIndex = Math.floor(Math.random()*a.length);
    // let diceVal = a[randomIndex];
    // console.log(diceVal);

    let randomNumber = Math.floor(Math.random() * 6)+1;
    // console.log(randomNumber);
    score[btn_id].innerText = randomNumber;
}