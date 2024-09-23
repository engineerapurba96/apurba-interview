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

