const num = [1, 2, 3, 8, 9, 12, 16];

const evenNumbers = num.filter(num => num % 2 === 0);
const oddNumbers = num.filter(num => num % 2 !== 0);

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
//for loop 
const nums = [1, 2, 3, 8, 9, 12, 16];

const evenNumber = [];
const oddNumber = [];

// Loop through the array to categorize numbers
for (let i = 0; i < nums.length; i++) {
    if (num[i] % 2 === 0) {
        evenNumber.push(nums[i]); // Add to evenNumbers if even
    } else {
        oddNumber.push(nums[i]); // Add to oddNumbers if odd
    }
}

console.log("Even numbers:", evenNumber);
console.log("Odd numbers:", oddNumber);

//or
function odev(n) {
    return n % 2 === 0 ? "Even No" : "Odd";
}

// Get user input
const userInput = prompt("Enter a number:");
const number = parseInt(userInput); // Convert input to an integer

console.log(`You entered: ${number}, Result: ${odev(number)}`);
// Enter a number:6
// You entered: 6, Result: Even No

//0
function odev(n) {
    return n === 0 
        ? "Zero is neither even nor odd" 
        : (n % 2 === 0 ? "Even No" : "Odd");
}

// Get user input
const userInpu = prompt("Enter a number:");
const numbe = parseInt(userInpu); // Convert input to an integer

console.log(`You entered: ${numbe}, Result: ${odev(numb)}`);


//switch

function odev(n) {
    switch (n) {
        case 0:
            return "Zero is neither even nor odd"; // Handle the case for 0
        case 1:
            return "Odd"; // Handle the case for 1
        case 2:
            return "Even No"; // Handle the case for 2
        default:
            return n % 2 === 0 ? "Even No" : "Odd"; // Default case for all other numbers
    }
}

// Get user input
const userInp = prompt("Enter a number:");
const numb = parseInt(userInp); // Convert input to an integer

console.log(`You entered: ${numb}, Result: ${odev(numb)}`);


