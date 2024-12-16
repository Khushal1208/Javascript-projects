const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

function a() {
    console.log("a was called");
    return undefined;
  }
  function b() {
    console.log("b was called");
    return false;
  }
  function c() {
    console.log("c was called");
    return "foo";
  }
  
  console.log(a() ?? c());
  // Logs "a was called" then "c was called" and then "foo"
  // as a() returned undefined so both expressions are evaluated
  
  console.log(b() ?? c());
  // Logs "b was called" then "false"
  // as b() returned false (and not null or undefined), the right
  // hand side expression was not evaluated
  




// Terniary Operator

// condition ? exprIfTrue : exprIfFalse

// condition
// An expression whose value is used as a condition.

// exprIfTrue
// An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).

// exprIfFalse
// An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).



const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// Conditional chains
// The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:

function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

//  this is equilvalent to the following if..else chain