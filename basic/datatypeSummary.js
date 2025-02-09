
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 //number

const isLoggedIn = false //bollean
const outsideTemp = null //numm
let userEmail; // undefined

const id = Symbol('123') //Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
console.log(bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];// Array
//Object
let myObj = {
    name: "hitesh",
    age: 22,
}
// Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
 /*
String - type string
Number - type number
boolean - type boolean
null - type object
undefined - type undefined
Synbol - type Symbol
Array - type object
Objects - type object
Function - type object function
 */