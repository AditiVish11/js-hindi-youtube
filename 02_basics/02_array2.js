const marvel_heros = ["thor" , "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3] [1]);


 //const allHero = marvel_heros.concat(dc_heros)   // concat = they merge two aur more array in one array .
//console.log(allHero);


const all_new_heros = [...marvel_heros, ...dc_heros]  // spread= they merge two aur more array in one array .
//console.log(all_new_heros);

const another_array = [1 ,2 ,3, [4, 5, 6], 7,[6, 7, [4, 5]] ]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aditi"));  //// ques - kya ye array hai - output false

 
console.log(Array.from("Aditi")); // convert into array ['A', 'D', 'I', 'T', 'I,]

 console.log(Array.from({name: "Aditi"}));  //interseting

 let score1 = 100
 let score2 = 200 
 let score3 = 300
 
 console.log(Array.of(score1, score2, score3));
 