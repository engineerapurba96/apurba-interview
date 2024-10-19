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

 //or
 function uniqueElements(arr1, arr2) {
  // Remove duplicates from both arrays
  const uniqueArr1 = [...new Set(arr1)];
  const uniqueArr2 = [...new Set(arr2)];
  
  // Find elements that are in uniqueArr1 but not in uniqueArr2
  const onlyInArr1 = uniqueArr1.filter(el => !uniqueArr2.includes(el));
  
  // Find elements that are in uniqueArr2 but not in uniqueArr1
  const onlyInArr2 = uniqueArr2.filter(el => !uniqueArr1.includes(el));
  
  // Combine the two results
  return [...onlyInArr1, ...onlyInArr2];
}

const arra1 = [1, 2, 3, 4, 3, 4];
const arra2 = [3, 4, 5, 6];

console.log(uniqueElements(array, arra2)); // Output: [1, 2, 5, 6]
