// splice() is an array method used to add, remove, or replace elements in an array by modifying the original array.

// array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex → where changes begin
// deleteCount → how many elements to remove
// item1, item2... → elements to add (optional)

// 🔹 splice() Explanation - Step by Step

// =====================
// Example 1
// =====================
const arr1 = [1, 2, 3, 4];

// splice(startIndex, deleteCount)
arr1.splice(1, 2);

console.log(arr1); // [1, 4]

// 👉 Explanation:
// Index:   0   1   2   3
// Array:  [1,  2,  3,  4]
//
// Start at index 1 → value = 2
// Delete 2 elements → (2, 3)
//
// Remaining array → [1, 4]

// 👉 Removed elements:
const arr1_test = [1, 2, 3, 4];
const removed = arr1_test.splice(1, 2);
console.log(removed); // [2, 3]

// =====================
// Example 2
// =====================
const arr2 = [1, 2, 3];

// splice(startIndex, deleteCount, newItem)
arr2.splice(1, 1, 100);

console.log(arr2); // [1, 100, 3]

// 👉 Explanation:
// Index:   0   1   2
// Array:  [1,  2,  3]
//
// Start at index 1 → value = 2
// Delete 1 element → (2)
// Insert 100 at same position
//
// Result → [1, 100, 3]

// =====================
// Quick Rule
// =====================
// splice(start, delete, addItems)
//
// 👉 "Start here → remove this many → add these (optional)"

// 🔥 slice() vs splice() — Complete Difference

// =======================
// 🔹 slice()
// =======================
// 👉 Used to EXTRACT part of array/string
// 👉 Does NOT change original

const arr1 = [1, 2, 3, 4];

const result1 = arr1.slice(1, 3);

console.log(result1); // [2, 3]
console.log(arr1); // [1, 2, 3, 4] (unchanged)

// =======================
// 🔹 splice()
// =======================
// 👉 Used to ADD / REMOVE / REPLACE
// 👉 CHANGES original array

const arr2 = [1, 2, 3, 4];

const result2 = arr2.splice(1, 2);

console.log(result2); // [2, 3] (removed elements)
console.log(arr2); // [1, 4] (modified)

// =======================
// 🔹 Key Differences
// =======================

/*
slice():
- Does NOT modify original
- Returns selected part
- Works on array + string
- Syntax: slice(start, end)

splice():
- Modifies original array
- Returns removed elements
- Works ONLY on array
- Syntax: splice(start, deleteCount, items)
*/

// =======================
// 🔹 Easy Trick to Remember
// =======================

// 👉 slice = "cut and COPY"
// 👉 splice = "cut and CHANGE"

// =======================
// 🔹 Example Together
// =======================

const arr3 = [10, 20, 30, 40];

// slice → no change
console.log(arr3.slice(1, 3)); // [20, 30]
console.log(arr3); // [10, 20, 30, 40]

// splice → modifies
arr3.splice(1, 2);
console.log(arr3); // [10, 40]
