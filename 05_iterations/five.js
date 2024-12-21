const coding = ["js","python","java","cpp","ruby","golang"]

// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

//callback function have no name

coding.forEach(function(val){
    // console.log(val); // prints all elements
})
//using arrow function
coding.forEach(element => {
    // console.log(element); // prints all elements
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // pass only refrence of function  
// coding.forEach( printMe() ) ❌

//Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) =>{}

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//it will print like this 
// js 0 [ 'js', 'python', 'java', 'cpp', 'ruby', 'golang' ]

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }
]

myCoding.forEach(elements=>{
    // console.log(elements); // it prints complete obj
    console.log(elements.languageFileName);
    
    
})

