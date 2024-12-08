const score = 400;
// Example of a simple number variable

const balance = new Number(100);
// Using `Number` object to create a number instance

// Convert number to string and check its length
// console.log(balance.toString()); // "100"
// console.log(balance.toString().length); // 3
// console.log(typeof balance.toString()); // "string"
// console.log(balance.toFixed(2)); // "100.00" - rounds to 2 decimal places

const otherNumber = 23.8966;
const otherNumber2 = 123.8966;
const otherNumber3 = 1123.8966;


// Precision examples
// console.log(otherNumber.toPrecision(3)); // "23.9"
// console.log(otherNumber2.toPrecision(3)); // "124"
// console.log(otherNumber2.toPrecision(4)); // "123.9"
// console.log(otherNumber3.toPrecision(3)); // "1.12e+3" - scientific notation for large numbers


const hundreds = 1000000;
// Format number with locale
// console.log(hundreds.toLocaleString()); // "1,000,000" (US format by default)
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (Indian format)



//------------------Math Examples-------------------//

// Math utility examples
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.2)); // 4
// console.log(Math.sqrt(4)); // 2
// console.log(Math.min(4, 3, 4, 56, 6, 2)); // 2
// console.log(Math.max(4, 3, 4, 56, 6, 2)); // 56



// Math.random() generates a random number between [0, 1]
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10
console.log(Math.random() * 10 + 1); // Random number between 1 and 11
console.log(Math.floor(Math.random() * 10 + 1)); // Random integer between 1 and 10

const min = 10;
const max = 20;



// Random number in a specific range
console.log(Math.random() * min); // Random number up to `min`
console.log(Math.random() * max); // Random number up to `max`


// Generate a random integer in the range [min, max]
console.log(Math.floor(Math.random() * (max - min + 1))); // May not include `min`
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Includes both `min` and `max`