node// variableName var = value
// varaibleName var2 = datatype(var1)


let score1 = null   // in number => 0
let score2 = undefined   // in number => NaN
let score3 = "Khushal"   //in number =>  NaN
let score4 = 33 // in number => 33
let score5 = "true" //in number => 1
let score6 = "false" // in number => 0


// console.log(typeof score)
// console.log(typeof(score))

let score = "33abc" //NaN
let valueInNumber = Number(score) // type conversion
// console.log(typeof valueInNumber)   //number type
// console.log(valueInNumber) // NaN 


let isLoggedIn1 = 1 //in boolean =>true
let isLoggedIn2 = 0 //in boolean => false
let isLoggedIn3 = ""  //in boolean => false
let isLoggedIn4 = "hitesh" //in boolean => true
let isLoggedIn5 = null //in boolean => false
let isLoggedIn6 = undefined //in boolean => false


let booleanIsLoggedIn = Boolean(isLoggedIn1) //type conversion
// console.log(booleanIsLoggedIn)  


let someNumber = 33
let stringNumber = String(someNumber) //type conversion
// console.log(typeof stringNumber)
// console.log(stringNumber)
 

//  *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);  // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power of 2
// console.log(2/3); //divide
// console.log(2%3); //reminder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log(typeof("1" + 2));
// console.log("1" + 2);  // strint

// console.log(typeof(1 + "2"));
// console.log(1 + "2");  // intstr
 
// console.log(typeof("1" + 2 + 2));
// console.log("1" + 2 + 2); //strint1int2

// console.log(typeof(1 + 2 + "2"));
// console.log(1 + 2 + "2"); // (int1+int2)str

// console.log( (3 + 4) * 5 % 3);

// console.log(true) //true
// console.log(+true); //1     not good to write
// console.log(true+); // error 
// console.log(+""); // 0 not good to write

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2   not good to write

let gameCounter = 100
l =gameCounter++; //101
console.log(l); 
gameCounter++; //102
++gameCounter; //103
console.log(gameCounter); 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion