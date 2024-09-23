const num = [1, 9, 6, 4];

const sum = num.reduce((acc, cur) => acc + cur, 0);
const average = sum / num.length; // Calculate the average by dividing the sum by the number of elements

console.log("Sum:", sum);
console.log("Average:", average);
