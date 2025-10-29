//Immediately Invoked Function Expression (IIFE)

(function chaii() {
    //named IIfE
    console.log(`DB CONNECTED`);

})();

(function aurcode() {
    console.log(`DB CONNECTED TWO`);

})();

(() => {
    console.log(`DB CONNECTED TWO`);

})();

///////using the name parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})("Hitesh")


// ==============✅ Example 1: Simple Nested IIFE==============

    (function outer() {
        console.log("Inner IIFE");

        (function Inner() {
            console.log("OUTER IIFE");

        })();
    })();

    let var1=10;
    let var2=5;
    function addNum(){
        let total=num1+num2;
        return total;
    }
    let result1=(val,var2)
    let result2=(10,2)
