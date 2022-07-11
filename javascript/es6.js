// var name = "Tinku Bhati";
// var name = "roop";
// console.log("name",name)

// let lang = "javascript";            //let has block scope  
 
// const data = "english";
// const menu = ["tinku","roop"]
// menu.push("services");

// let welcome = () => {
//     console.log(" welcome to arrow functions")
//     console.log(" welcome row functions")
//     console.log(" welcome rrow functions")
//     console.log(" welcome to arnctions")
//     console.log(" welcome to arrow fu")

// }
/*let sum = (a,b) => a+b;
let welcome = () => "welcome to arrow functiom"
let greet = (name) => `welcome new prodaptian ${name}`*/



//welcome()
//rest(combining) and spread(split) operators

// var arr = [12,23,3,3432,323]
 
// function sum(data){
//     var total=0;
//     for(price of data){
//         total += price;
//     }
//     return total;

// }


//  //REST operator
// function sum(...data){
//     var total=0;
//     for(price of data){
//         total += price;
//     }
//     return total;

// }

//SPREAD operator
// Math.max(...arr)

//template literals

//Destructuring 
var array = [12,323,323,12,221,1245,5654];
//let [a,b] = array;
 let [a,...b] = array;

 var person = {
       name: "Tinku",
       mail: "tinkubhatirt@gmail.com",
       
 }

 var {name : fname, mail} = person     //we can give alias name by (name: aliasname)
   console.log(fname);
   console.log(mail)