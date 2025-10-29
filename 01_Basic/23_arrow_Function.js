//Current contest ko refer karta hai 


// function normal(){
//     this.username="Naman"
//     console.log(this.username);
//     }
//     const arrow=()=>{
//         this.username="Naman"
//         console.log(this.username);
        
//     }
//     normal()
//     arrow()
    


const user={
    username:"Hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},Welcome To Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);

// }
// chai()

// const chai=function(){
//     let username="hitesh"
//     console.log(username);
    
// }
// chai()

// ==========yeha pe chai variable mein hum function store kar rahe hai================


// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username)
//     console.log(this)
    
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,3));


// ================isko teen tarike se use kar sakte hai=============

// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
// const addTwo=(num1,num2)=> { return num1+num2}

const addTwo=(num1,num2)=> ({username:"Hitesh"})

// console.log(addTwo(3,6));

const myArr=[2,3,4,5,6,7]
// myArr.forEach(function () {})
myArr.forEach( () => {})


