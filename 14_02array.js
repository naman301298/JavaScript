const marvel_heros=["srk","kriti","sonaili","Nova"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros);


//=====================(speerate)===================
// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

//=======================(Flat)==========================
// const another_array=[1,2 ,[3,4 ,[5,6 ,[7,8]]]]
// const real_array=another_array.flat(Infinity)
// console.log(real_array);


//=======================(Array Bana ke liye )==========================

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name:"Hitesh"})) //intersting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

//is,from,of    (Chatgpt)
