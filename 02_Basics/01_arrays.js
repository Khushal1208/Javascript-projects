// Array
// JavaScript arrays are resizable and can contain a mix of different data types.
const myArr = [0,1,2,3,4,5,true,"hitesh"] 
const myARR = [0,1,2,3,4,5]

//JavaScript arrays are zero-indexed(first index is 0)
// console.log(myARR[0])

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// Array Creation
//1.  Using Literal Syntax:
const myHeroes = ["shaktiman", "naagraj"];
// 2. Using Constructor:]
const myArr2 = new Array(1, 2, 3, 4);
  

// ARRAY METHODS
// myARR.push(6)
// myARR.push(7)
// myARR.pop() // 7 is popped
// myARR.unshift(9) // 9 is placed at first place
// shift will remove first element of array
// myARR.shift() // 9 is removed from first place 

// console.log(myArr.includes(9)) //false
// console.log(myARR.indexOf(9))  // -1
// console.log(myARR.indexOf(3))  // 3rd index

const newARR = myARR.join() // Adds all the elements of an array into a string, separated by the specified separator string
// values will be same but type will be changed into string
const newARR2 = myARR.join("-#-") 
// console.log(myARR)
// console.log(newARR) // 0,1,2,3,4,5
// console.log(newARR2) // 0-#-1-#-2-#-3-#-4-#-5



//  slice , splice


// const myn1 = myARR.slice(1,3)  //[ 1, 2 ]
//slice -> Returns a copy of a section of an array. For both start and end,
// array.slice(start, end)
// original array remain Unchanged


// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// const myn1 = myARR.slice("",3)  //[ 0, 1, 2 ]


// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
// const myn1 = myARR.slice(3,)  //[ 3, 4, 5 ]
// const myn1 = myARR.slice(3)  //[ 3, 4, 5 ]

// a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// const myn1 = myARR.slice(-2)  //[ 4, 5 ]
// const myn1 = myARR.slice(1,-2)  //[ 1, 2, 3 ] excludes last two


console.log("A ",myARR) // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myARR.slice(1,3)  //[ 1, 2 ]

console.log(myn1)  // last will be exclusive

console.log("B ",myARR)  // B  [ 0, 1, 2, 3, 4, 5 ]

// splice ->  Removes/Extracts elements from the array (modifies the original).
// array.splice(start, deleteCount, ...itemsToAdd)
// The specified range is removed.
//  Can optionally add new items at the specified position.
// Cannot use negative indices.
// original array Modified.
const myn2 = myARR.splice(1,3)  // [ 1, 2, 3 ] 


console.log("c ",myARR)  // c  [ 0, 4, 5 ] this elements are left are splice of an array

console.log(myn2)  // last will be inclusive



