function isPalindrome(str) {
    let newStr =  str.split('').reverse().join('');
    return str === newStr;
}

// Example usage:
console.log(isPalindrome("racecar"));//true
