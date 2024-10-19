//  Print Numbers from 1 to 30 in a loop. In the loop, If the number is divisible by 3 , print - A If the number is divisible by 5 , print - B If the number is divisible by 15 , print - AB else print the number 
// 1
// 2
// A
// 4
// B
// A
// 7
// 8
// A
// B
// 11
// A
// 13
// 14
function numPrint() {
    for (let i = 1; i <= 30; i++) {
        if (i % 15 === 0) {
            console.log("AB");
        } else if (i % 3 === 0) {
            console.log("A");
        } else if (i % 5 === 0) {
            console.log("B");
        } else {
            console.log(i);
        }
    }
}

// Call the function to execute
numPrint();
