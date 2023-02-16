function x(){
    var a = 5;
    setTimeout(() => {
        console.log(a)
    }, 5000);
    console.log("hello ")
}

x();

//here first hello will be printed and then a will be printed
