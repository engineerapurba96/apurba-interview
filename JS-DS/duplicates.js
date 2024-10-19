//How to find duplicate elements in a given array
function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

const myArray = [1, 2, 3, 4, 2, 5, 6, 3];
const duplicateValues = findDuplicates(myArray);
console.log(duplicateValues); // Output: [2, 3]


//or

// function findDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) !== index);
//     // or use arr.includes(value) !== index for modern JavaScript engines
//   }

//   const myArray = [1, 2, 3, 4, 2, 5, 6, 3];
//   const duplicateValues = findDuplicates(myArray);
//   console.log(duplicateValues); // Output: [2, 3]
const arr = [1, 5, 1, 5, 7];
const duplicates = arr.filter((item, index) => {
  return arr.indexOf(item) !== index;
});
console.log(duplicates);//[1,5]
// Example Breakdown
// Let’s see how it works for each element in the array [1, 5, 1, 5, 7]:

// Element 1 (Index 0):

// arr.indexOf(1) returns 0 (first occurrence index).
// Current index is 0.
// Since 0 === 0, this condition is false, meaning 1 is not considered a duplicate here.
// Element 5 (Index 1):

// arr.indexOf(5) returns 1 (first occurrence index).
// Current index is 1.
// Since 1 === 1, this condition is false, meaning 5 is not considered a duplicate here.
// Element 1 (Index 2):

// arr.indexOf(1) returns 0 (first occurrence index).
// Current index is 2.
// Since 0 !== 2, this condition is true, meaning 1 is a duplicate, so it gets added to the duplicates array.
// Element 5 (Index 3):

// arr.indexOf(5) returns 1 (first occurrence index).
// Current index is 3.
// Since 1 !== 3, this condition is true, meaning 5 is a duplicate, so it gets added to the duplicates array.
// Element 7 (Index 4):

// arr.indexOf(7) returns 4 (first occurrence index).
// Current index is 4.
// Since 4 === 4, this condition is false, meaning 7 is not considered a duplicate.

//To remove duplicates
const arr2 = [1, 2, 3, 4, 2, 5, 6, 3];
const uniqueArray = arr2.filter((item, index) => arr2.indexOf(item) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
//or
const arr3 = [1, 2, 3, 4, 2, 5, 6, 3];
const uniqueArrays = [...new Set(arr3)];
console.log(uniqueArrays); // Output: [1, 2, 3, 4, 5, 6]


//for string remove duplicates
// Step 1: Declare the string
let str1 = "My name is Apurba . Apurba is a cool name";

// Step 2: Split the string into an array of words
// The regex \s+ matches one or more whitespace characters
let wordsArray = str1.split(/\s+/);
// / and /: Indicates the start and end of the regex.
// \s: Represents any whitespace character.
// +: Means one or more occurrences.

// Step 3: Create a Set to store unique words
let uniqueWordsSet = new Set(wordsArray);

// Step 4: Convert the Set back to an array using the spread operator
let uniqueWordsArray = [...uniqueWordsSet];

// Step 5: Join the unique words back into a single string
let result1 = uniqueWordsArray.join(' ');

// Step 6: Output the result
console.log(result1); // Output: "My name is Apurba . a cool"

//or
let str = "My name is Apurba . Apurba is a cool name";

// Step 1: Split the string into an array of words
let words = str.split(/\s+/);

// Step 2: Create an empty array to store unique words
let uniqueWords = [];

// Step 3: Loop through each word in the words array
for (let i = 0; i < words.length; i++) {
    // Step 4: Check if the word is not already in the uniqueWords array
    if (!uniqueWords.includes(words[i])) {
        // If not, add it to the uniqueWords array
        uniqueWords.push(words[i]);
    }
}

// Step 5: Join the unique words back into a string
let result = uniqueWords.join(' ');

console.log(result); // Output: "My name is Apurba . cool"


