const numm = [1, 9, 6, 4];
const sum = numm.reduce((acc, cur) => acc + cur, 0);

console.log("Sum:", sum);//20
//or
function sum(num) {
    let total = 0;
    for (let i = 0; i<num.length; i++) { 
        total = total + num[i];
    }
    return total;
}

const num = [1, 9, 6, 4];
const out = sum(num);
console.log(out); // Output: 20
