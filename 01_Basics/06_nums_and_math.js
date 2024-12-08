const score = 400
// console.log(score) //400

const balance = new  Number(100)
// console.log(balance) //[Number: 100]

// console.log(balance.toString()) //100
// console.log(balance.toString().length) //3
// console.log(typeof(balance.toString())) //string
// console.log(balance.toFixed(2)) //100.00

const otherNumber = 23.8966
const otherNumber2 = 123.8966
const otherNumber3 = 1123.8966

// console.log(otherNumber.toPrecision(3)) //23.9
// console.log(otherNumber2.toPrecision(3)) //124
// console.log(otherNumber2.toPrecision(4)) //123.9
// console.log(otherNumber3.toPrecision(3)) //1.12e+3
//Precision priority mainly works beforee decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //string
// console.log(typeof(hundreds.toLocaleString())) //10,00,000 // by default in US standards
// console.log(hundreds.toLocaleString('en-In')) //10,00,000



//------------------maths-------------------//
// Math 

// console.log(Math)
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.6)) //5
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.2))  //4

// console.log(Math.sqrt(4)) //2
// console.log(Math.min(4,3,4,56,6,2)) //2
// console.log(Math.max(4,3,4,56,6,2)) //56


//Math.randon() its value  will always lies between [0,1]
console.log(Math.random())  //0.666233
console.log(Math.random()*10)  // any random value * 10  . random value can be 0 also 
console.log((Math.random()*10) + 1)  // any random value * 10  but can't be 0.
console.log((Math.floor(Math.random()*10) + 1)) //value without decimal ex:- 8


const min = 10
const max = 20
console.log(Math.random()*min)
console.log(Math.random()*max)

console.log(Math.floor(Math.random() * (max - min + 1)) + min)