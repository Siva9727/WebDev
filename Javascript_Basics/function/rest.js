// rest operator in function---> its accepting the value
// spread operator in array ---> its providing the value 

function sum(a, ...x) {
    console.log(a, x);
}
sum(10)
sum(10, 20)
sum(10, 20, 30, 40)