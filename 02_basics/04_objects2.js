// singleton 
// const rinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aditi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname:{
            firstname: "Aditi",
            lastname: "Vishwakarma"
         }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }


// const obj3 = Object.assign( {}, obj1, obj2, obj4)
// console.log(obj3);

 // assign ke through target or source or marge kr sakte hai ( multiple objects ko merge kr sakte hai )

 const obj3 = { ...obj1, ...obj2, ...obj4}
 console.log(obj3);
 

 const users = [
     {
        id: 1,
        email: "Aditivish.com"
     },
      {
        id: 1,
        email: "Aditivish.com"
     },
 ]
  //user[1].email
 console.log(tinderUser);
 
 console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser)); // array ke andar array / key values ko array bna deta hai

  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
  // course.courseInstructor

  const { courseInstructor} = course
  console.log(courseInstructor);
  

//API

// {
//    " name": "aditi",
//     "coursename": "js in hindi",
//    " price": "free"
// }

[
    {},
    {},
    {}
]