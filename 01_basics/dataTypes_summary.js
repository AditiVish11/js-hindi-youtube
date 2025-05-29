//  Primitive 

// 7 Tyoes : String , Number , Boolean , Null ,  Umdefined , Symbol ( kisi bhi value ko unique banane ke liye use hota hai ) , BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let uerEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 354736876889897n




// Non primiive or Reference Type 

// types : Array, Objects , Functions 


const heros =[ " shaktiman", "naagraj", "doga"]
 let myObj = {
    name: " Aditi",
    age: 21,

}

  const myFunction = function () {
    console.log("Hello World");

}

 console.log(typeof bigNumber);
 console.log(typeof scoreValue);
 console.log(typeof myFunction);
 
 