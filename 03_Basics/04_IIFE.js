// Immediately invoked function Expressions (IIFE)


// to declare IIFE we use two parenthese =>   ()();
// first for function definition and second it sign of IIFE. In second, we can pass argument also for frist function definition .
//example
( () => {
    // unamed IIFE
    console.log(`DB connected 1 `) // prints 😎
})();
// at last if you don't add semicolon then it will throw error because IIFE don't know where to end..

(function chai(){
    // named IIFE
    console.log(`DB connected 2`); // prints 😎
})();

( (name) => {
    // unamed IIFE
    console.log(`DB connected 3 ${name}`);
})("'khushal");





// Why use IIFE?
// 1. To create a private scope for variables and functions, avoiding global namespace pollution.
// 2. Useful for encapsulating logic that runs immediately.
// 3. Helps maintain code modularity and avoid name conflicts in larger projects.


// Example 1: Encapsulating variables
(function() {
    const privateVar = "I am private";
    console.log(privateVar); // Outputs: I am private
})();
// console.log(privateVar); // Error: privateVar is not defined

// Example 2: Running initialization logic immediately
(function() {
    console.log("Initializing the application...");
})();

// Example 3: Avoiding global namespace pollution
const app = (function() {
    const privateCounter = 0;
    return {
        increment: function() {
            return privateCounter + 1;
        }
    };
})();
console.log(app.increment()); // Outputs: 1
