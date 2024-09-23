function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example:
const originalString = "World";
const reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString);
//or
let str = "vihan";
let output = str.split('').reverse().join('');
console.log(output);
//or
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let str1 = "vihan";
let output1 = reverseString(str1);
console.log(output1); // Output: nahiv
