// /*alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");
// alert("welcome to javascript");*/
// // primitive data types
// // js supports string data typeof ("shgdbfhj",'dsfdfr').
// // it supports number 1200,1200.00(int,float);
// // Boolean data types (true/false)
// // undefined 
// // Null
// // by using var keyword only we can define a variable
// // name -> identifier(all variable name)

// // var name = "JavaScript";
// // var price = 90;
// // var 8name = "jfng";--> wrong Way;
// // var name8v = "dfgvdd";
// // var firstName = '';
// // var $name = '';
// // alert(name);
// // console.log(name);


// var brand='Lenovo';
// var name="POCO";
// var price = 27999;
// var color ='Night Black';
// var ram ='6GB';
// var storage =128;
// var processor="SD870";
// console. log( name,brand,color,ram,storage,processor);


// // concatenation
// var firstName="Tinku";
// var lastName="Bhati";
// // var fullName = firstName + " "+ lastName;

// var fullName=`welcome ${firstName} ${lastName}`;
// console.log(fullName);
// // ARRAYS
// // declaration of arrays
// var students=["Bhati",95,null,fullName];
// // here bhati will be at Index 0
// // we can store array inside an array
// var student=["Bhati", 95, null, fullName, [1, 2, 3, [1,2,3]]]; 
// console.log(student);
// // Object data type.
// // we declare it in form of property and values
// // functions
// // we use curly braces{} for objects 
// var dog={
//     color:"goldenBrown",
//     price:2000,
//     height:"2feet",
//     activities:["play","barks","eats"],
//     address:{
//         city:"Bengalore",
//         met:function () ,
//     } 
    
//     breed:"husky",
//       runs: function(){
//         console.log("Dog Runs")
//     },
//     eats: function(){
//         console.log("Dog Eats")
//     }
// }
// // calling a function --> objectname.property.name
// console.log(dog.activities[2])

// dog.runs()

// function test(){
//     var lang="English";
//     console.log(lang);
// }

// test()

function fn(){
    var lang = "English";
    console.log(lang);
}

function cook(param1,param2,param3){
    var result = `By using ${param1} and ${param2} and ${param3} I made recipe,`
   return result;
}

function mul(a,b){
    return a*b;
}

var student = {
    name:"Tinku",
    age: 22,
    email:"tinkubhatirt@gmail.com"
}

var students = [
    {
    profile_pic:"abc.jpg",
    name:"Tinku",
    age: 22,
    email:"tinkubhatirt@gmail.com",
    profession:"developer"
},

 {
    profile_pic:"abc.jpg",
    name:"Tinku",
    age: 22,
    email:"tinkubhatirt@gmail.com",
    profession:"developer"
   
},

 {
    profile_pic:"abc.jpg",
    name:"Tinku",
    age: 22,
    email:"tinkubhatirt@gmail.com",
    profession:"developer"
},

 {
    profile_pic:"abc.jpg",
    name:"Tinku",
    age: 22,
    email:"tinkubhatirt@gmail.com",
    profession:"developer"
}
]




