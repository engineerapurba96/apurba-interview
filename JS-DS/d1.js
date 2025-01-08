let arr = [1, 2, 4, 1];
let userInput = parseInt(prompt("Enter Value"));
let result = arr.filter(item => item !== userInput);
console.log(result);
