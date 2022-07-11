var a = 10;  //Global variable
function sumTen(){
      var b=10;   //local/private variable          // without var keyword it becomes a global variable b=10; and can be accessed anywhere
      return a+b;
}
sumTen()
console.log(b)

var x = 0;
function parent(){
    var x = 0;  //making it local helps in setting its value again to 0 so that no calculation mistakes are made
    var y = 20;
    function child(){
        return x+y;
    }
    return child()
}
var calc = parent()
calc()