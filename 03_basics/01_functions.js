
function sayMyName() {
console.log("A");
console.log("D");
console.log("I");
console.log("T");
console.log("I");

}
 //sayMyName()

//  function addTwoNumbers(number1, number2) {     // function ...... (number1+number2)= parameters , fumction ko call krate hai ... uske arguement khete hai.
//    console.log( number1 + number2);  
//  }
 //addTwoNumbers(3, 4) // arguements = functions ko call karate hai 
 


//  function addTwoNumbers(number1, number2) {
// //    let result = number1 + number2
// //    return result
// return number1 + number2
//  }

//  const result = addTwoNumbers(3, 5)

// //  console.log("Result:", result);
 


// function loginUserMessgae(username) {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return
//         }
//     return `${username} just logged in`
// }

// console.log(loginUserMessgae());

// other method 

// function loginUserMessgae(username = "Aditi") {
//     if (!username) {
//         console.log("Please enter a username");
//         return
//         }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessgae("Aditi"));

function calculateCartPrice( val1, val2, ...num1){      // ... isko rest operator khete hai or isko hi spread bhi bolte hai  /// rest mtlb bht sare items ko ek bundle me convert krna .
    return num1 
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Aditi",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//  handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

//array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//  console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 900, 500, 1000]));
