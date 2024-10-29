
function sumDigit(n) {
    if (n < 1) {
        throw new Error("Number must be positive");
    }

    // Convert the number to a string and split into an array of characters
    const num = n.toString().split('');
    
    console.log(num); // This will log the array of digits as strings

    let sum = 0;
    // Iterate over each digit, convert it to an integer, and add to sum
    num.forEach(res => {
        sum += parseInt(res);
    });
    
    return sum;
}

console.log(sumDigit(33432)); // Output: 15

//or
function calculateSumOfDigits2(inputNumber) { 

    let number = inputNumber;
    let sumOfDigits = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        number = Math.floor(number / 10);
        sumOfDigits = sumOfDigits + lastDigit;
        // 456
        // 45
        // 4
        // 0
    }
    
    return sumOfDigits;
}
console.log("calculateSumOfDigits2");
console.log('calculateSumOfDigits2(12)', calculateSumOfDigits2(12));
console.log('calculateSumOfDigits2(23)', calculateSumOfDigits2(23));
console.log('calculateSumOfDigits2(456)', calculateSumOfDigits2(456));
