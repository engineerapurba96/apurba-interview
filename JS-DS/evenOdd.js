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
