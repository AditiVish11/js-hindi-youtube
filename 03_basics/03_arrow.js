const user = {
   username: "aditi",
   price: 999,

   welcomeMessage: function() {
    console.log(`${this.username} , welcome to this website`);
    // console.log(this);    // this = current contest/current value ki baat krta hi
    
    
   }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "aditi"
//     console.log(this);
    
// }
//  chai()

 const chai =  () => {
    let username = "aditi"
     console.log(this);
}
// chai()
  ////// basics arrow function

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }
// console.log(addTwo(3, 4));

/// implicit return

// const addTwo = (num1, num2) =>  num1 + num2
//  console.log(addTwo(3, 4));

//  const addTwo = (num1, num2) => ( num1 + num2)


const addTwo = (num1, num2) => ( {username: "aditi"} )
console.log(addTwo(3, 4));



// const myArray = [ 2, 4, 5, 6, 8, 9]

// myArray.forEach( () => ) 