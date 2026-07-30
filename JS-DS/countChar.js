// # JavaScript: Find the Frequency of Each Character
let str = "jdjfjfjdjekwkkyeuejbdndje";
let count = {};

for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);
// ## Explanation

// ### 1. Why do we create an empty object?

// ```javascript
// let count = {};
// ```

// We need a place to store the result.

// The object stores data as **key : value** pairs.

// Example:

// ```javascript
// {
//   j: 8,
//   d: 5,
//   f: 2
// }
// ```

// - Key = Character (`j`, `d`, `f`)
// - Value = Frequency (`8`, `5`, `2`)

// ---

// ### 2. Why do we use an object instead of an array?

// Arrays store values using numeric indexes.

// Example:

// ```javascript
// let arr = [];
// arr[0] = "A";
// arr[1] = "B";
// ```

// But we want to store frequencies by character.

// ```javascript
// count["j"] = 8;
// count["d"] = 5;
// ```

// So an object is the correct choice.

// ---

// ### 3. What does this loop do?

// ```javascript
// for (let ch of str)
// ```

// It reads one character at a time.

// Example:

// ```
// j
// d
// j
// f
// j
// f
// ...
// ```

// Each character is stored in the variable `ch`.

// ---

// ### 4. What does this line mean?

// ```javascript
// count[ch] = (count[ch] || 0) + 1;
// ```

// It updates the frequency.

// ### First iteration

// ```javascript
// ch = "j"
// ```

// ```javascript
// count["j"]   // undefined
// ```

// Since `"j"` doesn't exist yet:

// ```javascript
// undefined || 0
// ```

// becomes

// ```javascript
// 0
// ```

// Then:

// ```javascript
// count["j"] = 0 + 1;
// ```

// Now:

// ```javascript
// {
//   j: 1
// }
// ```

// ---

// ### Second iteration

// ```javascript
// ch = "d"
// ```

// ```javascript
// count["d"] // undefined
// ```

// ```javascript
// count["d"] = 0 + 1;
// ```

// Now:

// ```javascript
// {
//   j: 1,
//   d: 1
// }
// ```

// ---

// ### Third iteration

// ```javascript
// ch = "j"
// ```

// ```javascript
// count["j"] // 1
// ```

// ```javascript
// count["j"] = 1 + 1;
// ```

// Now:

// ```javascript
// {
//   j: 2,
//   d: 1
// }
// ```

// The loop continues until every character is processed.

// ---

// ## Final Output

// ```javascript
// {
//   j: 8,
//   d: 5,
//   f: 2,
//   e: 4,
//   k: 3,
//   w: 1,
//   y: 1,
//   u: 1,
//   b: 1,
//   n: 1
// }
// ```

// ---

// ## Interview Questions

// ### Q1. Why use an object?

// **Answer:**
// An object stores data as **key-value pairs**. Here, the character is the key and its frequency is the value.

// ### Q2. What does `(count[ch] || 0)` mean?

// **Answer:**
// If the character already exists, use its current count. Otherwise, use `0`. Then add `1`.

// ### Q3. What is the time complexity?

// **Answer:** `O(n)` because we traverse the string only once.

// ### Q4. What is the space complexity?

// **Answer:** `O(k)`, where `k` is the number of unique characters.
