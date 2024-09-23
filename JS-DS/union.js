function union(arr1, arr2) {
    const unionSet = new Set([...arr1, ...arr2]);
    return [...unionSet];
}
const array1 = [1, 2, 3,3,3];
const array2 = [3, 4, 5];

console.log(union(array1, array2)); // Output: [1, 2, 3, 4, 5]
//or
const arr1=[1,4,6,8];
const arr2=[2,9,5,8];
const res =new Set(arr1.concat(arr2));
console.log([...res]);