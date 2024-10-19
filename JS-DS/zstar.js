function printStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

printStars(5);
//output
// *
// **
// ***
// ****
// *****

// Explanation
// Function Definition:

// function printStars(rows): This line defines a function named printStars that takes one parameter, rows. This parameter specifies how many rows of stars you want to print.
// Outer Loop:

// for (let i = 1; i <= rows; i++): This loop iterates from 1 to rows (in this case, 5). Each iteration of this loop corresponds to a single row of stars in the final output.
// The variable i keeps track of the current row number.
// Initializing the Stars String:

// let stars = '';: At the beginning of each outer loop iteration, this line initializes an empty string named stars. This string will hold the stars for the current row.
// Inner Loop:

// for (let j = 1; j <= i; j++): This loop iterates from 1 to i. The variable j is used to count how many stars to append to the stars string for the current row.
// The number of iterations of this inner loop increases with each outer loop iteration:
// When i = 1, the inner loop runs once (1 star).
// When i = 2, the inner loop runs twice (2 stars).
// When i = 3, the inner loop runs three times (3 stars), and so on.
// Building the Stars String:

// stars += '*';: Inside the inner loop, this line appends an asterisk (*) to the stars string for each iteration of the inner loop. This is how the pattern is built up row by row.
// Printing the Stars:

// console.log(stars);: After the inner loop completes (meaning all the stars for that particular row have been added), this line prints the stars string to the console.
// How It Works Together
// When you call printStars(5);, the function executes as follows:

// 1st Row (i = 1):

// Inner loop runs 1 time → stars becomes *.
// Print: *
// 2nd Row (i = 2):

// Inner loop runs 2 times → stars becomes **.
// Print: **
// 3rd Row (i = 3):

// Inner loop runs 3 times → stars becomes ***.
// Print: ***
// 4th Row (i = 4):

// Inner loop runs 4 times → stars becomes ****.
// Print: ****
// 5th Row (i = 5):

// Inner loop runs 5 times → stars becomes *****.
// Print: *****
// Final Output
// The result is a right-angled triangle of stars:



//revesre triangle
function printReverseStars(rows) {
    for (let i = rows; i >= 1; i--) { // Start from 'rows' and decrease to 1
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

// Call the function with the desired number of rows
printReverseStars(5);

// *****
// ****
// ***
// **
// *

//Triangle
//      *
//     ***
//    *****
//   *******
//  *********
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';

        // Add spaces before stars
        for (let j = 1; j <= rows - i; j++) {
            line += ' ';
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += '*';
        }

        console.log(line);
    }
}

// Call the function with the desired number of rows
printTriangle(5);

//reverse triangle
// *********
// *******
//  *****
//   ***
//    *
function printReverseTriangle(rows) {
    for (let i = rows; i >= 1; i--) {  // Start from the number of rows and decrease
        let line = '';

        // Add spaces before stars
        for (let j = 1; j <= rows - i; j++) {
            line += ' ';
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += '*';
        }

        console.log(line);
    }
}

// Call the function with the desired number of rows
printReverseTriangle(5);

    