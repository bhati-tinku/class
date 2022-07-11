function welcome() {
    console.log("This is a welcome function");
}


console.log("START");
setTimeout(welcome, 10000)
console.log("end");



//promise object takes a function as a parameter and Function(resolve and reject object)