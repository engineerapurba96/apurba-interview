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
const inputStrin = prompt("Enter String :");
const vowelsFoun = findVowels(inputStrin);
console.log("Vowels found in the string:", vowelsFoun);

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
const inputString1 = prompt("Enter String :");
const vowelsFound1 = findVowels(inputString1);
console.log("Vowels found in the string:", vowelsFound);


//vowel and consonant
function calcVowCons(str) {
    str = str.toLowerCase().replace(/\s+/g, ''); 
    const vows = "aeiou";
    let vowCount = 0;
    let consCount = 0;
    const vowList = [];
    const consList = [];

    for (let i = 0; i < str.length; i++) {
        if (vows.includes(str[i])) {
            vowCount++;
            vowList.push(str[i]);
        } else if (/^[a-z]$/.test(str[i])) {
            consCount++;
            consList.push(str[i]);
        } else {
            console.log(str[i], "is neither a vowel nor a consonant");
        }
    }

    return { 
        vowCount, 
        consCount,
        vowels: vowList,
        consonants: consList
    };
}

console.log(calcVowCons("Hello    World"));

