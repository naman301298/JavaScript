const user={
    username:"Hitesh",
    loginCount:8,
    singnedIn:true,

    getUserDetails:function(){

        // console.log("get user Details");
        // console.log(`username: ${this.username}`);
        // console.log(this);
        
        
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());


//======================Constructor function====================

// const promise= new promise()
// const date=new Date()

function User(username,loginCount,isLoggedIn){
  this.username=username
  this.loginCount=loginCount
  this.isLoggedIn=isLoggedIn

  this.gretting=function(){
    console.log(`welcome,${this.username}`);
    
  }

  return this;
}

const user1=new User("Hitesh",8,"true")
const user2=new User("Naman",8,"true")

console.log(user1.constructor);
// console.log(user2);
