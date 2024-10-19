//Using Spread Operator:
const numbers = [5, 2, 9, 1, 7, 3];

const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);

console.log("Maximum value:", maxValue); // Output: 9
console.log("Minimum value:", minValue); // Output: 1


//Using Apply Method:
const numbers1 = [5, 2, 9, 1, 7, 3];

const maxValue1 = Math.max.apply(null, numbers);
const minValue1 = Math.min.apply(null, numbers);

console.log("Maximum value:", maxValue1); // Output: 9
console.log("Minimum value:", minValue1); // Output: 1

//Using reduce
const arr = [5, 2, 9, 1, 7, 3];
const maxArrayValue = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;

}, 0);
console.log(maxArrayValue);
//min
const arr4 = [5, 2, 9, 1, 7, 3];
const minArrayValue = arr4.reduce((min, curr) => {
    if (curr < min) {
        min = curr;
    }
    return min;
}, Infinity); // Start with Infinity as the initial value

console.log(minArrayValue); // Output: 1

//without buildin
function findMax(arr2) {
    let maxn = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (arr2[i] > maxn) {
            maxn = arr2[i];
        }
    }
    return maxn;

}
const arr2 = [2, 4, 5, 7, 8];
console.log(findMax(arr2));
//min

function findMin(arr) {
    let minn = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minn) {
            minn = arr[i];
        }
    }
    return minn;
}

const arr3 = [2, 4, 5, 7, 8];
console.log(findMin(arr3)); // Output: 2

