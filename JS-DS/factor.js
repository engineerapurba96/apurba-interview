function findFactors(n) {
  const factors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

// Example usage:
const n = 12;
const factors = findFactors(n);
console.log(`Factors of ${n}:`, factors); //Factors of 12: [ 1, 2, 3, 4, 6, 12 ]
