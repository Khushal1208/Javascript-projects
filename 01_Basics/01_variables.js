const accountId = 15343
let accountEmail = "khushal@goofle.com"
var accountPassword = "3341r33"
accountCity = "srigohi"
let accountState; 
// in js -> if varaibles are not just declared not initialized then will print as "undefined"

// accountId = 2 // not allowed

accountEmail = "hgek@goog.com"
accountPassword = "2323444"
accountCity = "jaipur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])
