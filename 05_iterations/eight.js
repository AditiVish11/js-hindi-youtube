//reduce 
const myNums = [ 1, 2, 3]

//  const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc; ${acc} and currval: ${currval}`);
    
//     return acc + currval
//  } ,0)
  
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
 console.log(myTotal);
 
 const shoppingCart = [
     { 
    itemName: "Js course",
    price: 2999
 },
     { 
    itemName: " Python",
    price: 5999
 },
     { 
    itemName: "mobile dev course",
    price: 6999
 },
     { 
    itemName: "data science cource",
    price: 12999
 },
]

  const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
  console.log(priceToPay);
  