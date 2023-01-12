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