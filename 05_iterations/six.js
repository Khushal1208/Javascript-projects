const coding = ["js", "python", "java", "cpp", "ruby", "golang"];

const values = coding.forEach(item => {
  // forEach does not return anything, even with explicit return
});
// forEach() does not return a new array. It iterates over the array and performs an action on each element, but the return value of forEach() itself is always undefined.
// values will be undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter() returns elements that meet the condition
// filter() creates a new array containing only the elements that pass the provided condition.

// console.log(myNums.filter(num => num > 4)); // [ 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter(num => num > 4);
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter(num => {
//   When using curly braces {} within the callback function of filter(), an explicit return statement is required to return the desired value.
//   return num > 4;
});

// console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]


// how i can use filter() with foreach func??

const  newNums3 = []

myNums.forEach(num => {
    if(num>4){
        newNums3.push(num)
    }
})

// console.log(newNums3);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



let userBooks = books.filter( (bk) => bk.genre === "Science" )
userBooks = books.filter( (bk) => bk.publish >= 2000)
userBooks = books.filter( (bk) => {return bk.publish >= 1995})
userBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === "History"})

console.log(userBooks);