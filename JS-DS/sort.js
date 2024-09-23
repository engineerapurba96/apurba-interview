const arr = [3, 1, 7, 2, 5];

// Sorting the array in ascending order
arr.sort((a, b) => a - b);

console.log(arr); // Output: [1, 2, 3, 5, 7]

//or
function sortArrayAscending(arr) {
    // Sorting the array in place
    arr.sort((a, b) => a - b);
    return arr;
}

const arr = [3, 1, 7, 2, 5];
const sortedArray = sortArrayAscending(arr);

console.log(sortedArray); // Output: [1, 2, 3, 5, 7]
console.log(arr); // Output: [1, 2, 3, 5, 7] (Original array is sorted)
