const userOperator = prompt("Enter +, -, *, /: ");
const firstNum = parseFloat(prompt("Enter num1: "));
const secondNum = parseFloat(prompt("Enter num2: "));

function calculate(operator, num1, num2) {
  let calcResult;
  switch (operator) {
    case "+":
      calcResult = num1 + num2;
      break;
    case "-":
      calcResult = num1 - num2;
      break;
    case "*":
      calcResult = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        calcResult = "Cannot divide by zero";
      } else {
        calcResult = num1 / num2;
      }
      break;
    default:
      calcResult = "Invalid operator";
  }
  return calcResult;
}

const finalResult = calculate(userOperator, firstNum, secondNum);
console.log(`${firstNum} ${userOperator} ${secondNum} = ${finalResult}`);
