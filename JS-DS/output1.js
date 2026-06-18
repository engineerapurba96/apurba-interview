const arr = [1, 2, 3];

arr[10] = 11;

console.log(arr.length);//11
console.log(arr.filter(Boolean).length);
arr[10] = 11;
// [1, 2, 3, empty × 7, 11]
// arr.length
// is 11 because the highest index is 10, and length is highest index + 1.

// arr.filter(Boolean)
// "Give me only the elements that actually contain a value."
console.log(arr.filter(Boolean).length);//4