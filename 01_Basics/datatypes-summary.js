//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// js is dynamically typed language

const score = 100 // number category
const scoreValue = 100.3  // number category

const isLoggedIn = false // boolean type
const outsideTemp = null // null type
let userEmail; //undefined type

const id = Symbol('123')  //uniqueness
const anotherId = Symbol('123')  // unique 

console.log(id === anotherId); // false
// both are not same 

const bigNumber = 345654357665435675n


// stack and heap memory concept

// Reference (Non primitive)

// Array, Objects, Functions

//Array's are defined like this 
const heros = ["shaktiman", "naagraj", "doga"];

// object's are defined like this
// {} isme kuch bhi define kia to wo object banjayega
let myObj = {
    name: "hitesh",
    age: 22,
}

//function's are defined like this
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof number);
console.log(typeof anotherId);
console.log(typeof myFunction); //object function

// jo bhi non premitive hote hai unka datatype object hi hota hai 

// https://262.ecma-international.org/5.1/#sec-11.4.3




// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object
