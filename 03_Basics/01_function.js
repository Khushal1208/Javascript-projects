function sayMyName(){
    console.log("khushal");
}

// sayMyName()  

// varaibles in function definitions are known as parameters
function addTwoNumbers(num1 ,num2){
   console.log(num1+num2);
}

// values passed in function are known as arguments 
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3,"4") // 4
// addTwoNumbers(3,'a') // 3a
// addTwoNumbers(3,null) //3

// const res = addTwoNumbers(3,5)  //res is undefined coz funtion is returning print statement

// console.log("Result: ",res);
//8 console.log from function
// Result:  undefined


function addTwoNumbers2(num1 ,num2){
    return num1+num2;
 }

const res2 = addTwoNumbers2(3,5)

// console.log("Result: ",res2);
// Result:  8

function loginUserMassage(username){
    return `${username} just logged in`
}

// loginUserMassage("khushal")   nothing will print 
// console.log(loginUserMassage("khushal")) 
// khushal just logged in

// console.log(loginUserMassage()) 
// if no argument
// undefined just logged in

// console.log(loginUserMassage("")) //  just logged in


function loginUserMassage2(username){
    // if(username === undefined){
    //     // console.log("Please enter the user name!");
    //     return "Please enter the user name!"
    // }
    if(!username){
        return "Please enter the user name!"
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage2())  //"Please enter the user name!"


// default parameter
function loginUserMassage3(username = "sam"){
    if(!username){
        return "Please enter the user name!"
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage3()) //sam just logged in
// console.log(loginUserMassage3("hitesh")) //hitesh just logged in 



// Functions with objects and array

// how to calculate cart total when user is constanly adding product in it ?

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));

// adding more prices 
// console.log(calculateCartPrice(200,400,500)); // only 200 is returned 

// Here comes the importance of spread and rest operator 

function calculateCartPrice(...num1){
    // return ...num1   wrong way
        return num1   // right way
    }
    
    // console.log(calculateCartPrice(200,400,500,6000)); 
    // [ 200, 400, 500, 6000 ]


function calculateCartPrice2(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice2(200,400,500,6000));
// [ 500, 6000 ]   val1 = 200 and val2 = 400 so only remaining numbers are printed.


const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user) //Username is hitesh and price is 199
// if by chance object key changed then it will print as undefined
// js is not type safe but typescript is safe

handleObject({
    username:"sam" ,
    price : 399
}) 
// Username is sam and price is 399

const myNewArray = [200 ,400 ,100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // 400



