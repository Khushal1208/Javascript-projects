const user = {
  username: "hitesh",
  logincount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got  user details from database");
    console.log(`username:${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, logincount, isLoggedIn) {
  this.username = username;
  this.logincount = logincount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this
// it is not matter that you write return or not , it will implicitly defined the return
}

// const userOne = User("hitesh",12,true)
// const userTwo = User("ChaiOrCode",11,false)
// without new keyword , it will overwrite userOne 

const userOne = new User("hitesh",12,true)
const userTwo = new User("ChaiOrCode",11,false)
// console.log(userOne);
console.log(userOne.constructor); //[Function: User]
console.log(userOne instanceof User); // true
// Determines whether the given value inherits from this function if this function was used as a constructor function.

//A constructor function can control which objects are recognized as its instances by 'instanceof' by overriding this method.

// console.log(userTwo);

// cosntructor funtion will be called be new keyword
// all values will be assigned by this keyword

