function sayMyName() {
    console.log("N")
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("N")
}

// sayMyName()

// function addTwoNumbers(Number1,Number2){
//     console.log(Number1+Number2);
// }

// const result= addTwoNumbers(77,null)
// console.log("Result :", result);


// function addTwoNumbers(Number1,Number2){
//     // let result=Number1+Number2;
//     // return result
//     return Number1+Number2
// }
// const result= addTwoNumbers(77,3)
// console.log("Result :", result);

function loginUserMessage(user="sam") {
    if (!undefined) {
        console.log("Please enter a username");
        return
    }
    return `${user} just logged in`
}
// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage())


//===============(20)


//===============(ek sath Number diya or Seperate kaena Ho)============

// function calculateCardPrice(...num1){
// return num1
// }
// console.log(calculateCardPrice(2,4,5));




//===============(khud se function bano or usko execute kro 
// (variable se pass karo ya normal tarike se) )============

//const user={
//     username:"Hitesh",
//     price:999
// }

// function handleObject(anyobject){
// console.log(`Username is ${anyobject.username}, and Price is ${anyobject.price}`);
// }

// // handleObject(user)   //chatGpt
// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,499,388]

function returnSecondValue(getArray){
return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400]));  //Chatgpt





// function findLargest(arr) {
//     let largest = arr[0]; // Step 1: assume first element is the largest
  
//     for (let i = 1; i < arr.length; i++) { // Step 2: loop through array
//       if (arr[i] > largest) {               // Step 3: compare each element
//         largest = arr[i];                   // Step 4: if bigger, update 'largest'
//       }
//     }
  
//     return largest; // Step 5: return the largest value
//   }
  
//   // Example:
//   const numbers = [10, 45, 32, 67, 23];
//   console.log("Largest number is:", findLargest(numbers));



// ============Find the Largest Elememt in the Array===========
  

function findLargest(arr){
    let largest =arr[0]

    for(let i=1; i<arr.length; i++){
    if(arr[i]>largest)
        largest=arr[i]
    }
 return largest
}

const numbers=[34,54,76,76,87,56,76,34,20,90]
console.log(findLargest(numbers))



// ============Find the Smallest Elememt in the Array===========

function findmin(arr){
 let min=arr[0]
 for(let i=1;i<arr.length;i++){
    if(arr[i]<min)
        min=arr[i]
 }
 return min
}
const number=[4,6,4,7,8,6,5,7,8,3]
console.log(findmin(number));

// ============Usin the shortcut===========

// const numbers=[34,54,76,76,87,56,76,34,20,90]
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));




// ============ Find The second Largest Element ===========

const numbers = [34, 54, 76, 76, 87, 56, 76, 34, 20, 90];

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      // When we find a new largest, move the old one to secondLargest
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      // When current number is between largest and secondLargest
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log("Second Largest Number:", findSecondLargest(numbers));


// ============Usin the shortcut===========

const numbers = [34, 54, 76, 76, 87, 56, 76, 34, 20, 90];

const uniqueNumbers = [...new Set(numbers)]; // remove duplicates
uniqueNumbers.sort((a, b) => b - a); // sort descending

console.log("Second Largest:", uniqueNumbers[1]);