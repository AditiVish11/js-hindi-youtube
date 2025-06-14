const myObject = {
    js: 'javascript',
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = [ "js", "Cpp", "rb", "py", "java"]

for (const key in programming) {
   console.log(programming[key]);
   
        
    }
// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "INDIA")
// for (const key in map) {
//     console.log(key);
    
// } /// map ke uper forin iteration nhi lagta