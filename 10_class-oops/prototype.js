//Example code of the execuation 


// let myname="naman      "

// // console.log(myname.trim().length);

// String.prototype.trueLength=function(){
//     console.log(this);
    
//     console.log(`True Length is ${this.trim().length}`);
    
// }

Object.prototype.naman=function(){
console.log(`Thisis the present inthe all protoType`);
}

myname.trueLength()

let myHeros=['thor','spieder']

let heroPowers={
    thor:"hamer",
    spiderman:"sling",
  getSpiderPower:function(){
console.log(`spidy power is the ${this.spiderman}`);

  }


}

// heroPowers.naman()
// myHeros.naman()


//inheritance


const user={
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher={
makeVideos:true
}

const TeachingSupport={
    isAvailable:true

}
const TaSupport={
    makeAssigment:"js Assigment",
    fulltime:"true",

    __proto__:TeachingSupport
}
Teacher.__proto__=user

//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

