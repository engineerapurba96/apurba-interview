const num = [1, 2, 3, 8, 9, 12, 16];

const evenNumbers = num.filter(num => num % 2 === 0);
const oddNumbers = num.filter(num => num % 2 !== 0);

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
