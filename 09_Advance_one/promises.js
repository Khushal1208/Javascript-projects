// promiseOne is an object
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
      console.log("Async task is complete");
      // it is called to connect ".then"
      resolve(); // Resolves the promise when the async task is complete
    }, 1000);
  });
  // it has direct connection with resolve
  promiseOne.then(function () {
    console.log("Promise consumed"); // Executes when promiseOne is resolved
  });
  
  // Creating and resolving another promise
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task 2");
      resolve(); // Resolves after 1 second
    }, 1000);
  }).then(function () {
    console.log("Async 2 resolved"); // Executes when the promise is resolved
  });
  
  // Using setTimeout to resolve a promise with user data
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ username: "Chai", email: "chai@example.com" }); // Resolves with user data
    }, 1000);
  });
  
  promiseThree.then(function (user) {
    console.log(user); // Logs user data when promiseThree is resolved
  });
  
  // Handling Errors in Promises
  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
      // let error = true; // Uncomment to simulate an error
      let error = false; // Change to true to test rejection
      if (!error) {
        resolve({ username: "hitesh", password: "123" }); // Resolves with user data
      } else {
        reject("ERROR: Something went wrong"); // Rejects the promise on error
      }
    }, 1000);
  });
  
  // Chaining with error handling
  promiseFour
    .then((user) => {
      console.log(user); // Logs user data on successful resolution
      return user.username; // Passes username to the next then()
    })
    .then((username) => {
      console.log(username); // Logs username from previous then()
    })
    .catch(function (error) {
      console.log(error); // Catches and logs any errors that occur in the chain
    })
    .finally(() => console.log("The promise is either resolved or rejected")); // Executes regardless of outcome
  
  // Another promise that can succeed or fail based on an error flag
  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let error = true; // Change to false to test resolution
      if (!error) {
        resolve({ username: "hitesh", password: "123" }); // Resolves with user data
      } else {
        reject("ERROR: Something went wrong"); // Rejects the promise on error
      }
    }, 1000);
  });
  
  // Using async/await to consume promiseFive
  // It is not compulsory to use only ".then"; you can use async/await.
  // Async/await can't directly resolve errors; they must be caught using try/catch.
  async function consumePromiseFive() {
    try {
      const response = await promiseFive; // Waits for promiseFive to resolve
      console.log(response); // Logs the resolved value of promiseFive
    } catch (error) {
      console.log(error); // Catches and logs any errors that occur during await
    }
  }
  
  consumePromiseFive(); // Calls the async function
  
  // Fetching Data with Promises using the Fetch API
  fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
      return response.json(); // Parses the response as JSON
  })
  .then((data) => {
      console.log(data); // Logs the fetched data from GitHub API
  })
  .catch((error) => console.log(error)); // Catches and logs any errors during fetch operation
  
  /*
  async function getAllUsers(){
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json(); // Waits for JSON parsing to complete
      console.log(data); 
    } catch(error){
      console.log("E: ", error); // Catches and logs any errors during fetch or parsing 
    }
  }
  getAllUsers();
  */
 
  
  /*
The two methods for fetching data in JavaScript demonstrate different approaches to handling asynchronous operations: using Promises with .then() and using async/await.

1. **Syntax and Readability**
   - **Promises with .then():**
     - Uses a chain of .then() calls, which can become cluttered with multiple async operations.
   - **Async/Await:**
     - Allows writing asynchronous code that appears synchronous, improving readability.

2. **Error Handling**
   - **Promises with .then():**
     - Errors are caught at the end of the chain using .catch().
   - **Async/Await:**
     - Errors are handled using try/catch blocks, making it clearer where errors might occur.

3. **Control Flow**
   - **Promises with .then():**
     - Each .then() executes after the previous promise resolves, potentially leading to nested structures.
   - **Async/Await:**
     - The use of await allows for a more linear flow of execution.

**Conclusion**
Both methods achieve the same goal of fetching data asynchronously, but async/await generally offers improved readability and simpler error handling. It is often preferred in modern JavaScript development for these reasons, especially when dealing with multiple asynchronous operations.
*/

// Key Learnings
// 1. Promises provide a cleaner way to handle asynchronous operations using .then() and .catch() methods.
// 2. Async/await simplifies asynchronous code, making it look more like synchronous code for better readability.
// 3. Error handling is more intuitive with async/await due to the use of try/catch blocks.
// 4. Use Promises for existing codebases or compatibility; prefer async/await for new projects to enhance maintainability.

