// Defining a user object with methods and properties
const user = {
    username: 'hitesh',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        // Logs the object itself when called within its context
        // Example Output:
        // {
        //   username: 'sam',
        //   price: 999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }
    }
};

// Calling the function within the object
// user.welcomeMessage   // This will not work because welcomeMessage is a function.
// user.welcomeMessage() // This will work, outputs:
// hitesh, welcome to the website

// Modifying the property and observing changes
// user.username = "sam";
// user.welcomeMessage()  // Outputs:
// sam, welcome to the website

// Behavior of 'this' in different environments
// console.log(this); 
// In Node.js: {}
// In the browser: it refers to the global 'window' object.

// Function declaration example
function chai() {
    let username = "hitesh";
    // console.log(this); 
    // Outputs properties related to the function.
    // console.log(this.username); 
    // Outputs undefined because 'this' cannot access variables outside object context.
}
// chai();

// Function expression example
const chai2 = function() {
    let username = "hitesh";
    console.log(this.username); // undefined
};
// chai2();

// Arrow function example
const chai3 = () => {
    let username = "hitesh";
    console.log(this.username); // undefined
    console.log(this);          // {} because arrow functions do not bind their own 'this'.
};

// chai3();

// Traditional anonymous function
(function(a, b) {
    const chuck = 42;
    return a + b + chuck;
});

// Arrow function equivalent
(a, b) => {
    const chuck = 42;
    return a + b + chuck;
};

// Key point: Arrow functions are not inherently associated with a name.
// If recursion is needed, use a named function or assign it to a variable.

// Traditional function declaration
function bob(a) {
    return a + 100;
}

// Arrow function equivalent
const bob2 = (a) => a + 100;

// Arrow function examples
const func = (x) => x * x; // Implied "return"

const func2 = (x, y) => {
    return x + y; // Explicit "return"
};
// curly braces me return keyword likhna hi padega

const func3 = (x,y) => (x+y) // no need to write return in parentheses
console.log(func3(3,4)); //7

const func4 = (x,y) => ({username: "hitesh"})
console.log(func4(3,4)); //{ username: 'hitesh' }
// implicit return


// Template literal example in arrow function
const greet = (x) => `Hello, ${x}`;


console.log(greet("khushal")); //Hello, khushal


// SYNTAX EXAMPLES
// Anonymous function
// function() {return;}

// Named function
// function name() {return;}

// Arrow function
// () => {return;}

// Arrow function with implicit return
// () => ()

// a => a + 100;

// (a) => a + 100;