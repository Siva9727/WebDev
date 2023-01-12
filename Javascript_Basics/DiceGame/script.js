// Access all the names
let playerName = document.getElementsByTagName("input");
//its the faster way using getElement method

//second way is using query selector. It's one of the powerful tool but a bit slower
let name = document.querySelector("input");  // select the first input tag
let nameAll = document.querySelectorAll("input"); // select all iput tag