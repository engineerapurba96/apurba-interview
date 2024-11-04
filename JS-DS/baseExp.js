
//Base and power:(2,3)=2*2*2=8
console.log("2^3:", Math.pow(2, 3)); // Output: 8
console.log("5^4:", Math.pow(5, 4)); // Output: 625

//or
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

console.log("calculatePower(2, 3):", calculatePower(2, 3)); // Output: 8
console.log("calculatePower(5, 4):", calculatePower(5, 4)); // Output: 625

//or

function calculatePower(base, exponent) {
    // Check if base and exponent and positive integers
    let result = 1;
    for(let i = 1; i <= exponent; i++) {
        result = result * base;
        console.log(result);
    }

    return result;
}

console.log("calculatePower(2, 3)", calculatePower(2, 3));
console.log("calculatePower(5, 4)", calculatePower(5, 4));