//An Armstrong number (also known as a narcissistic number, plenary number, or pluperfect number) is a number 
//that is equal to the sum of its own digits each raised to the power of the number of digits.
//For example, let's take the number 153:
//1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function isArmstrongNumber(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;

    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === number;
}

// Test the function
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(371)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(123)); // false
//or
var number = prompt("Please enter a number");
var temp = number;
var lengthOfDigit = number.toString().length;
var sum = 0;

while (temp > 0) {
    var digit = temp % 10;
    sum += digit ** lengthOfDigit;
    temp = parseInt(temp / 10);
}

if (sum == number) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}
