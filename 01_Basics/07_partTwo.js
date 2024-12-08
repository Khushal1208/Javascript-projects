// Create a sample date
let newDate = new Date(2024, 11, 8); // 8th December 2024 (Month index starts from 0)

// Display weekday in long format
console.log(newDate.toLocaleString('default', { weekday: "long" })); // "Sunday"

// Display weekday in short format
console.log(newDate.toLocaleString('default', { weekday: "short" })); // "Sun"

// Display month in long format
console.log(newDate.toLocaleString('default', { month: "long" })); // "December"

// Display month in short format
console.log(newDate.toLocaleString('default', { month: "short" })); // "Dec"

// Display day as a number (default)
console.log(newDate.toLocaleString('default', { day: "numeric" })); // "8"

// Display full date in a custom format
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})); // "Sunday, December 8, 2024"

// Display time only (hours and minutes)
console.log(newDate.toLocaleString('default', {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true // 12-hour clock format
})); // Example: "12:00 AM"

// Display date in Indian format
console.log(newDate.toLocaleString('en-IN', {
    day: "numeric",
    month: "numeric",
    year: "numeric"
})); // "8/12/2024"

// Display ISO week-based year and weekday
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC"
})); // "Sunday, 12/8/2024"
