// Dates

let myDate = new Date()

console.log(typeof myDate) //object

console.log(myDate) // 2024-12-08T04:52:49.834Z

console.log(myDate.toISOString()) // 2024-12-08T04:52:49.834Z

console.log(myDate.toJSON()) // 2024-12-08T04:52:49.834Z

console.log(myDate.toString()) //Sun Dec 08 2024 10:16:16 GMT+0530 (India Standard Time)

console.log(myDate.toTimeString()) // 10:19:07 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString()) // Sun, 08 Dec 2024 04:49:07 GMT

console.log(myDate.toLocaleString()) // 8/12/2024, 10:19:07 am

console.log(myDate.toLocaleDateString()) // 8/12/2024

// Creating a custom date (Months start from 0 in JavaScript)
let myCreatedDate = new Date(2023, 0, 23); 
console.log(myCreatedDate); // "2023-01-22T18:30:00.000Z"
console.log(myCreatedDate.toLocaleString()); // "23/1/2023, 12:00:00 AM"
console.log(myCreatedDate.toLocaleDateString()); // "23/1/2023"


// Custom date with time
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); 
console.log(myCreatedDate2.toLocaleString()); // "23/1/2023, 5:03:00 AM"


// Invalid date example (month starts from 0)
let myCreatedDate3 = new Date("2023-00-23"); // Invalid Date
let myCreatedDate4 = new Date("2023-01-23"); // Valid (month = 1 for January)
console.log(myCreatedDate4.toLocaleString()); // "23/1/2023, 5:30:00 AM"


// Date in Indian format (DD-MM-YYYY)
let myCreatedDate5 = new Date("01-23-2023");
console.log(myCreatedDate5.toLocaleString()); // "23/1/2023, 5:30:00 AM"


// Timestamp in milliseconds since Jan 1, 1970
let myTimeStamp = Date.now(); 
console.log(myTimeStamp); // Example: 1733637600000 (current timestamp)


// Convert timestamp to seconds
console.log(Math.floor(Date.now() / 1000)); // Example: 1733637600


// Get timestamp from a date (used for comparison)
console.log(myCreatedDate5.getTime()); // Example: 1674421800000

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) // 11
console.log(newDate.getDay()) //0
console.log(newDate.getTime()) // 1733634871631
console.log(newDate.getFullYear())  // 2024

// `${newDate.getDate()} and the time`

// Most used Method
console.log(newDate.toLocaleString('default',{
    weekday:"long"
})) //sunday