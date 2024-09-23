const arr = [1, 2, 3, 4, 5, 6, 7, 10];
const maxNum = Math.max(...arr); // Find the maximum number in the array
const minNum = Math.min(...arr); // Find the minimum number in the array

for (let i = minNum; i <= maxNum; i++) {
    if (!arr.includes(i)) {
        console.log(`Missing value: ${i}`);
    }
}
//(or)
function findMissingValues(arr) {
    const maxNum = Math.max(...arr); // Find the maximum number in the array
    const minNum = Math.min(...arr); // Find the minimum number in the array
    const missingValues = [];

    for (let i = minNum; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            missingValues.push(i);
        }
    }

    return missingValues;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 10];
const missingValues = findMissingValues(arr1);
console.log("Missing values:", missingValues);
//or
const arrr = [1,2,3,4,5,8,9];
const min = Math.min(...arrr);
const max = Math.max(...arrr);
// console.log(min);
// console.log(max);

for(let i=min;i<=max;i++){
    if(!arrr.includes(i)){
         console.log(i);
        
    }
 
}
