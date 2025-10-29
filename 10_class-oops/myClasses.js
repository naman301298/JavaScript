class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){

        return `${this.username.toUpperCase()}`
    }
}

const chai=new user("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



//Behind the 
function User(username,email,password){
    this.username=username;
    this.email=email
    this.password=password
}