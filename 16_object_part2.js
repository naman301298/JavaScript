// const user=new Object() //singletone(chatgpt)

const user={}

user.id="123er"
user.name="Nova"
user.isLoggedIn=false

// console.log(user);

const regularUser={
    email:"some@gmail.com",
    fullname:{
 firstname:"Hitesh",
 lastname:"Choudhary"
    },
}
// console.log(regularUser.fullname?.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={3:"e",4:"f"}

// const obj3={obj1,obj2}
// console.log(obj3);

 //const obj3={(obj1).concat(obj2)}  //chatgpt

//  const obj3=Object.assign({},obj1,obj2)
   const obj3={...obj1,...obj2,...obj4}
//  console.log(obj3);

const oldusers=[
    {
        id:1,
        gmail:"Ha@gmail.com"
    },
    {
        id:1,
        gmail:"Ha@gmail.com"
    },
    {
        id:1,
        gmail:"Ha@gmail.com"
    }
]
// console.log(oldusers[1].gmail);
// console.log(user);


//=======================(To Know thw entries of the object )==========================

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

// console.log(regularUser.hasOwnProperty('fullname'));


const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"Hitesh"
}
// console.log(course.courseInstructor);

// const {courseInstructor: instructor}=course
// console.log(courseInstructor);
// console.log(instructor);

const{price:p}=course
console.log(p);
 







