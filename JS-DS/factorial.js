function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if(n < 0){
        return undefined;
    }
    else {
        return n * factorial(n - 1);
    }
} 

let result = factorial(5);
console.log(`Factorial result: ${result}`);


//or

const num = prompt("Please enter number:");
let fact =1;
if (num<0){
    console.log(`factorial of ${num} is not possible`);
    
}else if(num === 0 || num === 1){
     console.log(`factorial of ${num} is  1`);
}
else{
    for(let i=2;i<=num;i++){
        fact = fact*i;
    }
    console.log(`factorial of ${num} is ${fact}`);
    
}

//or
function factorial(n){
    if(n<0){
        return undefined;
    }else if(n===0 || n===1){
        return 1;
    }else {
        return n*factorial(n-1);
    }
}
let n = parseInt(prompt("Enter a number"));
const res = factorial(n);
if(res === undefined){
    console.log("Negative number factorial is impossible");
}else{
    console.log("Factorial of number is :", res);
}