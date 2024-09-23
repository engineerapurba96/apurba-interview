let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) { 
    let temp = a + b; // Calculate the next Fibonacci number
    a = b; // Update 'a' to the next Fibonacci number
    b = temp; // Update 'b' to the next Fibonacci number
    console.log(temp);
}

//or
const n = 10; // Change this to generate Fibonacci sequence up to a different number of terms
const sequence = [0, 1];

// Generate Fibonacci numbers
for (let i = 2; i < n; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
}

console.log("Fibonacci sequence:", sequence);
