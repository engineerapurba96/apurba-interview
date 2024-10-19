//prime true false
function prime(n){
    if(n<=1){
        return false;
    }
    let isPrime=true;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            isPrime=false;
            break; // Added break statement
        }
    }
    return isPrime;
}
let result = prime(8);
console.log(result); // Output: false

//or
function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself, it's not prime
        }
    }
    return true; // If num is not divisible by any number other than 1 and itself, it's prime
}

// Example: Check if a number entered by the user is prime
const number = parseInt(prompt("Enter a number:"));
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
