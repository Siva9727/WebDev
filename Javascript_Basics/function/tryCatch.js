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

// finally block will run either try or catch runs or not 
//its independent of try and catch block 
// while try and catch is like if-else. for every try block you have to write  catch block
// finally always work
finally{
    console.log("final ");
}

// catch block will only work if there is any error in try block 
