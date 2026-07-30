var x = 1;

function test() {
  console.log(x);
}

test(); //1

// No:2

var x = 1;
function test() {
  console.log(x);
  var x = 2;
}
test(); //undefined   bcz here local scope has highest priority var x  // undefined (hoisted)

// No:2

const [a = 1] = [];
const { b = 2 } = { b: undefined };
const { c = 2 } = { c: null };

console.log(a, b, c); //1 2 null
// Array Destructuring
const [a = 1] = [];

// [] is an empty array.
// JavaScript looks for the first element.
// First element doesn't exist, so it gets undefined.
// Since the value is undefined, the default value (1) is used.

console.log(a); // 1

// Object Destructuring with undefined
const { b = 2 } = { b: undefined };

// Property b exists, but its value is undefined.
// Default values are used when the value is undefined.

console.log(b); // 2

// Object Destructuring with null
const { c = 2 } = { c: null };

// Property c exists and its value is null.
// null is an actual value (not undefined).
// Therefore, the default value is NOT used.

console.log(c); // null

// Final Output
console.log(a, b, c); // 1 2 null

// No3 flattned Array
const arr = [1, 2, [3, 4, [5]]];
const flattened = arr.flat(Infinity);
console.log(flattened); // [1, 2, 3, 4, 5]
//or

const arr = [1, 2, [3, 4, [5]]];

function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
}
console.log(flattenArray(arr)); // [1, 2, 3, 4, 5]

//recursion

function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
const arr = [1, [2, [3, [4, 5]]]];
console.log(flatten(arr));
