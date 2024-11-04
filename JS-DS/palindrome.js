function isPalindrome(str) {
    let newStr =  str.split('').reverse().join('');
    return str === newStr;
}

// Example usage:
console.log(isPalindrome("racecar"));//true
//or to remove space
function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    let newStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === newStr;
}

// Example usage:
console.log(isPalindrome("racec ar")); // true
console.log(isPalindrome("A man a plan a canal Panama")); // true


//for number
function isNumberPalindrome(num) {
    // Convert the number to a string
    let strNum = num.toString();
    
    // Reverse the string
    let reversedStrNum = strNum.split('').reverse().join('');
    
    // Compare the original string with the reversed string
    return strNum === reversedStrNum;
}

// Example usage:
console.log(isNumberPalindrome(121)); // true
console.log(isNumberPalindrome(123)); // false
console.log(isNumberPalindrome(12321)); // true
console.log(isNumberPalindrome(10)); // false


//using loop

function isPalindrome(inputString) {
    // Remove spaces and make the string lowercase for case-insensitive comparison
    inputString = inputString.replace(/\s+/g, '').toLowerCase();

    for (let i = 0; i < inputString.length / 2; i++) {
        if (inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("MaD AM")); // Output: true
