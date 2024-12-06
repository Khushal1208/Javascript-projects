// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //true
// console.log("02" > 1); //true
// // typescript don't allows to compare two diff datatypes 

//below code will always create confusions

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// the reason is that an equality check == and comparisions >, <, >=, <= work diffrently
// comparisions convert null to a number , treating it as 0
// that's why 3rd null >= 0 is true and 1st null > 0 is false

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


//  ===  not only value will be checked but the datatype also will be checked
 
console.log("2" == 2); //true
console.log("2" === 2); //false