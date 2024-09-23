//How to find duplicate elements in a given array
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
  
  const myArray = [1, 2, 3, 4, 2, 5, 6, 3];
  const duplicateValues = findDuplicates(myArray);
  console.log(duplicateValues); // Output: [2, 3]
  

//or

// function findDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) !== index);
//     // or use arr.includes(value) !== index for modern JavaScript engines
//   }
  
//   const myArray = [1, 2, 3, 4, 2, 5, 6, 3];
//   const duplicateValues = findDuplicates(myArray);
//   console.log(duplicateValues); // Output: [2, 3]
const arr=[1,5,1,5,7];
const duplicates=arr.filter((item,index)=>{
  return arr.indexOf(item)!==index;
});
console.log(duplicates);//[1,5]
//To remove duplicates
const arr2 = [1, 2, 3, 4, 2, 5, 6, 3];
const uniqueArray = arr2.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]


//for string
let str = "My name is Apurba . Apurba is a cool name";

// Split the string into an array of words
let words = str.split(/\s+/);

// Create a Set to store unique words
let uniqueWords = new Set();

// Filter out duplicate words
words.forEach(word => uniqueWords.add(word));

// Join the unique words back into a string
let result = [...uniqueWords].join(' ');

console.log(result);
