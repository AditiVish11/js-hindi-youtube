// Immediately Invoked Functions Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
}) ();

 // IN ARROW FUNCTION
 ( () => {
console.log(`DB CONNECTED TWO`);

} ) ();

 ( (name) => {
    console.log(`DB CONNECTED ${name}`);
    }) ('Aditi')