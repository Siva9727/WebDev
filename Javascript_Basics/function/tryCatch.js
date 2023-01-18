// try and catch helps to find the error . It does not stop the program 


// let a = 10;
// let b
// console.log(c);

// you will get error at c since 'c' is not defined 

// you can solve this using try and catch 

try {
    let a = 10;
    let b
    console.log("Before error");
    console.log(c);
    console.log("After Error");

} catch (error) {
    console.log("Error Found");
}