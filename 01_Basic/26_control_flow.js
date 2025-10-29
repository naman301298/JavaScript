// if (condition) {

// }
// const userLoggedIn = true
// const deditCard = true
// if (userLoggedIn && deditCard) {
//     console.log("Allow to buy Course");

// }



// const month = 3
// switch (month) {
//     case 1:
//         console.log("january");

//         break;
//     case 2:
//         console.log("February");

//         break;
//     case 3:
//         console.log("March");

//         break;
//     case 4:
//         console.log("April");

//         break;

//     default:
//         console.log("NO Month is selested ")
//         break;
// }

// const userEmail = "h@gmail.com"
const userEmail = []

if (userEmail.length===0) {
    // console.log("Got User Email");

}
else {
    console.log("Don't have user email");

}

//falsy value
// false ,0,-0,BigInt 0n,"",undefined,NaN

//truthy value
//"0",'false'," ",[],{ },function(){}


//===========To CHeck the empthy array============

// if (userEmail.length===0) {
//     console.log("Array is Empthy");

// }

//===========To CHeck the empthy Object============

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empthy");
    console.log(Object);
    
    
}

// (false==0) (false=='') (0=='')====all true

//Nullish coalescing (??):null undefined 

let val1;
// val=5??10;
// val1=null ?? 10 ?? 10

console.log(val1);

//Terniary operator

const age=20
let canvote=(age>=18) ?console.log("yes"):console.log("no");

// console.log(canvote);
