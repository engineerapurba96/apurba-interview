let str = prompt("Enter string:").toLowerCase(); // Convert input to lowercase

// Check if the input string is a vowel
if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
    console.log(`${str} is a vowel`);
} else {
    console.log(`${str} is not a vowel`);
}

//or
function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
        }
    }
    return foundVowels;
}

// Example: Find vowels in a string
const inputString = prompt("Enter String :");
const vowelsFound = findVowels(inputString);
console.log("Vowels found in the string:", vowelsFound);

//count
function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];
    var count=0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example: Find vowels in a string
const inputString = prompt("Enter String :");
const vowelsFound = findVowels(inputString);
console.log("Vowels found in the string:", vowelsFound);

//for both
function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];
    let count=0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
            count++;
        }
    }

    return {foundVowels,count};
}

// Example: Find vowels in a string
const inputString = prompt("Enter String :");
const vowelsFound = findVowels(inputString);
console.log("Vowels found in the string:", vowelsFound);