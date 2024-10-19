function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

// Example usage:
const inputString = "hello";
const characterToCount = "l";
// str.split(char):

// The split() method splits a string into an array of substrings based on the specified delimiter (in this case, the character char).
// For example, if the input string is "hello" and the character to count is "l", then:
// javascript
// Copy code
// "hello".split("l") // Result: ["he", "", "o"]
// The string "hello" is split at each occurrence of "l", resulting in an array with three elements: ["he", "", "o"].
// .length:

// The .length property returns the number of elements in the resulting array.
// In the example above, the array ["he", "", "o"] has a length of 3.
// Subtracting 1 (.length - 1):

// Since splitting the string creates one more element than the number of occurrences of the character, we subtract 1 to get the correct count.


console.log(countOccurrences(inputString, characterToCount)); // Output: 2
//or
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Example usage:
const inputString1 = "hello";
const characterToCount1 = "l";

console.log(countOccurrences(inputString1, characterToCount1)); // Output: 2
