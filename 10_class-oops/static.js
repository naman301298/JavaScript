class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const hitesh=new user("hitesh")
console.log(hitesh.createId());
hitesh.logMe()


class Teacher extends user{
    constructor(username,gmail){
      super(username)
      this.gmail
    }
}

const iphone=new Teacher("iphone","i@gmail.com")
Teacher.logMe()
console.log(iphone.createId());
