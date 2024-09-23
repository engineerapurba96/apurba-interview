function intersection(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return [...new Set(result)];
}
const array1 = [1, 2, 3, 4, 3, 4];
const array2 = [3, 4, 5, 6];

console.log(intersection(array1, array2)); // Output: [3, 4]
