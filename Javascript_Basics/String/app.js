
let myString = "Hello, World";
// // convert lowercase
// let a = myString.toLowerCase();
// // to convert given string to upper case
// let b = myString.toUpperCase();


let myStringUpper = myString.toUpperCase(); // "HELLO, WORLD!"
let myStringLower = myString.toLowerCase(); // "hello, world!"
let myStringSub = myString.substring(0, 5); // "Hello"
let myStringReplace = myString.replace("World", "Universe"); // "Hello, Universe!"

/*
.slice(beginIndex, endIndex) : This method returns a new string containing the extracted portion of the given string.
 Similar to .substring(), but it can also handle negative indices. 
*/
let sliceString = myString.slice(7,13); // "World!"