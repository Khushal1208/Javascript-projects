// singleton object 
//  const tinderUser = new Object()    // {}

// non singleton object
const tinderUser = {}     // {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

 
// console.log(tinderUser);


//nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname:{
            firstname:"hitesh",
            lastname: " choudary"
        }
    }
}

//accessing nested objects
// console.log(regularUser.fullname.userFullname.firstname);


// when you need to check that any object exist or not // it is helpfull when respose is generated from other API
// console.log(regularUser.fullname?.userFullname.firstname);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

// const obj3 = {obj1,obj2}  
// same problem like array
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Object.assign(target, source1, source2, /* …, */ sourceN)

// target is object then it will copy source into it and target will change 
// but if you take target = {} then sources as objects then sources will be cpied into {} , means none object will change(it is good to practice). 

// const obj3 = Object.assign(obj1,obj2) 
//now obj1 = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// and obj3 = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// it will work

const obj3 = Object.assign({},obj1,obj2) 
// here obj1 = { '1': 'a', '2': 'b' }
// and obj3 = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// it will also work 
// this is more correct way
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// @param target — The target object to copy to.

// @param source — The source object from which to copy properties

// console.log(obj1);
// console.log(obj3);


const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    {id:1,
    email:"h@gmail.com"}, 
    {id:1,
        email:"h@gmail.com"}, 
    {id:1,
        email:"h@gmail.com"}, 
    {id:1,
        email:"h@gmail.com"}, 
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
// Returns the names of the enumerable string properties and methods of an object.
// { id: '123abc', name: 'sammy', isLoggedIn: false }
//[ 'id', 'name', 'isLoggedIn' ]
// it is similar forkeys() method in python

console.log(Object.values(tinderUser));
// Returns an array of values of the enumerable own properties of an object
// [ '123abc', 'sammy', false ]

console.log(Object.entries(tinderUser));
// Returns an array of key/values of the enumerable own properties of an object
// [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Determines whether an object has a property with the specified name
//True