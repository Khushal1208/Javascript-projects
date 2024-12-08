//PRIMITIVE
const name = 'hitesh'
const repoCount = 50 
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
// String literals can be specified using single or double quotes, which are treated identically, or using the backtick character `. This last form specifies a template literal: with this form you can interpolate expressions


// console.log(name +  repoCount + " value")    //old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //modern way 


//NON PRIMITIVE
const string4 = new String("A String object");
const gameName = new String('hitechch')  //object //it is stored as key value pair // but it is string only


//eval on strings and strings object
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

// A String object can always be converted to its primitive counterpart with the valueOf() method
console.log(eval(s2.valueOf())); // returns the number 4


console.log(gameName) // [String: 'hitechch']
console.log(gameName[0])  // h
console.log(gameName.__proto__)  // {}

console.log(gameName.length )
console.log(gameName.toUpperCase()) //HITECHCH (original is not changed)
console.log(gameName) // [String: 'hitechch']



// CHARACTER ACCESS
"cat".charAt(1); // gives value "a"
"cat"[1]; // gives value "a"
// When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed.

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

// you can check methods in mdn docs pe check kar sakte hai 

const gameName1 = new String('hitech-ch') 
const newString = gameName1.substring(0,4) //0 is inclkuded and 4 is excluded 
// negative values are not allowed
console.log(newString) //hite

const anotherString = gameName1.slice(-8,4)
console.log(anotherString) //ite

const newStringOne = "    hitesh    "
console.log(newStringOne) //    hitesh    
console.log(newStringOne.trim())//hitesh

const url = "https.//hitesh.com/hitesh%20choudhary"
// browser dont support spaces in bettween
console.log(url.replace('%20' ,'-'))
//https.//hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) //true
console.log(url.includes('khushal')) //false

//split(seprator , limit)

console.log(gameName1.split("-")) //[ 'hitech', 'ch' ]


//COMPARING STRINGS
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
//Note that all comparison operators, including === and ==, compare strings case-sensitively. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
// if you attempt to compare beyond latin it may not give write output .
// For example, the German lowercase letter ß and ss are both transformed to SS by toUpperCase(), while the Turkish letter ı would be falsely reported as unequal to I by toLowerCase()
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true