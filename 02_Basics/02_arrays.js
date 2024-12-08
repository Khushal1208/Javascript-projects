const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros  =  ["super","flash","batman"]

// marvel_heros.push(dc_heros)
//push -> Combines two or more arrays. This method returns a existing array by modifying it.

// console.log(marvel_heros)
//[ 'thor', 'ironman', 'spiderman', [ 'super', 'flash', 'batman' ] ]
// hum jante hai ki arry me koi bhi type data aa sakta hai , isiliye isme to arrys type ka element bhi le lia

// [ 'super', 'flash', 'batman' ]  -> this is 4th element of marvel_heros

// console.log(marvel_heros[3]) //[ 'super', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]) // flash

const allHeros = marvel_heros.concat(dc_heros)  
// concat() -> Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// console.log(marvel_heros)
//  [ 'thor', 'ironman', 'spiderman' ]

// console.log(allHeros)
// [ 'thor', 'ironman', 'spiderman', 'super', 'flash', 'batman' ]


// spread oparator 
// -> kanch ka glass lijiye or gira do , tut kar ke spread ho jayega
// peices me kat kar join kro

const all_new_Heros = [...marvel_heros,...dc_heros]

// console.log(all_new_Heros)
// [ 'thor', 'ironman', 'spiderman', 'super', 'flash', 'batman' ]

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat()
// console.log(real_another_arr)
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// flat -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const real_another_arr2 = another_arr.flat(Infinity)
// console.log(real_another_arr2)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("khushal")) //false
// console.log(Array.from("khushal")) // [ 'k', 'h', 'u', 's', 'h', 'a', 'l']

console.log(Array.from({name: "khushal"})) // it gives empty arr []. itersting question for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) 
// [ 100, 200, 300 ]
