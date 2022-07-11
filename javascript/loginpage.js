var loginform = document.getElementById("loginform");



loginform.addEventListener("submit", function (e) {
    e.preventDefault();

    //    var  uservalue = document.getElementById("username");
    //    console.log(uservalue.value)
    // console.log(uservalue.value)
    // console.log(loginform["username"].value)

    // var len = username.length;
    // if (len < 6) {
    //     console.log("username must be at least six characters ")
    //     return false;
    // }
    var username = loginform.elements["username"].value;
    var password = loginform.elements["password"].value;
    var email = loginform.elements["email"].value;

    var loginData = {
        username,
        password,
        email
    }
    console.log(loginData)
    var store = JSON.stringify(loginData)
    console.log(store)

})


