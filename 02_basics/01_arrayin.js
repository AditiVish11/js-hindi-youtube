//array

const myArr = [ 0, 1, 2, 3, 4, 5,]

const myHeros = ["shaktiman" , "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

/// Array methods

// myArr.push(6) // push = addition in array or insertion in array
// myArr.push(7)
// console.log(myArr);


// myArr.pop(7)   // pop = deletion in array



// myArr.unshift(8)  // array ke starting me ek value add kr dega for examle:   [0,1,2,3,4,5]
//   unshift(6) = output [6,0,1,2,3,4,5]

//myArr.shift() // shift = array me se  starting ek element remove kr dega  [0,1,2,3] = [1,2,3]

// console.log(myArr.includes(9)); // question
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);


////   slice or splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

