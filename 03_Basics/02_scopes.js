//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// core scope and node enviorment scope are diffent

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); can't access

     two()   // prints -> hitesh
     // if it is not being called then it will not print anything.

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  can't access
}

// console.log(username);   can't access


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // will work bacauase it is functionly declared

function addone(num){
    return num + 1
}



addTwo(5) // will not work because it is not declared , or function is declared after this line and stored in variable
const addTwo = function(num){
    return num + 2
}