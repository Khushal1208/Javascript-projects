const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


// for in loop 
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

// console.log("All keys");
for (const key in myObject) {
    // console.log(key);
}
// All keys
// js
// cpp
// rb
// swift

// console.log("All values");
for (const key in myObject) {
    // console.log(myObject[key]);
}
// All values
// javascript
// C++
// ruby
// swift by apple

// console.log("All key, value pairs");
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// All key, value pairs
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming  = ["js","rb","py","java","cpp","swift"]

for (const key in programming) {
    // console.log(key); // it will print only index
    console.log(programming[key]); // it will print all values
    
}