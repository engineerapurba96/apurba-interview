const operator = prompt("Enter +,-,* ,/ :");
const num1= parseFloat(prompt("Enter num1 :"));
const num2= parseFloat(prompt("Enter num2 :"));
if(operator == "+"){
    result= num1+num2;
}else if(operator == "-"){
    result= num1-num2;
}else if(operator == "*"){
    result= num1*num2;
}else{
    result = num1/num2;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);
//or
function calculate(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}

const operator = prompt("Enter +, -, *, /: ");
const num1 = parseInt(prompt("Enter num1: "));
const num2 = parseInt(prompt("Enter num2: "));

const result = calculate(operator, num1, num2);
console.log(`${num1} ${operator} ${num2} = ${result}`);
