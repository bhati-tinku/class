var a = 10;
/*declaring the fuction
function fn(){
    console.log("tjis is a function")
}
//calling a function
fn()*/

/*function fn(){
    return "this is a function";

} console.log(fn)*/

/*function sum(a,b){
    var total= a+b;
    return total; 
}
//it will not take more than two arguments 
//if given more than two arguments it will consider starting two arguments only
//calling a function without paranthesis() will return the function itself
/*ƒ sum(a,b){
    var total= a+b;
    return total; 
}  */
//passing n number of arguments using nuiltin "arguments" array inside the function
//builtin arguments array inside the function
var cart = [
    {
      productid: 1,
      brand: "mi",
      price: 12000,
      qty:1
    },
    {
        productid: 1,
        brand: "mi",
        price: 12000,
        qty:1
      },
      {
        productid: 1,
        brand: "mi",
        price: 21000,
        qty:1
      }

]
function getcartTotal(){
    //console.log(arguments)
    var total = 0;
    for(price of arguments){
        total += price
    }
    return total;
} //hoisting

// welcome()
//  function welcome(){
//     console.log("Welcome function")
//  }
//   var Greet = function(){
//     console.log("Welcome function")
//  }
//  Greet()

// a function which calls itself                  
// (function(){                                  !          (function(argument){  
//     console.log(" self invoking function")    !          console.log(" self invoking function") 
// })()                                          !         })(argument value) 

// function welcome(){
//     return "Welcome";
//     console.log("hsgdf")   //it will not print this because after return it igores everthing 
// }
