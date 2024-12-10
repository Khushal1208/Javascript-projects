// SINGLETON
// Singleton -> ensures only a single instance of an object exists when created using the `new` keyword (constructor). 
// If object literals are used, it is not guaranteed that only one instance will exist.

// OBJECT CREATION
// Object.create()
// Creates an object with a specified prototype or null.

// Object Literals
// Example: const myObject = { key: "value" };

// SYMBOLS
const mySym = Symbol("key1");

// How to add a symbol to an object?
// Incorrect: mySym: "value" (this treats mySym as a string key).
// Correct: [mySym]: "value" (using bracket notation).

// Example Object
const JsUser = {
    name: 'Hitesh',
    "full name": "Hitesh Chourdary",
    [mySym]: "myKey1",
    age: 18,
    location: 'Jaipur',
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ACCESSING PROPERTIES
// Dot Notation:
console.log(JsUser.email); // "hitesh@google.com"

// Bracket Notation:
console.log(JsUser["full name"]); // "Hitesh Chourdary"
console.log(JsUser[mySym]); // "myKey1"

// Freezing an Object
// Object.freeze() prevents modifications to an object.
Object.freeze(JsUser);
JsUser.email = "newemail@domain.com"; // Ignored due to freeze

// ADDING METHODS
JsUser.greeting = function () {
    console.log("Hello, JS User!");
};
console.log(JsUser.greeting()); // Outputs: "Hello, JS User!"

JsUser.greetingTwo = function () {
    console.log(`Hello, JS User, ${this.name}`);
};
console.log(JsUser.greetingTwo()); // Outputs: "Hello, JS User, Hitesh"
