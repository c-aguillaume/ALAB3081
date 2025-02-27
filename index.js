// The initial numbers that must be verified.
// const n1 = 30;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;
// console.log (n1 + n2 + n3 + n4 == 50);



// // // Check two: at least two odd numbers
// // // Here, we use modulus to check if something is odd.
// // // Since % 2 is 0 if even and 1 if odd, we can use
// // // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// The initial numbers that must be verified.
const n1 = 30;
const n2 = 15;
const n3 = 20;
const n4 = 5;


// Homewok

// Q1: Check if all numbers are divisible by 5. Cache the result in a variable.

const divisibleBy5 = (n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0);
console.log("Are all the numbers divisible by 5?\nResult: " + divisibleBy5);

// $ node index
// Are all the numbers divisible by 5?
// Result: true

// Q2:Check if the first number is larger than the last. Cache the result in a variable.

const firstNumLarger = (n1 > n4);
console.log("Is the first number larger than the last?\nResult: " + firstNumLarger);

// $ node index
// Is the first number larger than the last?
// Result: true

// Q3: Subtract the first number from the second number.

const subtractFirst = (n1 - n2);
console.log("What is the value of subtracting the first number from the second number?\nResult: " + subtractFirst)

// $ node index
// What is the value of subtracting the first number from the second number?
// Result: 15

// Q4: Multiply the result by the third number.

const multiplyFirstNum = (subtractFirst * n3);
console.log("What is the result when you multiply the result of the previous answer by the 3rd number?\nResult: " + multiplyFirstNum)

// What is the result when you multiply the result of the previous answer by the 3rd number
// Result: 300

// Q5: Find the remainder of dividing the result by the fourth number.

const remainderNum = (multiplyFirstNum % n4);
console.log("What is the remainder of dividing the result by the fourth number?\nResult: " + remainderNum)

// What is the remainder of dividing the result by the fourth number?
// Result: 0

// Q6: Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// const over25Final = (n1 > 25 || n2>)


// Part 2:

const totalMiles = 1500;
const fuelCost = 3;
const budget = 175;
const mph55 = 55;
const mph60 = 60;
const mph75 = 75;
const mpg30 = 30;
const mpg28 = 28;
const mpg23 = 23;

// Q1: How many gallons of fuel will you need for the entire trip?
   const milesPerGallon55 = (totalMiles / mpg30);
   console.log("Total Gallons needed at 55 miles per hour\nResult: " + milesPerGallon55 + " Gallons")

   const milesPerGallon60 = (totalMiles / mpg28);
   console.log("Total Gallons needed at 60 miles per hour\nResult: " + milesPerGallon60 + " Gallons")

   const milesPerGallon75 = (totalMiles / mpg23);
   console.log("Total Gallons needed at 75 miles per hour\nResult: " + milesPerGallon75 + " Gallons")

// Q2: Will your budget be enough to cover the fuel expense?


// Q3: How long will the trip take, in hours?
// Q4: Compare the results when traveling 55,60,75 mph. Which makes the most sense for the trip?