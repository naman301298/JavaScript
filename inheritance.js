class User{
    constructor(username){
        this.username = username
    }
logMe(){
    console.log(`USERNAME is ${this.username}`);

}
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const chai=new Teacher("chai","Chai@gmail.com","123")
chai.addCourse()
chai.logMe(); // USERNAME is chai

const masalaChai=new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof user);
console.log(chai instanceof Teacher)


















// const user1 = new User("Naman");
// user1.logMe(); // USERNAME is Naman
