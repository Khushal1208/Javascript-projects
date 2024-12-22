 const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNumbers.map( (num) => num+10)
newNums = myNumbers.map( (num) => { return num+10})
// console.log(newNums);

newNums = myNumbers.map( (num) => num*10).map( num => num + 1) .filter( num => num >= 40)
// in chaining the result of first will go to 2nd and so on... 

console.log(newNums);

