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

//for loop
function calculateFactorial(inputNumber) {

    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero");
    }
    let result = 1;
    for(let i = 1; i <= inputNumber; i++) {
        result *= i
    }
    return result;
}
console.log(calculateFactorial(4));
console.log("3!", calculateFactorial(3));
console.log("10!", calculateFactorial(10));
console.log("0!", calculateFactorial(0));
console.log("1!", calculateFactorial(1));

//or
function calculateFactorial(inputNumber) {

    if(inputNumber < 0) {
       return undefined;
    }else if(inputNumber === 0 || inputNumber ===1) {
      return 1;
    }
    let result = 1;
    for(let i = 2; i <= inputNumber; i++) {
        result *= i
    }
    return result;
}
console.log(calculateFactorial(-3));
