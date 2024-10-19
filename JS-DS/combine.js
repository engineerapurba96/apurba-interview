function combineString(str1, str2) {
    let res = "";
    for (let i = 0; i < str1.length || i < str2.length; i++) {
        if (i < str1.length) {
            res += str1.charAt(i);
        }
        if (i < str2.length) {
            res += str2.charAt(i);
        }
    }
    return res;
}

let a = "abcdefg";
let b = "1234";
console.log(combineString(a, b)); // Output: "a1b2c3d4efg"

//or
function combineString(str1, str2) {
    let res = "";
    const maxLength = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) {
            res += str1[i];
        }
        if (i < str2.length) {
            res += str2[i];
        }
    }
    
    return res;
}

const x = "abcdefg";
const y = "1234";
console.log(combineString(x, y)); // Output: "a1b2c3d4efg"

//without function
const str1 = "abcdefg";
const str2 = "1234";
let res = "";
const maxLength = Math.max(str1.length, str2.length);

for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {
        res += str1[i];
    }
    if (i < str2.length) {
        res += str2[i];
    }
}

console.log(res); // Output: "a1b2c3d4efg"

