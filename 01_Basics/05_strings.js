const name = 'hitesh'
const repoCount = 50 

// console.log(name +  repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //modern way 

const gameName = new String('hitechch')  //object //it is stored as key value pair // but it is string only

console.log(gameName) // [String: 'hitechch']
console.log(gameName[0])  // h
console.log(gameName.__proto__)  // {}

console.log(gameName.length )
console.log(gameName.toUpperCase()) //HITECHCH (original is not changed)
console.log(gameName) // [String: 'hitechch']

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

// you can check methods in mdn docs pe check kar sakte hai 

const gameName1 = new String('hitech-ch') 
const newString = gameName1.substring(0,4) //0 is inclkuded and 4 is excluded 
// negative values are not allowed
console.log(newString) //hite

const anotherString = gameName1.slice(-8,4)
console.log(anotherString) //ite

const newStringOne = "    hitesh    "
console.log(newStringOne) //    hitesh    
console.log(newStringOne.trim())//hitesh

const url = "https.//hitesh.com/hitesh%20choudhary"
// browser dont support spaces in bettween
console.log(url.replace('%20' ,'-'))
//https.//hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) //true
console.log(url.includes('khushal')) //false

//split(seprator , limit)

console.log(gameName1.split("-")) //[ 'hitech', 'ch' ]
