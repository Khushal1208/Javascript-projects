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

console.log(loginUserMassage3()) //sam just logged in
console.log(loginUserMassage3("hitesh")) //hitesh just logged in 

