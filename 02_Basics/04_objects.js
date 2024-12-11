// SINGLETON OBJECT
const tinderUser1 = new Object(); // Creates a singleton object

// NON-SINGLETON OBJECT
const tinderUser = {}; // Creates a non-singleton object
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// NESTED OBJECTS
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "hitesh",
            lastname: "choudary"
        }
    }
};

// ACCESSING NESTED OBJECTS
// console.log(regularUser.fullname.userFullname.firstname); // "hitesh"

// OPTIONAL CHAINING (Checking if an object or property exists)
// console.log(regularUser.fullname?.userFullname?.firstname); // "hitesh"

// OBJECT ASSIGNMENT
const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };

// Incorrect method of combining objects
// const obj3 = { obj1, obj2 };
// Result: { obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'a', 4: 'b' } }
// obj1 = obj3

// Using Object.assign()
const obj3 = Object.assign({}, obj1, obj2);
// obj1 remains unchanged
// obj1 != obj3
// obj3 = { 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

// Using Spread Syntax
const obj4 = { ...obj1, ...obj2 };
// obj4 = { 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

// ACCESSING KEYS, VALUES, AND ENTRIES
// console.log(Object.keys(tinderUser)); 
// Outputs: [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); 
// Outputs: [ '123abc', 'sammy', false ]

// console.log(Object.entries(tinderUser)); 
// Outputs: [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// CHECKING PROPERTY EXISTENCE
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// Outputs: true


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



const course = {
    coursename: 'js in hindi',
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//OBJECT de-structuring
const {courseInstructor} = course
const {courseInstructor: instructor} = course
// both are same

// console.log(instructor)

// IN REACT
// const navbar = ({company}) =>{

// }
// navbar(company = "hitesh")


// when you see any "{}" curly braces then it must be used for de-structering purposes

// de-structering of array is also possible


// JSON looks like this , both keys and values are in string format
// object with no name is json file
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price" : "free"
// }

//ARRAY type of object
// [
//     {},
//     {},
//     {}
// ]
