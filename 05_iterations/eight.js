const myNums = [1, 2, 3, 4];


const myTotal = myNums.reduce(
  function (acc, currentValue){
    // console.log(`acc: ${acc} and currentValue : ${currentValue}`);
    return acc + currentValue
  }, 0);

// console.log(myTotal); // 10


// Example: Calculating the Total Price of Items in a Shopping Cart

const cartItems = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 5 },
  { name: "Item 3", price: 15 }
];

const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price,
  0
);

// console.log(totalPrice); // Output: 30


// The real-life applications of the `reduce()` function:

// **1. Summing Values:**

// * **Financial Calculations:**

const transactions = [100, -50, 20, -15, 75]; // Example: Income, expenses
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction, 0); 
// console.log(totalBalance); // Output: 140


// * **Data Aggregation:**

const pageViews = [1000, 800, 1200, 950, 1100]; 
const totalViews = pageViews.reduce((acc, views) => acc + views, 0); 
// console.log(totalViews); // Output: 4950


// **2. Calculating Averages:**

// * **Performance Metrics:**

const responseTimes = [100, 50, 150, 80, 120]; // Example: Server response times in milliseconds
const averageResponseTime = responseTimes.reduce((acc, time) => acc + time, 0) / responseTimes.length;
// console.log(averageResponseTime); // Output: 100


// * **Statistical Analysis:**

const dataPoints = [2.5, 3.1, 1.8, 4.2, 2.9];
const mean = dataPoints.reduce((acc, value) => acc + value, 0) / dataPoints.length;
// console.log(mean); // Output: 2.9


// **3. String Concatenation:**

// * **Building Dynamic Strings:**


const parts = ['hello', ' ', 'world', '!'];
const message = parts.reduce((acc, part) => acc + part, '');
// console.log(message); // Output: "hello world!"


// * **Data Serialization:**


const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const serializedUsers = users.reduce((acc, user) => acc + JSON.stringify(user) + ',', '');
// console.log(serializedUsers); // Output: '{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},' 


// **4. Flattening Arrays:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, subArray) => acc.concat(subArray), []);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


// **5. Counting Occurrences:**


const colors = ['red', 'blue', 'green', 'red', 'blue', 'red'];
const colorCounts = colors.reduce((acc, color) => {
  acc[color] = (acc[color] || 0) + 1; 
  return acc;
}, {});
// console.log(colorCounts); // Output: { red: 3, blue: 2, green: 1 }


const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

// const cartTotal = shoppingCart.reduce( (acc,currval) => {return acc + currval.price} , 0)    // 22996
const cartTotal = shoppingCart.reduce( (acc,currval) =>  acc + currval.price, 0)     // 22996

console.log(cartTotal);
