function arraysAreEqual(arr1, arr2) {
    // Check if the lengths are different
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    // Check if each element is equal
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    // If all elements are equal, return true
    return true;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(arraysAreEqual(array1, array2)); // Output: true
console.log(arraysAreEqual(array1, array3)); // Output: false
//or
function arraysAreEqual(arr1, arr2) {
    return arr1.toString() === arr2.toString();
}

// Example usage:
const arra = [1, 2, 3];
const array = [1, 2, 8];


console.log(arraysAreEqual(arra, array)); // Output: true
