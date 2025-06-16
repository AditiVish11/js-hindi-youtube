// const coding = [ "js","ruby","java","python", "cpp"]

//  const value = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(value);

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums =  myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) =>{
//   return num > 4
// })

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);


const books = [
    {
        title: 'Book One' , genre: 'Friction', publish:1981, edition:2004
    },
    {
        title: 'Book Two' , genre: 'History', publish:1982, edition:2005
    },
    {
        title: 'Book Three' , genre: 'History', publish:1983, edition:2006
    },
    {
        title: 'Book Four' , genre: 'English', publish:1984, edition:2007
    },
    {
        title: 'Book Five' , genre: 'English', publish:1981, edition:2008
    },
    {
        title: 'Book Six' , genre: 'Friction', publish:1981, edition:2008
    },
    {
        title: 'Book Seven' , genre: 'Friction', publish:1981, edition:2009
    },
    {
        title: 'Book Eight' , genre: 'History', publish:1981, edition:2010
    },
    {
        title: 'Book Nine' , genre: 'Friction', publish:1981, edition:2004
    }
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter( (bk) =>  { return bk.publish >= 2000})
console.log(userBooks);
