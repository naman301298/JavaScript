// “A prototype is an object in JavaScript that allows other objects to inherit properties and methods, enabling object-oriented behavior through prototype chaining.”




//This is the perfact example 

// function Student(name) {
//     this.name = name;
//   }
  
//   Student.prototype.greet = function() {
//     console.log(`Hi, I'm ${this.name}`);
//   };
  
//   const s1 = new Student("Naman");
//   const s2 = new Student("Vijendra");
  
//   s1.greet(); // Hi, I'm Naman
//   s2.greet(); // Hi, I'm Vijendra  




function multiBy5(num){
   return num*5;
}

multiBy5(5)
multiBy5.power=2

// console.log(multiBy5(5));
// console.log(multiBy5.power);
// console.log(multiBy5.prototype);


// This ka matalab jis jisne ne bhi bulya hai uske pass jao 
//selfe define function

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
    
}
const chai= new createUser("chai",5)
const tea= new createUser("tea",50)

chai.printMe()
tea.printMe()

tea.increment()
chai.increment()

