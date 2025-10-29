// jab hum litteral ki tarah declear karte hai to single tan nahi banta hai

//constructor se banta hai singleton (object.create)


const mySym=Symbol("key1")

const JsUser={
    "full name":"Hitesh Choudhary",
    name:"Hitesh",
    [mySym]:"mykey1",
    age:18,
    location:"Delhi",
    email:"naman@google.com",
    isLoggedIn:"false",
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(JsUser[mySym]);


// JsUser.email="hitesh@gmail.com"
// // Object.freeze(JsUser)
// console.log(JsUser.email);

// JsUser.email="hitesh@chatgpt.com"
// console.log(JsUser.email);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTw());

