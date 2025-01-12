function getCheese() {
    setTimeout(() => {
        const cheese = "🧀";
        return cheese; // This return statement is inside the callback and won't affect the function's main return value.
    }, 2000);
}

console.log(getCheese()); 
// The setTimeout function does not block the execution of the code that follows it. As a result, the getCheese() function completes execution immediately and returns undefined because there is no explicit return statement in the getCheese() function itself.


/*1. Using Promises
You can return a promise from getCheese() that resolves with the cheese value:
-> To create a promise object, we use the Promise() constructor, and it takes a function as an argument. This function also accepts two functions: resolve() and reject().
-> If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.
-> A promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
-> A promise may have one of three states:
   Pending  -> neither fulfilled nor rejected
   Fulfilled -> .then(onFulfillment)
   Rejected -> .catch(onRejection)


****Using a Promise ***
then() -> is used with the callback when the promise is successfully fulfilled or resolved

catch() -> is used with the callback when the promise is rejected or if an error occurs.

finally() -> gets executed when the promise is either resolved or rejected
*/

function getCheese2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    });
}

getCheese2().then((cheese) => {
    console.log(cheese);
});


/*1. Using a Callback
You can pass a callback function to getCheese() that will be called with the cheese value once it's ready:*/ 

function getCheese3(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("Here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese3((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("Got my pizza", pizza);
        });
    });
});
// pizza -> dough -> cheese
getCheese3((cheese) => {
    console.log("Cheese received:", cheese);
});


const ticket = new Promise(function(resolve, reject) {
    const isBoarded = false;
    if (isBoarded) {
        resolve("You are on the flight");
    } else {
        reject("Your flight has been cancelled");
    }
});

ticket.then((data) => {
    console.log("Wow ", data);
}).catch((data) => {
    console.log("Oh no ", data);
}).finally(() => {
    console.log("I will always be executed");
});


// Async/await and Promises are used to resolve the callback hell problem

// Learning:
// - `finally()` is executed regardless of the promise's state (fulfilled or rejected).
// - Promises allow chaining with `then` and `catch` for better error handling and flow control.

function getCheese4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    });
}

function makeDough2(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍩";
            resolve(dough);
            // reject("Bad cheese");
        }, 2000);
    });
}

function bakePizza2(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    });
}


/*
getCheese4()
.then((cheese) => {
    console.log("Here is the cheese", cheese);
    return makeDough2(cheese);
})
.then((dough) => {
    console.log("Here is the dough", dough);
    return bakePizza2(dough);
})
.then((pizza) => {
    console.log("Here is the pizza", pizza);
})
.catch((data) => {
    console.log("Error occurred", data);
})
.finally(() => {
    console.log("Process ended");
});
*/


// Learning:
// - Chaining `then` maintains a sequential order of asynchronous operations.
// - Errors in any `then` block are caught in the `catch` block.

async function orderPizza() {
    try {
        
        const cheese = await getCheese4();
        console.log("Starting pizza preparation...");
        console.log("Here is the cheese:", cheese);

        const dough = await makeDough2(cheese);
        console.log("Here is the dough:", dough);

        const pizza = await bakePizza2(dough);
        console.log("Here is the pizza:", pizza);

        console.log("Pizza preparation completed!");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

orderPizza();


// Learning:
// - `async` functions pause at each `await` keyword until the promise resolves.
// - `try-catch` is used to handle errors when using `await` in async functions.