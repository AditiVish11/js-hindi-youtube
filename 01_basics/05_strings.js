const name = "Aditi"
const repoCount = 50

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aditi-vishwa-karma')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4,3)
console.log(anotherString);
const newStringOne = "   aditi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = " https://aditi.com/aditi%20vishwakarma"

console.log(url.replace('%20','-'));

console.log(url.includes('aditi'));
console.log(url.includes('sundar'));


console.log(gameName.split('-'));


 


