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
