const descriptrer=Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descriptrer);


// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai={
    name:'ginger chai',
    price:'250',
    isAvailable:true
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,"name",{
Writable:false,
enumerable:false 

})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
