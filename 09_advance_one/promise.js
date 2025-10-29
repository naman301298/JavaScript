// ======================{Pizza Example}======================



// const orderPizza = new Promise((resolve, reject) => {
//     let ingredientsAvailable = true;

//     setTimeout(() => {
//       if (ingredientsAvailable) {
//         resolve("🍕 Pizza is ready!");
//       } else {
//         reject("😞 Ingredients not available!");
//       }
//     }, 2000);
//   });

//   // Using the promise
//   orderPizza
//     .then((pizza) => {
//       console.log(pizza);
//     })
//     .catch((error) => {
//       console.log(error);
//     });



// fetch("https://api.github.com/users/naman301298").then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {

    //Do an async task
    //DB calls,cryptography,network

    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000);
})
promiseOne.then(function () {
    console.log("promise Counsumed");

})

// ======================PromiseTwo======================

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Asynce resolved");

})
// ======================PromiseThree======================
const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            user: "Naman",
            email: "Chai@gmail.com"
        })
    }, 1000)
})

PromiseThree.then(function (user) {
    console.log(user);

})

// ======================PromiseFour======================

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve()
        let error = true;
        if (!error) {
            resolve({ username: "Hitesh", password: "123" })
        }
        else {
            reject("ERROR: Something went wrong ")
        }
    }, 1000)
})
// promiseFour.then(function(){
//     console.log("");

// })

promiseFour
    .then((user) => {
        console.log(user);
        return user.username

    }).then((username) => {
        console.log(username);

    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolve or rejected")
    )


// ======================PromiseFIve======================

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Aman", password: "123" })
        }
        else {
            reject("ERROR: JS went wrong ")
        }
    }, 1000)
});

async function CounsumePromiseFive() {
    try {
        const resolve = await promiseFive
        console.log(resolve);

    } catch (error) {
        console.log(error);

    }

}
CounsumePromiseFive()


// ======================{Using Try-atch}======================


// async function getAllUsers(){
//    try {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
// } catch (error) {
//        console.log("E:",error);

//    }

// }
// getAllUsers()

// ======================{Using .then}======================

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
// return response.json()
// })
// .then((data)=>{
// console.log(data);

// })
// .catch((error)=>{console.log(error);
// })

fetch("https://api.github.com/users/naman301298")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log("E:", error);
    })


    // ======================{shortest version}======================

    
    fetch("https://api.github.com/users/naman301298")
    .then((response)=>{
   response.json()
    })
    .catch(function(error){
        console.log(error,"Unable to fetch");
        
    }) 
    