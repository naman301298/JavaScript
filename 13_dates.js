// Dates

let myDate =new Date()

// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());

// console.log(myDate.toJSON());
//  console.log(myDate.toLocaleString());

//  console.log(typeof myDate);

let myCreatedDate=new Date(2025, 11,30)
// console.log(myCreatedDate.toDateString());

let myTimeStemps=Date.now()

// console.log(myTimeStemps);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))    //chatgpt

 let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMonth()+1);

// `${newDate.getHours()} and time is `

newDate.toLocaleString('default',{
    weekday:"long"
})


 

