//An anagram is a word made by rearranging the letters of another word.
function breAnagram(str1, str2) {
  const sortstr1 = str1.split("").sort().join("");
  const sortstr2 = str2.split("").sort().join("");
  if (sortstr1 === sortstr2) {
    console.log("Both are anagram");
  } else {
    console.log("Both are not anagram");
  }
}
breAnagram("listen", "silent");
//or
function areAnagram(str1, str2) {
  const sortstr1 = str1.split("").sort().join("");
  const sortstr2 = str2.split("").sort().join("");
  return sortstr1 === sortstr2;
}
const res = areAnagram("listen", "silent");
console.log(res);


//OR
function breAnagram(str1, str2) {
  // Convert both strings to lowercase before splitting, sorting, and joining
  const sortstr1 = str1.toLowerCase().split("").sort().join("");
  const sortstr2 = str2.toLowerCase().split("").sort().join("");

  if (sortstr1 === sortstr2) {
    console.log("Both are anagram");
  } else {
    console.log("Both are not anagram");
  }
}

// Get user input using prompt
const input1 = prompt("Enter the first string: ");
const input2 = prompt("Enter the second string: ");

// Call the function with user inputs
breAnagram(input1, input2);

//for loop
function areAnagram(str1, str2) {
  // Check if lengths are equal
  let n1 = str1.length;
  let n2 = str2.length;
  if (n1 !== n2) {
      return false;
  }

  // Sort both arrays
  str1.sort();
  str2.sort();

  // Compare sorted arrays
  for (let i = 0; i < n1; i++) {
      if (str1[i] !== str2[i]) {
          return false;
      }
  }

  return true;
}

// Input arrays
let str1 = ['g', 'r', 'a', 'm'];
let str2 = ['a', 'r', 'm', 'g'];

// Function Call
if (areAnagram(str1, str2)) {
  document.write("The two strings are anagrams of each other<br>");
} else {
  document.write("The two strings are not anagrams of each other<br>");
}
