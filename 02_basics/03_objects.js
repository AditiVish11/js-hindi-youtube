// constractor is banega to singleton banega 
//Object.create


// object litrals = object ko diclear krne ka tarika

const mySym = Symbol("key1")


const JsUser = {
   "full name": "Aditi Vishwakarma",
  [ mySym]: "mykey1",
    age: 21,
    location: "Bhopal",
    email: "aditivishwakarma@gmail.com",
    isLoggedIn: false 
   
   
}
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aditivish.com"
//Object.freeze(JsUser)
JsUser.email = "aditivish2334.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
    
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());