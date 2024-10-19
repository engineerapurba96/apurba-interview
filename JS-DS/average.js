const num = [1, 9, 6, 4];

const sum = num.reduce((acc, cur) => acc + cur, 0);
const average = sum / num.length; // Calculate the average by dividing the sum by the number of elements

console.log("Sum:", sum);
console.log("Average:", average);


//for loop
const num1 = [1, 9, 6, 4];

let sum1 = 0; // Initialize sum to 0

// Use a for loop to iterate through each element
for (let i = 0; i < num1.length; i++) {
    sum1 += num1[i]; // Add each element to the sum
}

// Calculate the average
const average1 = sum / num.length;

console.log("Sum:", sum1);      // Output: Sum: 20
console.log("Average:", average1); // Output: Average: 5
