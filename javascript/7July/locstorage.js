var loginform = document.getElementById("loginform");

loginform.addEventListener("blur", function (e) {
    e.preventDefault();



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


    localStorage.setItem("loginform",JSON.stringify(loginData));
})