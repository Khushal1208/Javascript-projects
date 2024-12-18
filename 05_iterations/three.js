// for of 
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.


// ["" , "" , ""]
// [{},{},{}]
// for , while , do while loop ka kaam karta hai bina declaration ke or increament ke

// for (const element of object) {
//     //statements
// }

const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



//Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map() // it is object

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // will not add , coz it is not unique

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map.get('a'));
// Expected output: 1

map.set('a', 97);

console.log(map.get('a'));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete('b');

console.log(map.size);
// Expected output: 2

// console.log(map);


for (const key of map) {
    // console.log(key);
}
// ouput
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]
// [ 'a', 97 ]
// [ 'c', 3 ]


for (const key of map) {
    // console.log(map.get(key));
}
// undefined
// undefined
// undefined
// undefined
// undefined


for (const [key,value] of map) {
    // console.log(map.get(key,value));
}
// India
// United States of America
// France
// 97
// 3


for (const [key,value] of map) {
    // console.log(key,':-', value);
}
// IN :- India
// USA :- United States of America
// Fr :- France
// a :- 97
// c :- 3


// for of loop on objects 

const myObject = {
    'game1':'NFS',
    'game2': "spidermen"
}

// for (const [key,value] of myObject) {
    // console.log(key,':-',value);
// } // TypeError: myObject is not iterable