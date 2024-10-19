const str = "hello";
const newstr = str.charAt(0).toUpperCase() + str.slice(1);
console.log(newstr);//Hello
//or
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const inputString = prompt("Enter string :");
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString); // Output: "Hello"
//or
const str1= "hello";
const newstr1 = str1.slice(0,1).toUpperCase() + str1.slice(1);
console.log(newstr1); // Output: HeLlo

//1st 3 letter
const str2 = "hello";
const newstr2 = str2.slice(0, 3).toUpperCase() + str2.slice(3);
console.log(newstr2);//HELlo

//using for loop

const str3 = "hello";
let newstr3 = ""; // Initialize an empty string

for (let i = 0; i < str3.length; i++) {
    if (i === 0) {
        // Capitalize the first letter
        newstr3 += str3.charAt(i).toUpperCase();
    } else {
        // Add the rest of the characters as they are
        newstr3 += str3.charAt(i);
    }
}

console.log(newstr3); // Output: Hello

//3letter
const str4 = "hello";
let newstr4 = ""; // Initialize an empty string

for (let i = 0; i < str4.length; i++) {
    if (i < 3) {
        // Capitalize the first three letters
        newstr4 += str4.charAt(i).toUpperCase();
    } else {
        // Add the rest of the characters as they are
        newstr4 += str4.charAt(i);
    }
}

console.log(newstr4); // Output: HELlo

