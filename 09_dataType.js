const id=Symbol('123')
const anotherId=Symbol('123')


// console.log(id);
// console.log(id==anotherId);
// console.log(id===anotherId);


const myFuntion =function (params) {
    console.log("Hello Naman");
    
}

// let myName="Naman"
// let anothername=myName
// anothername="Sonali"
// console.log(myName);

// console.log(anothername);

//Stack(Primite)   , Heap(Non-primitive)
let userOne={
    name:"Sonalil",
    upi:"Sonali@ybl"
}
userTwo=userOne
userTwo.name="Aakriti"

console.log(userOne.name);
console.log(userTwo.name);

