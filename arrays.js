//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//const colorCopy = faveColors.slice();
console.log(colorCopy); // Output: ['red', 'green', 'black']

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//const colorCopy = faveColors.slice();
colorCopy.push('pink');
console.log(colorCopy); // Output: ['red', 'green', 'black', 'pink']

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//const middleNums = numbers.slice (1, 4);
console.log(middleNums); // Output: [2, 3, 4]


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];
const answers = [];
for (let i = 0; o < bigOrSmallArray.length; i++)
if (bigOrSmallArray[i] > 100)
{answers.push('big');}
{answers.push('small');}
console.log(answers); // Output: ['small', 'small', 'small', 'small', 'big', 'small', 'big', 'big']
