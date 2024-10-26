let stringWithWhiteSpace = "   Hello   World   ";
let stringWithoutWhiteSpace = stringWithWhiteSpace.replace(/\s/g, '');
console.log(stringWithoutWhiteSpace); // Output: "HelloWorld"
//or

// let str = "   Hello   World   ";
// let res = str.trim().replace(/\s+/g, ' ');
// console.log(res);Hello World
// When you use \s, it matches only one whitespace character at a time, 
// whereas \s+ matches one or more consecutive whitespace characters.

//or
function removeWhiteSpaceFromArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/\s/g, '');
    }
    return array;
}

let array = ["   Hello   ", "   World   ", "   "];
let newArray = removeWhiteSpaceFromArray(array);
console.log(newArray); // Output: ["Hello", "World", ""]

//or
let arra = ["   Hello   ", "   World   ", "   "];
let newArra = arra.map(item => item.replace(/\s/g, ''));
console.log(newArra); // Output: ["Hello", "World", ""]


//replace space with @
const str = "HI good morning";
const replacedStr = str.replace(/\s/g, "@");
console.log(replacedStr);

//without builtin
const str1 = "HI good morning";
let replacedStr1 = "";

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === " ") {
        replacedStr1 += "@";
    } else {
        replacedStr1 += str1[i];
    }
}
console.log(replacedStr1);//HI@good@morning


//remove space
let str3 = "hi good morning";
let newStr = str3.replace(/\s/g, "");
console.log(newStr); // Output: higoodmorning
