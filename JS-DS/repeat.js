const str = "swiss";

for (let ch of str) {
    // indexOf() gives the first occurrence index
    // lastIndexOf() gives the last occurrence index
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
        console.log(ch); // First non-repeating character
        break;           // Stop after finding the first one
    }
}

// | Character | indexOf() | lastIndexOf() | Condition |
// | --------- | --------- | ------------- | --------- |
// | s         | 0         | 4             | false     |
// | w         | 1         | 1             | true ✅    |


///first repeating char
function firstRepeatingChar(text) {
    const chars = new Set();

    for (const char of text) {
        if (chars.has(char)) {
            return char;
        }
        chars.add(char);
    }

    return null;
}
console.log(firstRepeatingChar("success")); // c
console.log(firstRepeatingChar("swiss"));   // s
console.log(firstRepeatingChar("abcd"));    // null

//or
const str = "success";
const chars = new Set();

for (const char of str) {
    if (chars.has(char)) {
        console.log(char); // c
        break;
    }
    chars.add(char);
}