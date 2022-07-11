//var i=0;
//while loop
// while(i<=10){
//     console.log(i);
//     i++;
// }
//do while loop
// do{
//     console.log("i value is:",i);
//   i++;

// }while(i<=10);
//FOR LOOP
// for(i=0;i<=10;i++){
//     console.log("i value is:",i);
// }
//Unefficient code or performance issue
// var brands = ["Realme", "Oneplus", "vivo", "Oppo", "samsung"];
// for (var i = 0; i < brands.length; i++) {
//     console.log("brand name is", brands[i])

// }
// var students = ["Tinku", "Roop", "Rohan", "Ravi", "Suraj", "Yogesh"];
// for (var i = 0; i < students.length; i++) {
//     console.log("student name is", students[i])

// }

//issue solved
// var brands = ["Realme", "Oneplus", "vivo", "Oppo", "samsung"];
// var brandslength = brands.length;
// for (var i = 0; i < brandslength; i++) {
//     console.log("brand name is", brands[i])

// }
// console.time("students")
// var students = ["Tinku", "Roop", "Rohan", "Ravi", "Suraj", "Yogesh"];
// var studentslength = students.length;
// for (var i = 0; i < studentslength; i++) {
//     console.log("student name is", students[i])
//     console.timeEnd("students")

// }
//for time complexity console.time will be required
// console.time("brands")
// var students = ["Tinku", "Roop", "Rohan", "Ravi", "Suraj", "Yogesh"];
// for (var i = 0; i < students.length; i++) {
//     console.log("student name is", students[i])

// }console.timeEnd("brands")
//for of
// var brands = ["Realme", "Oneplus", "vivo", "Oppo", "samsung"];
// for(brand of brands){
//     console.log(brand)
// }


// var students = ["Tinku", "Roop", "Rohan", "Ravi", "Suraj", "Yogesh"];

// for(student of students){
//     console.log(student)
// }

//for of returns the item
//for in returns the indexes

// var students = ["Tinku", "Roop", "Rohan", "Ravi", "Suraj", "Yogesh"];
// for(student in students){
//         console.log(student)
//      }


//      var brands = ["Realme", "Oneplus", "vivo", "Oppo", "samsung"];
//      for(brand in brands){
//         console.log(brand)
//      }
var person = {
    name: "Tinku",
    age: 22,
    email: "tinkubhatirt@gmail.com"
}
for (prop in person) {
    console.log(prop, person[prop])
}


var students = [{
    name: ["Tinku", "Roop", "Rohan", "Ravi", "Suraj", "Yogesh"],
    age: [22, 23, 22, 23, 24, 21],
    dept: ["IT", "IT", "IT", "IT", "IT", "IT"]
},
{
    name: ["Yogita", "Jyoti", "Sahana", "Aman", "Apoorva", "Yogesh"],
    age: [21, 22, 22, 23, 24, 21],
    dept: ["IT", "IT", "IT", "IT", "IT", "IT"]
},
{
    name: ["Pandey", "shashtri", "Rohan", "Ravi", "Suraj", "Yogesh"],
    age: [22, 23, 22, 23, 24, 21],
    dept: ["IT", "IT", "IT", "IT", "IT", "IT"]
}]
// for (prop in studentname) {
//     console.log(studentname, studentname[prop])
// }

for(student of students){
   console.log("Name",student.name)
   console.log("Age",student.age)
   console.log("Dept.",student.dept)
}

for(student of students){
   for(key in student){
    console.log(key,student[key])
   }
}