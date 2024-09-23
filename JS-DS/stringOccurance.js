function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

// Example usage:
const inputString = "hello";
const characterToCount = "l";

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
